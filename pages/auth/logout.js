import { useEffect } from 'react'

export default function Logout() {

  useEffect(() => {
    localStorage.removeItem("id_token");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  })

  return ("")
}
