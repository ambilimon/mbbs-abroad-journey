
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { University } from "@/pages/UniversitiesPage";
import { Link } from "react-router-dom";

interface UniversityCardProps {
  university: University;
  viewMode: "grid" | "list";
}

export function UniversityCard({ university, viewMode }: UniversityCardProps) {
  const {
    id,
    name,
    country,
    city,
    tuitionFee,
    currency,
    image,
    facilities,
    rating,
  } = university;

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 h-48 md:h-auto">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 p-4">
            <CardHeader className="p-0 pb-2">
              <div className="flex justify-between">
                <div>
                  <CardTitle className="text-xl mb-1">{name}</CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    {city}, {country}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{rating.toFixed(1)}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 py-2 flex-grow">
              <div className="flex flex-wrap gap-1 mb-3">
                {facilities.slice(0, 4).map((facility) => (
                  <Badge key={facility} variant="outline" className="text-xs">
                    {facility}
                  </Badge>
                ))}
                {facilities.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{facilities.length - 4} more
                  </Badge>
                )}
              </div>
              <p className="text-lg font-semibold text-primary">
                {currency}{tuitionFee.toLocaleString()} / year
              </p>
            </CardContent>
            <CardFooter className="p-0 pt-2 flex justify-between">
              <Link to={`/university/${id}`}>
                <Button>View Details</Button>
              </Link>
              <Link to="/#application">
                <Button variant="outline">Apply Now</Button>
              </Link>
            </CardFooter>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/90 rounded-md px-2 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          {city}, {country}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-3">
          {facilities.slice(0, 3).map((facility) => (
            <Badge key={facility} variant="outline" className="text-xs">
              {facility}
            </Badge>
          ))}
          {facilities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{facilities.length - 3} more
            </Badge>
          )}
        </div>
        <p className="text-lg font-semibold text-primary">
          {currency}{tuitionFee.toLocaleString()} / year
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`/university/${id}`}>
          <Button size="sm">View Details</Button>
        </Link>
        <Link to="/#application">
          <Button size="sm" variant="outline">
            Apply
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
