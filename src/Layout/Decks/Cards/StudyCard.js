import React from "react";

function StudyCard({ card, index, total, side, handleFlip, handleNext }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Card {index + 1} of {total}
        </div>
        <div className="card-body">
          <h5 className="card-title">{card[side]}</h5>
          <button
            type="button"
            className="btn btn-secondary btn-small"
            onClick={handleFlip}
          >
            <i className="bi bi-arrow-clockwise"></i>Flip
          </button>
          {side === "back" && (
            <button
              type="button"
              className="btn btn-primary btn-small"
              onClick={handleNext}
            >
              <i className="bi bi-fast-forward-circle-fill"></i>Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default StudyCard;
