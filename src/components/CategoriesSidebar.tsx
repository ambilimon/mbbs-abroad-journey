
import { Filters, University } from "@/pages/UniversitiesPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoriesSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  universities: University[];
}

export function CategoriesSidebar({
  filters,
  setFilters,
  universities,
}: CategoriesSidebarProps) {
  // Get unique countries from universities
  const countries = Array.from(new Set(universities.map((u) => u.country)));
  
  // Get unique categories from universities
  const categories = Array.from(new Set(universities.map((u) => u.category)));

  // Count universities per country
  const countryCount = countries.map((country) => ({
    name: country,
    count: universities.filter((u) => u.country === country).length,
  }));

  // Count universities per category
  const categoryCount = categories.map((category) => ({
    name: category,
    count: universities.filter((u) => u.category === category).length,
  }));

  const toggleCountry = (country: string) => {
    setFilters({
      ...filters,
      countries: filters.countries.includes(country)
        ? filters.countries.filter((c) => c !== country)
        : [...filters.countries, country],
    });
  };

  const toggleCategory = (category: string) => {
    setFilters({
      ...filters,
      categories: filters.categories.includes(category)
        ? filters.categories.filter((c) => c !== category)
        : [...filters.categories, category],
    });
  };

  return (
    <div className="space-y-6 sticky top-24">
      {/* Countries */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Countries</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <ScrollArea className="h-[220px] pr-3">
            <div className="flex flex-wrap gap-2">
              {countryCount.sort((a, b) => b.count - a.count).map(({ name, count }) => (
                <Badge
                  key={name}
                  variant={filters.countries.includes(name) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleCountry(name)}
                >
                  {name} ({count})
                </Badge>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <ScrollArea className="h-[220px] pr-3">
            <div className="flex flex-wrap gap-2">
              {categoryCount.sort((a, b) => b.count - a.count).map(({ name, count }) => (
                <Badge
                  key={name}
                  variant={filters.categories.includes(name) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleCategory(name)}
                >
                  {name} ({count})
                </Badge>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
