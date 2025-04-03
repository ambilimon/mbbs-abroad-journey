
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <>
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        By submitting this form, you agree to our privacy policy and consent to be contacted about educational opportunities.
      </p>
    </>
  );
};

export default SubmitButton;
