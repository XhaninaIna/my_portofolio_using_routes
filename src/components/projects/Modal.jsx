export default function Modal({ title, imageURL, description, onClose }) {
  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal_content">
        <span onClick={onClose}>X</span>{" "}
        <h2 className="modal_title">{title}</h2>
        <img className="modal_image" src={imageURL} alt={title} />
        <p className="modal-description">{description}</p>
      </div>
    </div>
  );
}
