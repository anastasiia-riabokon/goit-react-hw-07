import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import Notification from "./Notification/Notification";
import css from "./App.module.css";
import {useSelector} from "react-redux";
import {selectContacts} from "../redux/contactsSlice";
import {selectNameFilter} from "../redux/filtersSlice";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {filteredContacts.length !== 0 ? (
        <ContactList users={filteredContacts} />
      ) : (
        <Notification text={`No contact found with the name ${filter}`} />
      )}
    </div>
  );
}

export default App;
