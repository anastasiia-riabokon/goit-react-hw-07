import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import Notification from "./Notification/Notification";
import {useDispatch, useSelector} from "react-redux";
import {selectContacts, selectError, selectLoading} from "../redux/contactsSlice";
import {selectNameFilter} from "../redux/filtersSlice";
import {useEffect} from "react";
import {fetchContacts} from "../redux/operations";

import Title from "./Title/Title";
import Section from "./Layout/Section";
import Container from "./Layout/Container";
import Loader from "./Loader/Loader";

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
    <Section>
      <Container>
        <Title />
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {!isLoading && !isError && filteredContacts.length !== 0 && (
          <ContactList users={filteredContacts} />
        )}
        {filteredContacts.length === 0 && contacts.length !== 0 && (
          <Notification text={`No contact found ${filter}`} />
        )}

        {isError && <Notification text={"Woops! Something went wrong😰"} />}
      </Container>
    </Section>
  );
}

export default App;
