import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox(){
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        dispatch(changeFilter(event.target.value))
    }
return (
<div className={styles.container}>
    <p className={styles.title}>Find contacts by name</p>
    <input className={styles.input} type="text" onChange={handleOnChange} />
</div>
);
}