import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 sumbols')
    .required('This field is required'),
    number: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 sumbols')
    .required('This field is required'),
})

export default function ContactForm({onAdd}){
    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            ...values
        })
        actions.resetForm();
    };
    return (
        <Formik
        initialValues={{ 
            name: '',
            number: '',
        }
    }
    onSubmit={handleSubmit}
    validationSchema={ContactSchema}>
        <Form className={styles.form}>
            <div className={styles.formGroup}>
                <label>Name
                <Field className={styles.field} type="text" name="name"></Field>
                <ErrorMessage name="name" component="div"/>
                </label>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="number">Number
                <Field className={styles.field} type="phone" name="number"></Field>
                <ErrorMessage name="number" component="div" />
                </label>
            </div>
            <button className={styles.btn} type="submit">Add contact</button>
        </Form>

    </Formik>
    )
}

