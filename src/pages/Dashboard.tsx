
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import UniversityForm from "@/components/UniversityForm";
import UniversityList from "@/components/UniversityList";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  const [editing, setEditing] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">University Dashboard</h1>
          <Button onClick={() => {
            setEditing(null);
            setShowForm(true);
          }} className="flex items-center gap-2">
            <Plus size={16} /> Add University
          </Button>
        </div>

        {showForm ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editing !== null ? 'Edit University' : 'Add New University'}</CardTitle>
            </CardHeader>
            <CardContent>
              <UniversityForm 
                universityId={editing} 
                onCancel={() => {
                  setShowForm(false);
                  setEditing(null);
                }}
                onSuccess={() => {
                  setShowForm(false);
                  setEditing(null);
                  toast({
                    title: editing !== null ? "University updated!" : "University added!",
                    description: editing !== null 
                      ? "The university has been successfully updated." 
                      : "The university has been successfully added.",
                  });
                }}
              />
            </CardContent>
          </Card>
        ) : (
          <UniversityList 
            onEdit={(id) => {
              setEditing(id);
              setShowForm(true);
            }}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
