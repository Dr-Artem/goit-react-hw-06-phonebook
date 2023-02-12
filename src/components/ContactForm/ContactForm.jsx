import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export const ContactForm = data => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        data.onSubmit({
            name: name,
            number: number,
        });
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit} id="form" className={style.contsct_form}>
            <label>
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
            </label>
            <label>
                <span>Number</span>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                />
            </label>

            <button className={style.contsct_form__submit} type="submit">
                Add contact
            </button>
        </form>
    );
};

// export class OldContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

//     handleChange = event => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value });
//     };
//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     };
//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className={style.contsct_form}>
//                 <label>
//                     <span>Name</span>
//                     <input
//                         type="text"
//                         name="name"
//                         value={this.state.name}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <label>
//                     <span>Number</span>
//                     <input
//                         type="tel"
//                         name="number"
//                         value={this.state.number}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         onChange={this.handleChange}
//                     />
//                 </label>

//                 <button className={style.contsct_form__submit} type="submit">
//                     Add contact
//                 </button>
//             </form>
//         );
//     }
// }

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
