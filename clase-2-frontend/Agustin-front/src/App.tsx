/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

/* import  "./styles.css";
import NavBar from "./components/navbar.tsx";
import { Hola } from "./Otro.tsx"
const MiComponente = () => {
  return(
    <div>
    <NavBar/>
    <h1>
    Hola mundo
    </h1>
    <Hola/>
    </div>
    )
  } */

/* import { useState } from "react";
function MiComponente () {
  const [estado, setEstado] = useState(0);
  
  const [isLoading, setIsLoading] = useState(true);

  if (estado % 2 != 0){
    console.log(isLoading);
  }else{
    setIsLoading(false);
  }
  
  return (
    <>
    {estado %2 !== 0 ?(<div>Cargando...</div>)  : setIsLoading(false) }
    <h1>{estado}</h1>
    <button onClick={() => {
      setEstado(estado + 1);
    }}> contador

    </button>
    </>
  )

}
export default MiComponente; */
import { useState } from "react";

/* export default function name(){
  const [name, setName] = useState(false);
  const [apellido ,setApellido] = useState('trossero');

  return (
    <>
    <button onClick={() => {
      setApellido("Apellido")
      setName(true);
    }}>
    </button>
      {name ? <h1>{apellido}</h1>: console.log(name)}
    </>
  )
} */

export default function login (){
  const [login, setLogin] = useState({
    password : '',
    mail : ''
  });

  const [aux, setAux] = useState({
    password : '',
    mail : ''
  });

  return (
    <div>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        console.log(login);
      }}>
      <h1>Form</h1>
      <p>Mailsito</p>
      <input type="text" required value={login.mail}  onChange={(e) => {
        setLogin({
          ...login,
          mail: e.target.value
        })
      }} />
  <br />
  <p>passwordsita</p>
      <input type="password" maxLength={4} required  value={login.password} onChange={(e) => {
        setLogin({
          ...login,
          password : e.target.value
        })
      }} />
      <br />
      <button /* onClick={() => {
        console.log(login);
      }} */>
        Apretame salame
      </button>

      <button disabled={Boolean(!login.password || !login.mail)} onClick={() => {
        setLogin(
          {
            mail:'',
            password:''
          }
          /* AUX */
        )
      }}>
        Reseate los valores
      </button>
      </form>
    </div>
  )


}