import authRoute from "../../../hook/authRouter";
import LoginForm from "../../../components/form/Login.form";

const Login: React.FC = (): JSX.Element => {
    return <LoginForm></LoginForm>
}

export default authRoute(Login);