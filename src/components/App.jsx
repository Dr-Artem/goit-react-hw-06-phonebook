import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import style from './App.module.css';

export const App = () => {
    const { contacts } = useSelector(state => state.contacts);
    const stateFilter = useSelector(state => state.filter);

    const getFilteredPerson = () => {
        const normalisedFilter = stateFilter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalisedFilter)
        );
    };

    return (
        <div className={style.main_section}>
            <h1>Phonebook</h1>
            <ContactForm contactsList={contacts} />

            <h2>Contacts</h2>
            <Filter />
            <ContactList data={getFilteredPerson()} />
        </div>
    );
};
