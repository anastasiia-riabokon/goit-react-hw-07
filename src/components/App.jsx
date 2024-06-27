import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import Notification from "./Notification/Notification";
import css from "./App.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectContacts, selectError, selectLoading} from "../redux/contactsSlice";
import {selectNameFilter} from "../redux/filtersSlice";
import {useEffect} from "react";
import {fetchContacts} from "../redux/operations";
import {DNA} from "react-loader-spinner";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <DNA wrapperStyle={{position: "absolute", top: "30%", right: "30%"}} />}
      {!isLoading && !isError && filteredContacts.length !== 0 && (
        <ContactList users={filteredContacts} />
      )}
      {filteredContacts.length === 0 && contacts.length !== 0 && (
        <Notification text={`No contact found ${filter}`} />
      )}

      {isError && <Notification text={"Woops! Something went wrong😰"} />}
    </div>
  );
}

export default App;
