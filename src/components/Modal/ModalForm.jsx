import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ModalForm.css";

const ModalForm = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("open");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ title, description, status, date });
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Challenge Form"
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="modal-title">New Challenge</h2><br/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="modal-input"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="modal-input"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="modal-grid">
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              className="open-close"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="open">Open</option>
              <option value="close">Close</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <DatePicker
              className="modal-input"
              id="date"
              selected={date}
              onChange={(date) => setDate(date)}
              required
            />
          </div>
        </div>
        <button className="modal-btn" type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ModalForm;
