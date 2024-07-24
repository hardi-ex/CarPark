import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import css from "./Modal.module.css";

const Modal = ({ isOpen, onRequestClose, advert }) => {
  const {
    year,
    img,
    rentalPrice,
    make,
    model,
    address,
    rentalCompany,
    type,
    engineSize,
    fuelConsumption,
    description,
    rentalConditions,
    mileage,
    accessories,
    functionalities,
  } = advert;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Advert Details"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "550px",
          minHeight: "650px",
          padding: "30px",
          borderRadius: "20px",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onRequestClose}>
          &times;
        </button>

        <img className={css.imgCar} src={img} alt={make} />
        <h2 className={css.title}>
          {make}&nbsp;{model},&nbsp;{year}
        </h2>

        <div className={css.mainWrap}>
          <p className={css.text}>
            <span className={css.mainText}>Rental Price: </span>
            {rentalPrice}
          </p>
          <p className={css.text}>
            <span className={css.mainText}>Type: </span>
            {type}
          </p>
          <p className={css.text}>
            <span className={css.mainText}>Engine size: </span>
            {engineSize}
          </p>
          <p className={css.text}>
            <span className={css.mainText}>Fuel consumption: </span>
            {fuelConsumption}
          </p>
          <p className={css.text}>
            <span className={css.mainText}>Mileage: </span>
            {mileage}
          </p>
          <p className={css.text}>
            <span className={css.mainText}>Description: </span>
            {description}
          </p>
          <p className={css.text}>
            <span className={css.mainText}>Rental conditions: </span>
            {rentalConditions}
          </p>
        </div>

        <div className={css.additionalWrap}>
          <h3 className={css.titleAdditional}>
            Accessories and functionalities:{" "}
          </h3>
          <p className={css.text}>{accessories.join(" | ")}</p>
          <p className={css.text}>{functionalities.join(" | ")}</p>
        </div>

        <div className={css.additionalWrap}>
          <h3 className={css.titleAdditional}>Rental Information</h3>
          <p className={css.text}>
            <span className={css.mainText}>Rental Company: </span>{" "}
            {rentalCompany}
          </p>
          <p className={css.text}>
            <span className={css.mainText}>Address: </span>
            {address}
          </p>
        </div>

        <a className={css.btnRent} href="tel:+380730000000">
          Rental car <img src="/phone.svg" alt="Phone" width="20" height="20" />
        </a>
      </div>
    </ReactModal>
  );
};

export default Modal;
