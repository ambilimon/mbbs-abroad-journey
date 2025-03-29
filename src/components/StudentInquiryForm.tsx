
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  college: z.string().optional(),
  preferredUniversity: z.string().min(1, "Please select a preferred university"),
  message: z.string().optional(),
});

type StudentInquiryFormValues = z.infer<typeof formSchema>;

interface StudentInquiryFormProps {
  universityId?: number;
  onSuccess?: () => void;
}

const StudentInquiryForm = ({ universityId, onSuccess }: StudentInquiryFormProps) => {
  const { toast } = useToast();
  const [universities, setUniversities] = useState<any[]>([]);
  
  // Load universities from localStorage
  useState(() => {
    try {
      const stored = localStorage.getItem('universities');
      if (stored) {
        const parsedUniversities = JSON.parse(stored);
        setUniversities(parsedUniversities);
      }
    } catch (e) {
      console.error("Error loading universities from localStorage", e);
    }
  });
  
  // Setup form with Zod validation
  const form = useForm<StudentInquiryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      college: "",
      preferredUniversity: universityId ? String(universityId) : "",
      message: "",
    },
  });

  const onSubmit = (values: StudentInquiryFormValues) => {
    // In a real app, this would send data to a backend API
    console.log("Form submitted:", values);
    
    // Save inquiry to localStorage for demonstration
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
      console.error("Error saving inquiry", e);
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Your email address" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="college"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current College (if any)</FormLabel>
              <FormControl>
                <Input placeholder="Your current college/school" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferredUniversity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred University</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a university" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {universities.map((university) => (
                    <SelectItem key={university.id} value={String(university.id)}>
                      {university.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Any specific questions or requirements?" 
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Submit Inquiry</Button>
      </form>
    </Form>
  );
};

export default StudentInquiryForm;
