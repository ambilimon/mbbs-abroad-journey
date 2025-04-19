import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { University } from "@/pages/UniversitiesPage";

interface FilterSidebarProps {
  universities: University[];
  selectedCountries: string[];
  selectedCategories: string[];
  selectedFacilities: string[];
  minFee?: number;
  maxFee?: number;
  onCountryChange: (country: string) => void;
  onCategoryChange: (category: string) => void;
  onFacilityChange: (facility: string) => void;
  onFeeRangeChange: (min?: number, max?: number) => void;
  onReset: () => void;
}

export function FilterSidebar({
  universities,
  selectedCountries,
  selectedCategories,
  selectedFacilities,
  minFee,
  maxFee,
  onCountryChange,
  onCategoryChange,
  onFacilityChange,
  onFeeRangeChange,
  onReset,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    countries: true,
    categories: true,
    facilities: true,
    fees: true,
  });

  // Extract unique values
  const uniqueCountries = Array.from(new Set(universities.map(u => u.country))).sort();
  const uniqueCategories = Array.from(new Set(universities.map(u => u.category))).sort();
  const uniqueFacilities = Array.from(new Set(universities.flatMap(u => u.facilities || []))).sort();

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFeeChange = (type: "min" | "max", value: string) => {
    const numValue = value ? Number(value) : undefined;
    if (type === "min") {
      onFeeRangeChange(numValue, maxFee);
    } else {
      onFeeRangeChange(minFee, numValue);
    }
  };

  return (
    <div className="w-full max-w-xs space-y-4 p-4 bg-card rounded-lg border">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={onReset}>
          Reset
        </Button>
      </div>

      <Separator />

      {/* Countries Section */}
      <div>
        <button
          className="flex justify-between items-center w-full py-2"
          onClick={() => toggleSection("countries")}
        >
          <span className="font-medium">Countries</span>
          {expandedSections.countries ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.countries && (
          <div className="space-y-2 mt-2">
            {uniqueCountries.map((country) => (
              <div key={country} className="flex items-center space-x-2">
                <Checkbox
                  id={`country-${country}`}
                  checked={selectedCountries.includes(country)}
                  onCheckedChange={() => onCountryChange(country)}
                />
                <Label
                  htmlFor={`country-${country}`}
                  className="text-sm cursor-pointer"
                >
                  {country}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Categories Section */}
      <div>
        <button
          className="flex justify-between items-center w-full py-2"
          onClick={() => toggleSection("categories")}
        >
          <span className="font-medium">Categories</span>
          {expandedSections.categories ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.categories && (
          <div className="space-y-2 mt-2">
            {uniqueCategories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => onCategoryChange(category)}
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-sm cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Facilities Section */}
      <div>
        <button
          className="flex justify-between items-center w-full py-2"
          onClick={() => toggleSection("facilities")}
        >
          <span className="font-medium">Facilities</span>
          {expandedSections.facilities ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.facilities && (
          <div className="space-y-2 mt-2">
            {uniqueFacilities.map((facility) => (
              <div key={facility} className="flex items-center space-x-2">
                <Checkbox
                  id={`facility-${facility}`}
                  checked={selectedFacilities.includes(facility)}
                  onCheckedChange={() => onFacilityChange(facility)}
                />
                <Label
                  htmlFor={`facility-${facility}`}
                  className="text-sm cursor-pointer"
                >
                  {facility}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Fee Range Section */}
      <div>
        <button
          className="flex justify-between items-center w-full py-2"
          onClick={() => toggleSection("fees")}
        >
          <span className="font-medium">Annual Fee Range</span>
          {expandedSections.fees ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.fees && (
          <div className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="min-fee">Minimum (₹)</Label>
              <Input
                id="min-fee"
                type="number"
                placeholder="Min"
                value={minFee || ""}
                onChange={(e) => handleFeeChange("min", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-fee">Maximum (₹)</Label>
              <Input
                id="max-fee"
                type="number"
                placeholder="Max"
                value={maxFee || ""}
                onChange={(e) => handleFeeChange("max", e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
