import styles from './ContactList.module.css'
import Contact from '../Contact/Contact';

export default function ContactList({contacts}){

    return (
        <ul className={styles.list}>
           {contacts.map(({id, name, number}) => (
                <Contact key={id} id={id} name={name} number={number}/>   
           ))}
        </ul>
    );
    }