
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UniversityCard } from "@/components/UniversityCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { CategoriesSidebar } from "@/components/CategoriesSidebar";
import { universities } from "@/data/universities";
import { Button } from "@/components/ui/button";
import { ListFilter, Grid3X3, List } from "lucide-react";

// Define types for filtering
export type University = {
  id: number;
  name: string;
  country: string;
  city: string;
  tuitionFee: number;
  currency: string;
  image: string;
  facilities: string[];
  rating: number;
  category: string;
};

export type Filters = {
  countries: string[];
  categories: string[];
  minFee: number;
  maxFee: number;
  facilities: string[];
};

const UniversitiesPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilterSidebar, setShowFilterSidebar] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    countries: [],
    categories: [],
    minFee: 0,
    maxFee: 50000,
    facilities: [],
  });

  // Apply filters to universities
  const filteredUniversities = universities.filter((university) => {
    // Filter by countries if any selected
    if (filters.countries.length > 0 && !filters.countries.includes(university.country)) {
      return false;
    }

    // Filter by categories if any selected
    if (filters.categories.length > 0 && !filters.categories.includes(university.category)) {
      return false;
    }

    // Filter by fee range
    if (university.tuitionFee < filters.minFee || university.tuitionFee > filters.maxFee) {
      return false;
    }

    // Filter by facilities if any selected
    if (filters.facilities.length > 0) {
      // Check if university has all selected facilities
      return filters.facilities.every((facility) => 
        university.facilities.includes(facility)
      );
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Universities</h1>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilterSidebar(!showFilterSidebar)}
              className="md:hidden"
            >
              <ListFilter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <div className="hidden md:flex items-center border rounded-md">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Filters */}
          {showFilterSidebar && (
            <div className="w-full md:w-1/4 lg:w-1/5">
              <FilterSidebar 
                filters={filters} 
                setFilters={setFilters} 
                onClose={() => setShowFilterSidebar(false)}
              />
            </div>
          )}

          {/* Main Content - University Cards */}
          <div className={`flex-1 ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}`}>
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((university) => (
                <UniversityCard 
                  key={university.id} 
                  university={university} 
                  viewMode={viewMode}
                />
              ))
            ) : (
              <div className="w-full text-center py-12 bg-muted rounded-lg">
                <h3 className="text-xl font-medium mb-2">No universities found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>

          {/* Right Sidebar - Categories */}
          <div className="hidden lg:block w-1/4">
            <CategoriesSidebar 
              filters={filters} 
              setFilters={setFilters} 
              universities={universities}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UniversitiesPage;
