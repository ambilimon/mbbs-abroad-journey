
import { University } from "@/pages/UniversitiesPage";

// List of all possible facilities for filtering
export const facilityOptions = [
  "Library",
  "Laboratory",
  "Cafeteria",
  "Accommodation",
  "WiFi",
  "Sports Complex",
  "Computer Lab",
  "Medical Center",
  "Student Lounge",
  "Gym",
  "Swimming Pool",
  "Research Center",
  "Auditorium",
  "Study Rooms",
  "International Student Office"
];

// Sample university data
export const universities: University[] = [
  {
    id: 1,
    name: "Oxford Medical College",
    country: "UK",
    city: "Oxford",
    tuitionFee: 35000,
    currency: "$",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "WiFi", "Sports Complex"],
    rating: 4.8,
    category: "Medical"
  },
  {
    id: 2,
    name: "Berlin Institute of Health",
    country: "Germany",
    city: "Berlin",
    tuitionFee: 20000,
    currency: "€",
    image: "https://images.unsplash.com/photo-1544298621-35a989e4e54a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "Computer Lab", "Medical Center"],
    rating: 4.6,
    category: "Medical"
  },
  {
    id: 3,
    name: "Kyiv Medical University",
    country: "Ukraine",
    city: "Kyiv",
    tuitionFee: 5000,
    currency: "$",
    image: "https://images.unsplash.com/photo-1598018553943-93e017e803df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Accommodation", "Sports Complex", "Student Lounge"],
    rating: 4.2,
    category: "Medical"
  },
  {
    id: 4,
    name: "Moscow Institute of Physics and Technology",
    country: "Russia",
    city: "Moscow",
    tuitionFee: 7500,
    currency: "$",
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "WiFi", "Research Center", "Computer Lab"],
    rating: 4.4,
    category: "Technical"
  },
  {
    id: 5,
    name: "Warsaw Medical College",
    country: "Poland",
    city: "Warsaw",
    tuitionFee: 10000,
    currency: "€",
    image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "Medical Center", "Auditorium"],
    rating: 4.3,
    category: "Medical"
  },
  {
    id: 6,
    name: "Harvard Medical School",
    country: "USA",
    city: "Boston",
    tuitionFee: 45000,
    currency: "$",
    image: "https://images.unsplash.com/photo-1587058680578-a67a97b33215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "WiFi", "Sports Complex", "Research Center", "Medical Center", "Auditorium"],
    rating: 4.9,
    category: "Medical"
  },
  {
    id: 7,
    name: "Tokyo University of Science",
    country: "Japan",
    city: "Tokyo",
    tuitionFee: 25000,
    currency: "$",
    image: "https://images.unsplash.com/photo-1565073624497-7e91d151c7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Computer Lab", "Research Center", "Study Rooms"],
    rating: 4.7,
    category: "Technical"
  },
  {
    id: 8,
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    tuitionFee: 30000,
    currency: "$",
    image: "https://images.unsplash.com/photo-1589758443893-c9c528aa0563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "WiFi", "Gym", "Swimming Pool", "International Student Office"],
    rating: 4.7,
    category: "Comprehensive"
  },
  {
    id: 9,
    name: "Sorbonne University",
    country: "France",
    city: "Paris",
    tuitionFee: 28000,
    currency: "€",
    image: "https://images.unsplash.com/photo-1572869347016-a766e4d6a169?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "Auditorium", "Student Lounge"],
    rating: 4.5,
    category: "Humanities"
  },
  {
    id: 10,
    name: "National University of Singapore",
    country: "Singapore",
    city: "Singapore",
    tuitionFee: 32000,
    currency: "$",
    image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "WiFi", "Sports Complex", "Computer Lab", "Research Center"],
    rating: 4.6,
    category: "Comprehensive"
  },
  {
    id: 11,
    name: "Beijing Medical University",
    country: "China",
    city: "Beijing",
    tuitionFee: 15000,
    currency: "$",
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "Medical Center"],
    rating: 4.4,
    category: "Medical"
  },
  {
    id: 12,
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    tuitionFee: 29000,
    currency: "$",
    image: "https://images.unsplash.com/photo-1588413355697-f9aacb02d01e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facilities: ["Library", "Laboratory", "Cafeteria", "WiFi", "Sports Complex", "Gym", "International Student Office"],
    rating: 4.5,
    category: "Comprehensive"
  }
];
