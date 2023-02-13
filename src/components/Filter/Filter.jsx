import { useDispatch } from 'react-redux';
import { change } from 'redux/filterSlice';
import style from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const changeValue = event => {
        dispatch(change(event.target.value));
    };
    return (
        <label className={style.filter}>
            <span>Find contacts by name</span>
            <input type="text" name="filter" onChange={changeValue} />
        </label>
    );
};
