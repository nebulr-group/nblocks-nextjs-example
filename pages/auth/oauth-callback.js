import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthService } from "../../auth_service";

// Users will get back to this route after finishing login
export default function Callback() {

  const router = useRouter();

  useEffect(() => {
    // Obtain the code parameter from url
    if (router.query.code) {
      handleCallback(router.query.code);
    }
  }, [router]);

  const handleCallback = async (code) => {
    // Exhange code into tokens -> save them in localstorage
    await AuthService.getTokens(code);
    // You're now logged in. Go to /me page
    router.push("/me");
  };

  return <p>Loading...</p>;
}
