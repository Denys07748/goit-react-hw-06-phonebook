// import { useEffect } from 'react';
import { Container, TitleMain, TitleSec } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = contactData => {
  //   const isIncludes = contacts.some(
  //     ({ name, number }) =>
  //       name.toLowerCase() === contactData.name.toLowerCase() ||
  //       number === contactData.number
  //   );
  //   if (isIncludes) {
  //     alert('A contact with the same name or number is already in contacts');
  //     return;
  //   }

  //   const newContact = {
  //     id: nanoid(5),
  //     ...contactData,
  //   };

  //   setContacts(state => [newContact, ...state]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(state => state.filter(({ id }) => id !== contactId));
  // };

  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      <ContactForm />

      <TitleSec>Contacts</TitleSec>
      {contacts.length === 0 ? (
        <p>
          There are no contacts in your phone book yet. Please add contacts.
        </p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};

export default App;
