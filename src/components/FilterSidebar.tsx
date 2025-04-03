
import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Filters } from "@/pages/UniversitiesPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { BudgetRangeSlider } from "@/components/BudgetRangeSlider";
import { facilityOptions } from "@/data/universities";

interface FilterSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onClose: () => void;
}

export function FilterSidebar({ filters, setFilters, onClose }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([filters.minFee, filters.maxFee]);
  const [facilitiesOpen, setFacilitiesOpen] = useState(true);

  const handlePriceChange = (values: [number, number]) => {
    setPriceRange(values);
    setFilters({
      ...filters,
      minFee: values[0],
      maxFee: values[1],
    });
  };

  const handleFacilityChange = (facility: string, checked: boolean) => {
    setFilters({
      ...filters,
      facilities: checked
        ? [...filters.facilities, facility]
        : filters.facilities.filter((f) => f !== facility),
    });
  };

  const clearFilters = () => {
    setFilters({
      countries: [],
      categories: [],
      minFee: 0,
      maxFee: 50000,
      facilities: [],
    });
    setPriceRange([0, 50000]);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Filters</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Reset
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <ScrollArea className="h-[calc(100vh-240px)] pr-4">
          <div className="space-y-6">
            {/* Budget filter */}
            <div className="space-y-3">
              <h3 className="font-medium">Budget Range</h3>
              <BudgetRangeSlider
                minValue={0}
                maxValue={50000}
                step={1000}
                value={priceRange}
                onChange={handlePriceChange}
                currency="$"
              />
            </div>

            <Separator />

            {/* Facilities filter */}
            <Collapsible 
              open={facilitiesOpen} 
              onOpenChange={setFacilitiesOpen}
              className="space-y-3"
            >
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-medium">Facilities</h3>
                  {facilitiesOpen ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  {facilityOptions.map((facility) => (
                    <div key={facility} className="flex items-center space-x-2">
                      <Checkbox
                        id={`facility-${facility}`}
                        checked={filters.facilities.includes(facility)}
                        onCheckedChange={(checked) =>
                          handleFacilityChange(facility, checked === true)
                        }
                      />
                      <Label
                        htmlFor={`facility-${facility}`}
                        className="text-sm font-normal leading-none cursor-pointer"
                      >
                        {facility}
                      </Label>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Applied filters summary */}
            {(filters.facilities.length > 0 || 
              filters.minFee > 0 || 
              filters.maxFee < 50000) && (
              <>
                <Separator />
                <div className="space-y-3">
                  <h3 className="font-medium">Applied Filters</h3>
                  <div className="space-y-2">
                    {filters.minFee > 0 || filters.maxFee < 50000 ? (
                      <div className="text-sm text-muted-foreground">
                        Budget: ${filters.minFee.toLocaleString()} - ${filters.maxFee.toLocaleString()}
                      </div>
                    ) : null}
                    
                    {filters.facilities.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">
                          Facilities: {filters.facilities.length}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {filters.facilities.map(facility => (
                            <div key={facility} className="text-xs bg-secondary px-2 py-1 rounded-full">
                              {facility}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
