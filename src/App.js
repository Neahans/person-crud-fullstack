import React, { useEffect, useState } from "react";

import api from "./services/api";
import PersonForm from "./components/PersonForm";
import PersonCard from "./components/PersonCard";

import "./App.css";

function App() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const fetchPersons = async () => {
    try {
      const response = await api.get("persona/");
      setPersons(response.data);
    } catch (error) {
      console.error(error);
      alert("Could not load persons.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const handlePersonSaved = (savedPerson) => {
    if (selectedPerson) {
      setPersons((current) =>
        current.map((person) =>
          person.id === savedPerson.id
            ? savedPerson
            : person
        )
      );

      setSelectedPerson(null);
    } else {
      setPersons((current) => [
        savedPerson,
        ...current,
      ]);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this person?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`persona/${id}/`);

      setPersons((current) =>
        current.filter((person) => person.id !== id)
      );

      if (selectedPerson?.id === id) {
        setSelectedPerson(null);
      }

      alert("Person deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete person.");
    }
  };

  const handleEdit = (person) => {
    setSelectedPerson(person);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancelEdit = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="app-container">

      <header className="app-header">
        <div>
          <h1>
            <i className="bi bi-people-fill me-2"></i>
            Person Management
          </h1>

          
        </div>
      </header>

      <main className="container py-4">

        <div className="row g-4">

          {/* Form */}
          <div className="col-lg-4">
            <PersonForm
              selectedPerson={selectedPerson}
              onPersonSaved={handlePersonSaved}
              onCancelEdit={handleCancelEdit}
            />
          </div>

          {/* Persons */}
          <div className="col-lg-8">

            <div className="people-section">

              <div className="section-heading">
                <div>
                  <h2>All Persons</h2>

                  <p>
                    {persons.length} record
                    {persons.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-5">

                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>

                  <p className="mt-3">
                    Loading persons...
                  </p>

                </div>
              ) : persons.length === 0 ? (
                <div className="empty-state">

                  <i className="bi bi-people"></i>

                  <h4>
                    No persons yet
                  </h4>

                  <p>
                    Add your first person using the form.
                  </p>

                </div>
              ) : (
                <div className="row g-4">

                  {persons.map((person) => (
                    <div
                      className="col-md-6"
                      key={person.id}
                    >
                      <PersonCard
                        person={person}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                      />
                    </div>
                  ))}

                </div>
              )}

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default App;