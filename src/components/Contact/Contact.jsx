import css from "./Contact.module.css";
import {FaUser} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contactsSlice";

export const Contact = ({values}) => {
  const {id, name, number} = values;
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className={css.block}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.block}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};
export default Contact;
