import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => <div className={classes.backdrop} onClick={props.onHideCartHandler}> </div>;

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCartHandler={props.onHideCartHandler} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
