
import { Form } from "@/components/ui/form";
import FormHeader from "./inquiry-form/FormHeader";
import ContactFields from "./inquiry-form/ContactFields";
import UniversityField from "./inquiry-form/UniversityField";
import MessageField from "./inquiry-form/MessageField";
import SubmitButton from "./inquiry-form/SubmitButton";
import { useInquiryForm } from "./inquiry-form/useInquiryForm";
import { StudentInquiryFormProps } from "./inquiry-form/types";

const StudentInquiryForm = (props: StudentInquiryFormProps) => {
  const { form, universities, isSubmitting, onSubmit } = useInquiryForm(props);
  const { className, sticky = false } = props;

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${sticky ? "sticky top-24" : ""} ${className || ""}`}>
      <FormHeader />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <ContactFields control={form.control} />
          <UniversityField control={form.control} universities={universities} />
          <MessageField control={form.control} />
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
};

export default StudentInquiryForm;
