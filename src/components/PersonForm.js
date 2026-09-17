import React, { useEffect, useState } from "react";
import api from "../services/api";

import "./PersonForm.css";

function PersonForm({
  selectedPerson,
  onPersonSaved,
  onCancelEdit,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedPerson) {
      setName(selectedPerson.name);
      setAge(selectedPerson.age);
      setPlace(selectedPerson.place);
      setImage(null);
    } else {
      setName("");
      setAge("");
      setPlace("");
      setImage(null);
    }
  }, [selectedPerson]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedPerson && !image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("age", age);
    formData.append("place", place);

    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);

      let response;

      if (selectedPerson) {
        response = await api.patch(
          `persona/${selectedPerson.id}/`,
          formData
        );
      } else {
        response = await api.post(
          "persona/",
          formData
        );
      }

      console.log("Success:", response.data);

      onPersonSaved(response.data);

      setName("");
      setAge("");
      setPlace("");
      setImage(null);

      const imageInput =
        document.getElementById("person-image");

      if (imageInput) {
        imageInput.value = "";
      }

      if (selectedPerson) {
        alert("Person updated successfully!");
      } else {
        alert("Person added successfully!");
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        console.error(
          "Status:",
          error.response.status
        );

        console.error(
          "Data:",
          error.response.data
        );

        alert(
          `Failed: ${JSON.stringify(
            error.response.data
          )}`
        );
      } else {
        alert(
          `Request failed: ${error.message}`
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="person-form-card">

      <div className="form-header">
        <h3>
          {selectedPerson
            ? "Edit Person"
            : "Add New Person"}
        </h3>

        <p>
          {selectedPerson
            ? "Update the person's details below."
            : "Enter the person's details below."}
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">
            Name
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Age
          </label>

          <input
            type="number"
            className="form-control"
            placeholder="Enter age"
            value={age}
            onChange={(event) =>
              setAge(event.target.value)
            }
            min="1"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Place
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter place"
            value={place}
            onChange={(event) =>
              setPlace(event.target.value)
            }
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">
            Image
          </label>

          <input
            id="person-image"
            type="file"
            className="form-control"
            accept="image/*"
            required={!selectedPerson}
            onChange={(event) =>
              setImage(
                event.target.files[0] || null
              )
            }
          />

          {selectedPerson && (
            <small className="text-muted">
              Leave empty to keep the existing image.
            </small>
          )}
        </div>

        <div className="d-flex gap-2">

          <button
            type="submit"
            className="btn btn-primary flex-grow-1"
            disabled={loading}
          >
            <i
              className={`bi ${
                selectedPerson
                  ? "bi-check-lg"
                  : "bi-person-plus-fill"
              } me-2`}
            ></i>

            {loading
              ? "Saving..."
              : selectedPerson
              ? "Update Person"
              : "Add Person"}
          </button>

          {selectedPerson && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancelEdit}
              disabled={loading}
            >
              Cancel
            </button>
          )}

        </div>

      </form>
    </div>
  );
}

export default PersonForm;