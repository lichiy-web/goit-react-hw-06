import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import Notification from '../Notification/Notification.jsx';

const ContactList = () => {
  const {
    contacts: { items: contactList },
  } = useSelector(state => state.contacts);
  const {
    filters: { name: searchQuery },
  } = useSelector(state => state.filters);

  if (!contactList?.length) return <Notification />;
  const matchedContacs = contactList.filter(({ name }) =>
    name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
  );
  return (
    <div className={css.contactList}>
      {matchedContacs.map(contact => {
        return <Contact key={contact.id} {...contact} />;
      })}
    </div>
  );
};
export default ContactList;
