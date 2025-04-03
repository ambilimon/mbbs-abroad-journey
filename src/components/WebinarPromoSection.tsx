
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WebinarSignupForm from "./WebinarSignupForm";

const WebinarPromoSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Show signup dialog for everyone
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Live Webinar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything You Need to Know About MBBS Abroad
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Join our expert counselors for a comprehensive session on pursuing MBBS internationally. 
              Learn about admission processes, costs, and career opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
              >
                Register for Webinar
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="MBBS Webinar Preview" 
                className="w-full object-cover h-64 md:h-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="text-white font-medium">Next session starting soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register for the Webinar</DialogTitle>
            <DialogDescription>
              Complete this form to access our exclusive MBBS abroad webinar.
            </DialogDescription>
          </DialogHeader>
          <WebinarSignupForm onSuccess={() => {
            setIsDialogOpen(false);
            navigate("/webinar");
          }} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WebinarPromoSection;
