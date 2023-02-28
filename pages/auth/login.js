import { useEffect } from 'react'
import {AuthService} from '../../auth_service'

export default function Login() {

  useEffect(() => {
    // Start login by redirecting user immediately on page load
    window.location.assign(`${AuthService.BASE_URL}/url/login/${AuthService.APP_ID}`);
  })

  return ("");
}
