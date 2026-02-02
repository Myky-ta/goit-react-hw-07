import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Ім'я" required />
      <input type="tel" name="phone" placeholder="Телефон" required />
      <button type="submit">Додати контакт</button>
    </form>
  );
}
