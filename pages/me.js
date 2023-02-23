import { useEffect, useState } from "react";
import { decode } from "jsonwebtoken";
import { useRouter } from "next/router";
import { AuthClient } from "../auth_client";

export default function Me() {
  const router = useRouter();
  const [profile, setProfile] = useState();

  useEffect(() => {
    const token = localStorage.getItem("id_token");
    if (token) {
      setProfile(decode(token));
      setInterval(refresh, 10000)
    } else {
      router.push("/auth/login");
    }
  }, []);
  
  const refresh = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    await AuthClient.refreshTokens(refreshToken);
    console.log("Refeshed");
  };

  if (profile)
    return (<div>
      <p>Greetings {profile.name}, member of "{profile.tenant_name}"!</p>
      {/* <pre>{JSON.stringify(profile, undefined, '\t')}</pre> */}
    </div>)
}
