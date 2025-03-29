
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface UniversityListProps {
  onEdit: (id: number) => void;
}

const UniversityList = ({ onEdit }: UniversityListProps) => {
  const [universities, setUniversities] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    loadUniversities();
  }, []);

  const loadUniversities = () => {
    try {
      const stored = localStorage.getItem('universities');
      if (stored) {
        setUniversities(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error loading universities from localStorage", e);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this university?")) {
      try {
        const filtered = universities.filter(u => u.id !== id);
        localStorage.setItem('universities', JSON.stringify(filtered));
        setUniversities(filtered);
        
        toast({
          title: "University deleted",
          description: "The university has been successfully removed.",
        });
      } catch (e) {
        console.error("Error deleting university", e);
        toast({
          title: "Error",
          description: "There was a problem deleting the university.",
          variant: "destructive",
        });
      }
    }
  };

  const filteredUniversities = universities.filter(
    university => 
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <Input
          placeholder="Search universities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      {filteredUniversities.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No universities found. Add your first university!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredUniversities.map(university => (
            <Card key={university.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-48 md:h-auto">
                    <img 
                      src={university.image} 
                      alt={university.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{university.name}</h3>
                        <p className="text-gray-500">{university.location}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => onEdit(university.id)}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleDelete(university.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                        <Link to={`/university/${university.id}`}>
                          <Button variant="outline" size="icon">
                            <ExternalLink size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-600 line-clamp-2">{university.description}</p>
                    
                    <div className="mt-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                        {university.tuitionRange}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                        {university.country}
                      </span>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {university.features.map((feature: string, i: number) => (
                        <span 
                          key={i}
                          className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversityList;
