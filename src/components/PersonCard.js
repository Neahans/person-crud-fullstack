import React from "react";

import "./PersonCard.css";

function PersonCard({ person, onDelete, onEdit }) {
  const imageUrl = person.image
    ? person.image.startsWith("http")
      ? person.image
      : `http://127.0.0.1:8000${person.image}`
    : null;

  return (
    <div className="person-card">

      {imageUrl ? (
        <img
          src={imageUrl}
          alt={person.name}
          className="person-image"
          onError={(event) => {
            console.error(
              "Image failed to load:",
              imageUrl
            );

            event.currentTarget.style.display =
              "none";
          }}
        />
      ) : (
        <div className="no-image">
          <i className="bi bi-person"></i>
          <span>No Image</span>
        </div>
      )}

      <div className="person-info">

        <h4>{person.name}</h4>

        <p>
          <i className="bi bi-person me-2"></i>
          Age: {person.age}
        </p>

        <p>
          <i className="bi bi-geo-alt me-2"></i>
          {person.place}
        </p>

        <div className="person-actions">

          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => onEdit(person)}
          >
            <i className="bi bi-pencil me-1"></i>
            Edit
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(person.id)}
          >
            <i className="bi bi-trash me-1"></i>
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default PersonCard;