import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const authRoute = (Component: any) => {
  return (props: any) => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
      const checkToken = async () => {
        const token:any = localStorage.getItem("token");

        if (!token) {
          router.replace("/auth/login");
        } else {
          setAuthenticated(true)
        }
      }
      checkToken();
    }, []);

    if (authenticated) {
      return (
        <Component {...props} />
      );
    } else {
      return null;
    }
  }
};
export default authRoute;