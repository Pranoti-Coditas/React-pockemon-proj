import styles from "./Input.module.scss";
import type { InputProps } from "./Input.types";

const Input = ({ placeholder, ...props }: InputProps) => {
    return (
        <div className={styles.inputContainer}>
            { placeholder?.trim() && <span className={styles.placeholder}>{placeholder}</span> }
            <input {...props} className={styles.input} />
        </div>
    )
}

export default Input;