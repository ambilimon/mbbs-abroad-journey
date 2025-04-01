import { useState } from 'react';

import { Link } from 'react-router-dom';

import AnimatedButton from '@/components/AnimatedButton';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface StudentInquiryFormProps {
  universityId?: number;
  className?: string;
}

interface CountryOption {
  value: string;
  label: string;
  universities: string[];
}

const countryOptions: CountryOption[] = [
  {
    value: "russia",
    label: "Russia",
    universities: [
      "Kabardino Balkarian State University",
      "Altai State Medical University",
      "Kazan Federal University",
      "Moscow State Medical University",
      "Saint Petersburg State Medical University"
    ]
  },
  {
    value: "georgia",
    label: "Georgia",
    universities: [
      "SEU - Georgian National University",
      "Tbilisi State Medical University",
      "New Vision University",
      "European University",
      "Batumi Shota Rustaveli State University"
    ]
  },
  {
    value: "kazakhstan",
    label: "Kazakhstan",
    universities: [
      "Astana Medical University",
      "Karaganda Medical University",
      "South Kazakhstan Medical Academy"
    ]
  }
];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
  selectedCountry: string;
  selectedUniversities: string[];
  acceptedTerms: boolean;
}

const StudentInquiryForm = ({ universityId, className }: StudentInquiryFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    selectedCountry: "",
    selectedUniversities: [],
    acceptedTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCountry: value,
      selectedUniversities: []
    }));
  };

  const handleUniversityToggle = (university: string) => {
    setFormData(prev => ({
      ...prev,
      selectedUniversities: prev.selectedUniversities.includes(university)
        ? prev.selectedUniversities.filter(u => u !== university)
        : [...prev.selectedUniversities, university]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptedTerms) {
      alert("Please accept the terms and conditions to proceed");
      return;
    }

    if (formData.selectedUniversities.length === 0) {
      alert("Please select at least one university");
      return;
    }

    // Handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
              className="mt-1"
            />
          </div>

          <div className="space-y-2">
            <Label>Preferred Country & Universities</Label>
            <Select 
              value={formData.selectedCountry} 
              onValueChange={handleCountryChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available Countries</SelectLabel>
                  {countryOptions.map(country => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {formData.selectedCountry && (
              <div className="mt-4 space-y-2 border rounded-lg p-4 bg-gray-50">
                <Label>Select Universities (you can choose multiple)</Label>
                <div className="space-y-2">
                  {countryOptions
                    .find(c => c.value === formData.selectedCountry)
                    ?.universities.map(university => (
                      <div key={university} className="flex items-center space-x-2">
                        <Checkbox
                          id={university}
                          checked={formData.selectedUniversities.includes(university)}
                          onCheckedChange={() => handleUniversityToggle(university)}
                        />
                        <Label htmlFor={university} className="cursor-pointer">
                          {university}
                        </Label>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="message">Additional Questions/Comments</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Any specific questions or requirements?"
              className="mt-1"
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptedTerms}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, acceptedTerms: checked as boolean }))
                }
                required
              />
              <Label htmlFor="terms" className="text-sm leading-none cursor-pointer">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                . I consent to be contacted about educational opportunities.
              </Label>
            </div>
          </div>
        </div>

        <AnimatedButton
          type="submit"
          variant="highlight"
          className="w-full"
          disabled={!formData.acceptedTerms}
        >
          Submit Inquiry
        </AnimatedButton>

        <p className="text-xs text-gray-500 text-center mt-4">
          Your information is secure and will only be used to contact you about your inquiry.
          We never share your data with third parties without consent.
        </p>
      </div>
    </form>
  );
};

export default StudentInquiryForm;
