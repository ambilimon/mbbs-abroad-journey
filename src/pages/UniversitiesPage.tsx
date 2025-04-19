import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UniversityCard } from "@/components/UniversityCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

export interface University {
  id: string;
  name: string;
  country: string;
  category: string;
  annualFee: number;
  currency: string;
  facilities: string[];
  rating: number;
  imageUrl: string;
  description: string;
}

export interface Filters {
  countries: string[];
  categories: string[];
  minFee: number;
  maxFee: number;
  facilities: string[];
  currency: string;
}

export default function UniversitiesPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Filters>({
    countries: [],
    categories: [],
    minFee: 0,
    maxFee: 5000000,
    facilities: [],
    currency: "₹"
  });

  // Sample universities data (replace with actual data)
  const universities: University[] = [
    {
      id: "1",
      name: "Medical University of Georgia",
      country: "georgia",
      category: "Medical",
      annualFee: 2500000,
      currency: "₹",
      facilities: ["Library", "Laboratory", "Hostel"],
      rating: 4.5,
      imageUrl: "/universities/georgia-1.jpg",
      description: "One of the leading medical universities in Georgia..."
    },
    // ... more universities
  ];

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCountry = filters.countries.length === 0 || filters.countries.includes(university.country.toLowerCase());
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(university.category);
    const matchesFee = university.annualFee >= filters.minFee && university.annualFee <= filters.maxFee;
    const matchesFacilities = filters.facilities.length === 0 ||
      filters.facilities.every(facility => university.facilities.includes(facility));

    return matchesSearch && matchesCountry && matchesCategory && matchesFee && matchesFacilities;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">Universities</h1>
            <p className="text-muted-foreground">
              Explore our curated list of top medical universities worldwide
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              className="md:hidden flex items-center gap-2"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-6">
            {/* Filter Sidebar */}
            <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block col-span-12 md:col-span-3`}>
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                onClose={() => setIsFilterOpen(false)}
              />
            </div>

            {/* Universities Grid */}
            <div className="col-span-12 md:col-span-9">
              {filteredUniversities.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No universities found matching your criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredUniversities.map((university) => (
                    <UniversityCard key={university.id} university={university} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
