import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({users}) => {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li className={css.item} key={user.id}>
          <Contact values={user} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
