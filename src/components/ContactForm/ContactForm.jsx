import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { add } from 'redux/contactsSlice';
import style from './ContactForm.module.css';

export const ContactForm = ({ contactsList }) => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const { name, number } = event.target.elements;

        const person = {
            id: nanoid(),
            name: name.value,
            number: number.value,
        };
        checkForDuplicates(person)
            ? alert(`${person.name} is already in contacts`)
            : dispatch(add(person));
    };
    const checkForDuplicates = person =>
        contactsList.some(
            contact => contact.name.toLowerCase() === person.name.toLowerCase()
        );

    return (
        <form onSubmit={handleSubmit} id="form" className={style.contsct_form}>
            <label>
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                <span>Number</span>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>

            <button className={style.contsct_form__submit} type="submit">
                Add contact
            </button>
        </form>
    );
};
