import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contactsData.contacts);

  const searchValue = useSelector((state) => state.filterValue.filter);

  // const foundContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const foundContacts = Array.isArray(contacts)
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <ul className={styles.list}>
      {Array.isArray(foundContacts) &&
        foundContacts.map((contact) => (
          <Contact
            key={contact.id}
            userName={contact.name}
            userPhone={contact.number}
            userId={contact.id}
          />
        ))}
    </ul>
  );
};

export default ContactList;
