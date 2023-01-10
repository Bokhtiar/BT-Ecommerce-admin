import authRoute from "../../../hook/authRouter";
import LoginForm from "../../../components/form/login.form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getToken, networkErrorHandeller, setToken } from "../../../utils/helpers";

const Login: React.FC = (): JSX.Element => {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);

  /* Handle login */
  const handleLogin = async (data: any) => {
    try {
      setLoading(true);
    //   const response = await NetworkServices.Authentication.login(data);
    //   if (response && response.status === 200) {
    //     await setToken(response.data.token);
    //     router.push("/dashboard");
    //   }
    //   setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        networkErrorHandeller(error);
      }
    }
  };

  useEffect(() => {
    if (getToken()) {
        router.push("/dashboard");
    }
  }, [router]);

    return <LoginForm loading={isLoading} onSubmit={(data) => handleLogin(data)}></LoginForm>
}

export default Login; 