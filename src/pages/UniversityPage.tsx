import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Building, 
  Users, 
  Globe, 
  Book, 
  FileText, 
  Award, 
  Clipboard, 
  Landmark, 
  Languages 
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentInquiryForm from "@/components/StudentInquiryForm";

interface University {
  id: number;
  name: string;
  location: string;
  description: string;
  longDescription?: string;
  image: string;
  tuitionRange: string;
  features: string[];
  country: "russia" | "georgia";
  establishedYear?: string;
  studentCount?: string;
  hospitalAffiliations?: string[];
  recognition?: string[];
  facilities?: string[];
  courses?: { name: string; duration: string; fees: string }[];
  admissionProcess?: string[];
  eligibility?: string[];
  advantages?: string[];
  documents?: string[];
  scholarships?: string[];
  facultyCount?: string;
  hostelInfo?: string;
  indianFoodAvailability?: string;
}

const universities: University[] = [
  // ... keep existing data
];

const UniversityPage = () => {
  // ... keep existing implementation
};

export default UniversityPage;
