import { useEffect, useState } from "react";
import {decode} from "jsonwebtoken";
import { useRouter } from "next/router";

export default function Me() {
  const router = useRouter();
  const [profile, setProfile] = useState();

  useEffect(() => {
    const token = localStorage.getItem("id_token");
    if (token) {
      setProfile(decode(token));
    } else {
      router.push("/auth/login");
    }
  }, []);

  if (profile)
    return (<div>
      <p>Greetings {profile.name}, member of "{profile.tenant_name}"!</p>
      {/* <pre>{JSON.stringify(profile, undefined, '\t')}</pre> */}
    </div>)
}
