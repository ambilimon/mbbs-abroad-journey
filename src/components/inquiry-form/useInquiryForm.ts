
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { saveStudentInquiry } from "@/lib/database";
import { inquiryFormSchema, StudentInquiryFormValues, StudentInquiryFormProps } from "./types";

export const useInquiryForm = ({ universityId, onSuccess }: StudentInquiryFormProps) => {
  const { toast } = useToast();
  const [universities, setUniversities] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Setup form with Zod validation
  const form = useForm<StudentInquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      college: "",
      preferredUniversity: universityId ? String(universityId) : "",
      message: "",
    },
  });

  // Load universities from Supabase
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const { data, error } = await supabase
          .from('universities')
          .select('id, name');
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          setUniversities(data);
        } else {
          // Fallback to localStorage if no data in Supabase yet
          const stored = localStorage.getItem('universities');
          if (stored) {
            const parsedUniversities = JSON.parse(stored);
            setUniversities(parsedUniversities);
          }
        }
      } catch (e) {
        console.error("Error loading universities", e);
        // Fallback to localStorage
        try {
          const stored = localStorage.getItem('universities');
          if (stored) {
            const parsedUniversities = JSON.parse(stored);
            setUniversities(parsedUniversities);
          }
        } catch (e) {
          console.error("Error loading universities from localStorage", e);
        }
      }
    };
    
    fetchUniversities();
  }, []);

  const onSubmit = async (values: StudentInquiryFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const inquiryData = {
        ...values,
        timestamp: new Date().toISOString(),
        status: 'new',
      };
      
      const { success, error } = await saveStudentInquiry(inquiryData);
      
      if (!success) {
        throw error;
      }
      
      toast({
        title: "Inquiry Submitted!",
        description: "We'll contact you shortly about your application.",
      });
      
      // Reset form
      form.reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      console.error("Error saving inquiry", e);
      
      // Fallback to localStorage
      try {
        const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries.push({
          ...values,
          timestamp: new Date().toISOString(),
          id: Date.now()
        });
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        
        toast({
          title: "Inquiry Submitted!",
          description: "We'll contact you shortly about your application.",
        });
        
        // Reset form
        form.reset();
        
        if (onSuccess) {
          onSuccess();
        }
      } catch (e) {
        console.error("Error saving inquiry to localStorage", e);
        toast({
          title: "Error",
          description: "There was a problem submitting your inquiry.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    universities,
    isSubmitting,
    onSubmit
  };
};
