import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Callback() {

  const router = useRouter();

  useEffect(() => {
    if (router.query.code) {
      handleCallback(router.query.code);
    }
  }, [router]);

  const handleCallback = async (code) => {
    const tokens = await getTokens(code);
    localStorage.setItem("id_token", tokens.id_token);
    localStorage.setItem("access_token", tokens.access_token);
    localStorage.setItem("refresh_token", tokens.refresh_token);

    router.push("/me");
  };

  const getTokens = async (code) => {
    const tokens = await fetch("http://localhost:3070/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: "633402fdf28d8e00252948b1",
        grant_type: "authorization_code",
        redirect_uri: "http://localhost:3000/auth/oauth-callback",
        code,
      }),
    });
    const data = await tokens.json();
    return data;
  }

  return <p>Loading...</p>;
}
