import { universities } from '@/data/universities';

// Function to initialize university data in localStorage
export const initializeUniversityData = () => {
  // Check if data is already in localStorage to avoid overwriting
  if (!localStorage.getItem('universities')) {
    // Format universities for storage
    const formattedUniversities = universities.map(uni => {
      // Convert tuitionFee and currency to tuitionRange string format
      const tuitionRange = `${uni.currency}${uni.tuitionFee.toLocaleString()} / year`;
      
      return {
        ...uni,
        tuitionRange,
        // Ensure location includes city and country if not already provided
        location: uni.location || `${uni.city}, ${uni.country}`
      };
    });
    
    // Save to localStorage
    localStorage.setItem('universities', JSON.stringify(formattedUniversities));
    console.log('Universities data initialized in localStorage');
  }
}; 