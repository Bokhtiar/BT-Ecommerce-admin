import InputFild from "../input-fild";
import { LoginButton } from "../button";

const LoginForm: React.FC = (): JSX.Element => {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="shadow-2xl px-4 md:w-[400px] py-6 rounded-lg">
                    <img className="mx-auto my-4" src="/logo.png" alt="" />
                    <InputFild label="Email Address" type="text" name="email" placeholder="Email address" />
                    <InputFild label="Password" type="password" name="password" placeholder="Password" />
                    <div className="py-2 text-center">
                        <LoginButton name="Login"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;