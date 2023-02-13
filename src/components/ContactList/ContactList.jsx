import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';
import style from './ContactList.module.css';

export const ContactList = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <ul className={style.list}>
            {data.map(({ id, name, number }) => {
                return (
                    <li key={id} id={id} className={style.list_item}>
                        {name}: {number}
                        <button onClick={() => dispatch(remove(id))}>
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

ContactList.propTypes = {
    data: PropTypes.array.isRequired,
};
