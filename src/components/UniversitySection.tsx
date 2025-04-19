import React from "react";
import { Link } from "react-router-dom";
import { University } from "@/types/university";

interface UniversitySectionProps {
  universities: University[];
}

const UniversitySection: React.FC<UniversitySectionProps> = ({ universities }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Partner Universities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university) => (
            <div
              key={university.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                <p className="text-gray-600 mb-4">{university.country}</p>
                <Link
                  to={`/university-details/${university.id}`}
                  className="text-primary hover:text-primary/80"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;
