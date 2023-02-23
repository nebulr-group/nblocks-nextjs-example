import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthClient } from "../../auth_client";

export default function Callback() {

  const router = useRouter();

  useEffect(() => {
    if (router.query.code) {
      handleCallback(router.query.code);
    }
  }, [router]);

  const handleCallback = async (code) => {
    await AuthClient.getTokens(code);
    router.push("/me");
  };

  return <p>Loading...</p>;
}
