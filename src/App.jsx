import React, { useState } from 'react'

export default function App() {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function login() {
    if (user === "admin" && pass === "admin") setLogged(true)
    else alert("Credenziali errate")
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      {!logged ? (
        <div>
          <h1>Login Admin</h1>
          <input placeholder="Username" onChange={e=>setUser(e.target.value)} /><br/>
          <input placeholder="Password" type="password" onChange={e=>setPass(e.target.value)} /><br/>
          <button onClick={login}>Accedi</button>
        </div>
      ) : (
        <div>
          <h1>Dashboard Admin</h1>
          <p>Benvenuto!</p>
        </div>
      )}
    </div>
  )
}
