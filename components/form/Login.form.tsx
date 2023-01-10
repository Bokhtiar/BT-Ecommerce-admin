import { TextInput } from "../input";
import { PrimaryButton } from "../button";
import { useForm } from "react-hook-form";

type PropsTypes = {
    loading: boolean;
    onSubmit: (data: any) => void;
};

const LoginForm: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /* Handle form submit */
    const onSubmit = (data: any) => props.onSubmit(data);

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="shadow-2xl px-4 md:w-[400px] py-6 rounded-lg">
                    <img className="mx-auto my-4" src="/logo.png" alt="" />
                    <TextInput
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="example@gmail.com"
                        className=""
                        control={control}
                        error={errors.email && errors.email.message}
                        defaultvalue={""}
                        rules={{
                            required: "Email is required.",
                            pattern: {
                                message: "Invalid email address.",
                            },
                        }}
                    />

                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="**********"
                        control={control}
                        error={errors.email && errors.email.message}
                        defaultvalue={""}
                        rules={{
                            required: "Password is required.",
                            pattern: {
                                message: "Invalid password.",
                            },
                        }}
                    />
                    <div className="py-2 text-center">
                        <PrimaryButton name="Login" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;