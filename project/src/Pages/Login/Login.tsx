import { useForm } from "react-hook-form";
import styles from "./Login.module.scss";
import { credentials, type Credentials, type LoginProps } from "./Login.types";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = ({}: LoginProps) => {

    const { register, handleSubmit } = useForm<Credentials>({
        resolver: zodResolver(credentials)
    });

    const onSubmit = (data: Credentials) => {
        console.log(data);
    }

    return (
        <div className={styles.Login}>
                <form className={styles.LoginForm} onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="username" {...register("username")} />
                    <Input placeholder="password" type="password" {...register("password")} />    
                    <Button>Login</Button>
                </form>
        </div>
    )
}

export default Login;