import { useEffect, useState } from "react";
import { decode } from "jsonwebtoken";
import { useRouter } from "next/router";

export default function Me() {
  const router = useRouter();

  const [profile, setProfile] = useState();
  const [authContext, setAuthContext] = useState();

  useEffect(() => {
    // Get tokens from Local storage
    const idToken = localStorage.getItem("id_token");
    const accessToken = localStorage.getItem("access_token");

    if (idToken && idToken != "undefined") {
      // Decode them and save JSON in state variable
      setProfile(decode(idToken));
      setAuthContext(decode(accessToken));
    } else {
      // Move user to login flow
      router.push("/auth/login");
    }
  }, []);

  if (profile)
    return (<div>
      <p>Greetings {profile.name} with role "{authContext.role}" , member of "{ profile.tenant_name ? profile.tenant_name : "New account"}"!</p>
      {/* <pre>{JSON.stringify(profile, undefined, '\t')}</pre> */}
    </div>)
}
