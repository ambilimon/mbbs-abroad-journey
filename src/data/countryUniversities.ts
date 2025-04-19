interface University {
  id: number;
  name: string;
  value: string;
}

interface CountryUniversities {
  [key: string]: University[];
}

export const countryUniversities: CountryUniversities = {
  russia: [
    { id: 1, name: "Altai State Medical University", value: "altai" },
    { id: 2, name: "Bashkir State Medical University", value: "bashkir" },
    { id: 3, name: "Mari State University", value: "mari" }
  ],
  georgia: [
    { id: 4, name: "Batumi Shota Rustaveli State University", value: "batumi" },
    { id: 5, name: "Caucasus International University", value: "caucasus" }
  ],
  philippines: [
    { id: 6, name: "Lyceum of the Philippines University", value: "lyceum" },
    { id: 7, name: "Davao Medical School Foundation", value: "davao" }
  ],
  belarus: [
    { id: 8, name: "Belarusian State Medical University", value: "belarusian" },
    { id: 9, name: "Grodno State Medical University", value: "grodno" }
  ],
  moldova: [
    { id: 10, name: "Nicolae Testemitanu State University of Medicine", value: "nicolae" }
  ],
  bulgaria: [
    { id: 11, name: "Medical University Pleven", value: "pleven" }
  ],
  bosnia: [
    { id: 12, name: "University of Sarajevo", value: "sarajevo" }
  ],
  uzbekistan: [
    { id: 13, name: "Andijan State Medical Institute", value: "andijan" }
  ],
  kazakhstan: [
    { id: 14, name: "Astana Medical University", value: "astana" },
    { id: 15, name: "Karaganda Medical University", value: "karaganda" }
  ],
  kyrgyzstan: [
    { id: 16, name: "International School of Medicine", value: "ism" },
    { id: 17, name: "Bishkek International Medical Institute", value: "bishkek" },
    { id: 18, name: "Asian Medical Institute", value: "asian" },
    { id: 19, name: "Osh State Medical University", value: "osh" }
  ],
  malaysia: [
    { id: 20, name: "MAHSA University", value: "mahsa" },
    { id: 21, name: "Management and Science University", value: "msu" }
  ],
  nepal: [
    { id: 22, name: "Janaki Medical College", value: "janaki" },
    { id: 23, name: "Kathmandu Medical College", value: "kathmandu" },
    { id: 24, name: "Nepalgunj Medical College", value: "nepalgunj" }
  ]
}; 