import { useEffect } from 'react'
import {AuthClient} from '../../auth_client'

export default function Login() {

  useEffect(() => {
    window.location.assign(`${AuthClient.BASE_URL}/url/login/${AuthClient.APP_ID}`);
  })

  return ("")
}
