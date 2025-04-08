
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

// Sample data store - in a real app, this would use a backend API
let universityStorage: any[] = [];
try {
  const stored = localStorage.getItem('universities');
  if (stored) {
    universityStorage = JSON.parse(stored);
  }
} catch (e) {
  console.error("Error loading universities from localStorage", e);
}

// If no universities in storage, use the default ones from UniversitySection
if (universityStorage.length === 0) {
  universityStorage = [];
}

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  location: z.string().min(2, "Location required"),
  country: z.string().min(2, "Country required"),
  description: z.string().min(10, "Description too short"),
  tuitionRange: z.string().min(2, "Tuition range required"),
  image: z.string().url("Must be a valid URL"),
  features: z.string().min(2, "Features required"),
});

type UniversityFormValues = z.infer<typeof formSchema>;

interface UniversityFormProps {
  universityId: number | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const countryOptions = [
  { value: "russia", label: "Russia" },
  { value: "georgia", label: "Georgia" },
  { value: "philippines", label: "Philippines" },
  { value: "belarus", label: "Belarus" },
  { value: "moldova", label: "Moldova" },
  { value: "bulgaria", label: "Bulgaria" },
  { value: "bosnia", label: "Bosnia" },
  { value: "uzbekistan", label: "Uzbekistan" },
  { value: "kazakhstan", label: "Kazakhstan" },
  { value: "kyrgyzstan", label: "Kyrgyzstan" },
  { value: "malaysia", label: "Malaysia" },
  { value: "nepal", label: "Nepal" },
];

const UniversityForm = ({ universityId, onSuccess, onCancel }: UniversityFormProps) => {
  const { toast } = useToast();
  
  // Setup form with Zod validation
  const form = useForm<UniversityFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      country: "russia",
      description: "",
      tuitionRange: "",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
      features: "",
    },
  });

  // Load university data if editing
  useEffect(() => {
    if (universityId !== null) {
      const university = universityStorage.find((u: any) => u.id === universityId);
      if (university) {
        form.reset({
          name: university.name,
          location: university.location,
          country: university.country,
          description: university.description,
          tuitionRange: university.tuitionRange,
          image: university.image,
          features: university.features.join(", "),
        });
      }
    }
  }, [universityId, form]);

  const onSubmit = (values: UniversityFormValues) => {
    try {
      const featuresArray = values.features.split(",").map(feature => feature.trim());
      
      if (universityId === null) {
        // Add new university
        const newId = universityStorage.length > 0 
          ? Math.max(...universityStorage.map((u: any) => u.id)) + 1 
          : 1;
        
        const newUniversity = {
          id: newId,
          name: values.name,
          location: values.location,
          country: values.country,
          description: values.description,
          tuitionRange: values.tuitionRange,
          image: values.image,
          features: featuresArray,
        };
        
        universityStorage.push(newUniversity);
      } else {
        // Update existing university
        const index = universityStorage.findIndex((u: any) => u.id === universityId);
        if (index !== -1) {
          universityStorage[index] = {
            ...universityStorage[index],
            name: values.name,
            location: values.location,
            country: values.country,
            description: values.description,
            tuitionRange: values.tuitionRange,
            image: values.image,
            features: featuresArray,
          };
        }
      }
      
      // Save to localStorage
      localStorage.setItem('universities', JSON.stringify(universityStorage));
      
      onSuccess();
    } catch (error) {
      console.error("Error saving university", error);
      toast({
        title: "Error",
        description: "There was a problem saving the university data.",
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
                <FormLabel>University Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Tbilisi State Medical University" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Tbilisi, Georgia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countryOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Provide a brief description of the university" 
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="tuitionRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tuition Range</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. ₹25-35 Lakhs total" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/image.jpg" {...field} />
                </FormControl>
                <FormDescription>
                  Use a direct link to an image
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Features</FormLabel>
              <FormControl>
                <Input placeholder="English-Medium, WHO & NMC Approved, Established in 1957" {...field} />
              </FormControl>
              <FormDescription>
                Separate features with commas
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            {universityId !== null ? 'Update University' : 'Add University'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UniversityForm;
