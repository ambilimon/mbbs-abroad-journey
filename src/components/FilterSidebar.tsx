
import { useState } from "react";
import { X } from "lucide-react";
import { Filters } from "@/pages/UniversitiesPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { facilityOptions } from "@/data/universities";

interface FilterSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onClose: () => void;
}

export function FilterSidebar({ filters, setFilters, onClose }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([filters.minFee, filters.maxFee]);

  const handlePriceChange = (values: number[]) => {
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
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Reset
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <ScrollArea className="h-[calc(100vh-240px)]">
          <div className="space-y-5">
            {/* Budget filter */}
            <div className="space-y-3">
              <h3 className="font-medium">Budget Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={50000}
                  step={1000}
                  value={priceRange}
                  onValueChange={handlePriceChange}
                />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <div>${priceRange[0].toLocaleString()}</div>
                  <div>${priceRange[1].toLocaleString()}</div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Facilities filter */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                <h3 className="font-medium">Facilities</h3>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2 space-y-3">
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
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
