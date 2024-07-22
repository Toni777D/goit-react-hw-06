import styles from './Contact.module.css'

export default function Contact({name, number, id, onDelete}){
    return(
        <div className={styles.item}> 
            <div className={styles.data}>
                <p className={styles.name}>{name}</p>
                <p className={styles.number}>{number}</p>
            </div>
           
            <button className={styles.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
        
    );
}