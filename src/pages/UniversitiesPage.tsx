import { useState } from 'react';

import {
  MapPin,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import AnimatedButton from '@/components/AnimatedButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface University {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  tuitionRange: string;
  features: string[];
  country: "russia" | "georgia";
}

const universities: University[] = [
  {
    id: 1,
    name: "Kabardino Balkarian State University",
    location: "Nalchik, Russia",
    description: "Renowned for Surgery, General Medicine, and Cardiology with excellent research facilities.",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹20-30 Lakhs total",
    features: ["English-Medium", "WHO & NMC Approved", "Established in 1957"],
    country: "russia",
  },
  {
    id: 2,
    name: "Altai State Medical University",
    location: "Barnaul, Russia",
    description: "One of Russia's oldest medical universities with excellent research facilities.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["6-Year Program", "Modern Campus", "Strong Alumni Network"],
    country: "russia",
  },
  {
    id: 3,
    name: "Kazan Federal University",
    location: "Kazan, Russia",
    description: "A prestigious institution offering cutting-edge medical education.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1332&auto=format&fit=crop",
    tuitionRange: "₹30-40 Lakhs total",
    features: ["Advanced Research", "Clinical Rotations", "Modern Labs"],
    country: "russia",
  },
  {
    id: 4,
    name: "SEU - Georgian National University",
    location: "Tbilisi, Georgia",
    description: "Top-rated university with advanced medical labs, strong clinical exposure, and international faculty.",
    image: "https://images.unsplash.com/photo-1577274803759-eb132760ecb3?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹30-35 Lakhs total",
    features: ["100% English Medium", "European Standard", "High FMGE Success"],
    country: "georgia",
  },
  {
    id: 5,
    name: "Tbilisi State Medical University",
    location: "Tbilisi, Georgia",
    description: "Georgia's oldest and most prestigious medical university.",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
    tuitionRange: "₹25-35 Lakhs total",
    features: ["Established in 1918", "Strong Clinical Training", "Modern Campus"],
    country: "georgia",
  },
  {
    id: 6,
    name: "New Vision University",
    location: "Tbilisi, Georgia",
    description: "Recognized by WHO, NMC, and WFME with state-of-the-art hospital affiliations.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
    tuitionRange: "₹30-40 Lakhs total",
    features: ["Advanced Facilities", "International Faculty", "Hospital Affiliations"],
    country: "georgia",
  },
];

const UniversitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedFeeRange, setSelectedFeeRange] = useState<string>("all");

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch = university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCountry = selectedCountry === "all" || university.country === selectedCountry;

    let matchesFeeRange = true;
    if (selectedFeeRange !== "all") {
      const fee = Number.parseInt(university.tuitionRange.match(/\d+/)?.[0] || "0", 10);
      switch (selectedFeeRange) {
        case "20-25":
          matchesFeeRange = fee >= 20 && fee <= 25;
          break;
        case "25-30":
          matchesFeeRange = fee >= 25 && fee <= 30;
          break;
        case "30-35":
          matchesFeeRange = fee >= 30 && fee <= 35;
          break;
        case "35+":
          matchesFeeRange = fee > 35;
          break;
      }
    }

    return matchesSearch && matchesCountry && matchesFeeRange;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find Your Perfect Medical University
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Explore top medical universities in Russia and Georgia offering quality education at affordable fees
              </p>
              
              {/* Search and Filters */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-100" size={20} />
                    <Input
                      type="text"
                      placeholder="Search universities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-100"
                    />
                  </div>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                      <SelectItem value="russia">Russia</SelectItem>
                      <SelectItem value="georgia">Georgia</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedFeeRange} onValueChange={setSelectedFeeRange}>
                    <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Fee Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ranges</SelectItem>
                      <SelectItem value="20-25">₹20-25 Lakhs</SelectItem>
                      <SelectItem value="25-30">₹25-30 Lakhs</SelectItem>
                      <SelectItem value="30-35">₹30-35 Lakhs</SelectItem>
                      <SelectItem value="35+">Above ₹35 Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUniversities.map((university) => (
                <Card key={university.id} className="university-card">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-blue-700 hover:bg-white">
                        {university.country === "russia" ? "Russia" : "Georgia"}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin size={16} className="mr-1" />
                      {university.location}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {university.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {university.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {university.features.map((feature) => (
                          <Badge 
                            key={`${university.id}-${feature}`} 
                            variant="secondary" 
                            className="bg-blue-50 text-blue-700"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-500">Total Fees</div>
                          <div className="font-semibold text-blue-700">{university.tuitionRange}</div>
                        </div>
                        
                        <Link to={`/university/${university.id}`}>
                          <Button variant="outline" className="hover:bg-blue-50">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredUniversities.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No universities found</h3>
                <p className="text-gray-600 mb-8">Try adjusting your search criteria</p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCountry("all");
                  setSelectedFeeRange("all");
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Medical Journey?
              </h2>
              <p className="text-gray-600 mb-8">
                Get expert guidance on choosing the right university and complete admission assistance.
              </p>
              <div className="flex justify-center gap-4">
                <AnimatedButton variant="highlight" size="lg">
                  Apply Now
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg">
                  Get Counselling
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UniversitiesPage; 