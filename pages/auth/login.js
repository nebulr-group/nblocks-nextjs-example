import { useEffect } from 'react'

export default function Login() {

  useEffect(() => {
    window.location.assign('http://localhost:3070/url/login/633402fdf28d8e00252948b1?redirectUri=http://localhost:3000/auth/oauth-callback') 
  })

  return ("")
}
