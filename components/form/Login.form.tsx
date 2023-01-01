import InputFild from "../input-fild";

const LoginForm: React.FC = (): JSX.Element => {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="shadow-md md:w-[400px]">
                    <InputFild label="Email Address" type="text" name="email" placeholder="Email address" />
                    <InputFild label="Password" type="password" name="password" placeholder="Password" />
                </div>
            </div>
        </div>

    )
}
export default LoginForm;