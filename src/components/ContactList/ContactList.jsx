import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <span>{contact.name}: {contact.phone}</span>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
