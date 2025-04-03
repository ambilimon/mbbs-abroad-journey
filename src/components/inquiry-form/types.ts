
import { z } from "zod";

// Validation schema
export const inquiryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  college: z.string().optional(),
  preferredUniversity: z.string().min(1, "Please select a preferred university"),
  message: z.string().optional(),
});

export type StudentInquiryFormValues = z.infer<typeof inquiryFormSchema>;

export interface StudentInquiryFormProps {
  universityId?: number;
  onSuccess?: () => void;
  className?: string;
  sticky?: boolean;
}
