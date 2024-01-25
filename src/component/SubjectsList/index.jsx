import React, { useState, useEffect } from "react";

const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]); // State to store the items
  const [isLoading, setIsLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle any errors

  // Function to fetch items from the API
  const fetchSubjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/subjects");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubjects(data); // Update the state with the fetched items data into the items array
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div>
      <h1>Subjects List</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {subjects.map((subjects) => (
          <li key={subjects.ID}>
            Code = {subjects.Code} Name = {subjects.Name}
          </li> // Assuming each item has an id and name
        ))}
      </ul>
    </div>
  );
};

export default SubjectsList;
