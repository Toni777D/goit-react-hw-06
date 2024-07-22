import styles from './SearchBox.module.css'
export default function SearchBox({value, onFilter}){
return (
<div className={styles.container}>
    <p className={styles.title}>Find contacts by name</p>
    <input className={styles.input} type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
</div>
);
}