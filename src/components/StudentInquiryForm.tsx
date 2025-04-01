import {
  useEffect,
  useState,
} from 'react';

import { GraduationCap } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import AnimatedButton from '@/components/AnimatedButton';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';

interface StudentInquiryFormProps {
  universityId?: number;
  className?: string;
  sticky?: boolean;
  onSuccess?: () => void;
}

interface University {
  id: number;
  name: string;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  preferredUniversity: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type StudentInquiryFormValues = z.infer<typeof formSchema>;

const StudentInquiryForm = ({ universityId, onSuccess, className, sticky = false }: StudentInquiryFormProps) => {
  const { toast } = useToast();
  const [universities, setUniversities] = useState<University[]>([]);
  
  // Load universities from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('universities');
      if (stored) {
        const parsedUniversities = JSON.parse(stored);
        setUniversities(parsedUniversities);
      }
    } catch (e) {
      console.error("Error loading universities from localStorage", e);
    }
  }, []);
  
  // Setup form with Zod validation
  const form = useForm<StudentInquiryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredUniversity: universityId ? String(universityId) : "",
      message: "",
    },
  });

  const onSubmit = async (data: StudentInquiryFormValues) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", data);
      
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted successfully.",
      });
      
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${sticky ? "sticky top-24" : ""} ${className || ""}`}>
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
          <GraduationCap className="w-6 h-6 text-blue-700" />
        </div>
        <h3 className="text-2xl font-bold text-blue-900">Start Your Medical Journey Today</h3>
        <p className="text-gray-600 mt-2">Fill out this form to get personalized guidance for your medical education abroad</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Input type="email" placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {universities.length > 0 && !universityId && (
            <FormField
              control={form.control}
              name="preferredUniversity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred University</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          )}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your educational background and what you're looking for..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <AnimatedButton type="submit" className="w-full" variant="primary">
            Submit Inquiry
          </AnimatedButton>
        </form>
      </Form>
    </div>
  );
};

export default StudentInquiryForm;
