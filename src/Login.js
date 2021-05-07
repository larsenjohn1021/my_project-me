import React from 'react'

export default function Login() {

     function signin(){

    }

    return (
        
      <div className="Login">
          <h>Login</h>
          <p>{"\n"}</p>
          <input type="text" placeholder= "username"/><p>{"\n"}</p>
          <input type="password" placeholder= "Password"/><p>{"\n"}</p>
          <button onClick={signin}>Login</button>
      </div>
        
    )
}
