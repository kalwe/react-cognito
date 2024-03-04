import './App.css'

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json'
Amplify.configure(config)

function App({signOut, user}) {

  return (
    <>
      <h2>React Cognito</h2>
      {/* <Outlet /> */}
      <h1>Welcome {user.username}</h1>
      <p>ID: {user.userId}</p>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default withAuthenticator(App)
