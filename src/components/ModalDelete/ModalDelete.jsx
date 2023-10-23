import "./ModalDelete.scss";

const ModalDelete = ({ handleDelete, setIsOpenModal }) => {
  return (
    <div className="modal">
      <div className="modal-bg" onClick={() => setIsOpenModal(false)} />
      <div className="modal-container">
        <p>Are you sure you want to delete this product?</p>
        <div className="buttons">
          <button className="secondary-btn delete" onClick={handleDelete}>
            Delete
          </button>
          <button className="secondary-btn" onClick={() => setIsOpenModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
