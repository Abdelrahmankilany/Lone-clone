import React from "react";

export default function Modal({ visible, errorMessage = null }) {
  if (visible) {
    return (
      <div className="modal">
        <div className="modal-contain">
          <h1 style={{ color: errorMessage != null ? "red" : "green" }}>
            {errorMessage != null ? errorMessage : "The Form has been Submited"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
