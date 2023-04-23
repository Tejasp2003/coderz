import React, { useState } from "react";
import "../styles/Modal.css"

function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here, e.g. upload the file to a server
    console.log("File uploaded:", file);
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="file-input">Choose file:</label>
              <input type="file" id="file-input" onChange={handleFileInputChange} />
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
