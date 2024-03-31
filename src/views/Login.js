import React, { useState } from 'react'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')
    if (email === ''){
      setEmailError('Ingresar un correo electrónico.')
      return
    }
    if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ){
      setEmailError('Debes ingresar un correo electrínico valido.')
      return
    }

    if (password === ''){
      setPasswordError('Ingrese una contraseña.')
    }
    if( password.length < 7 ){
      setPasswordError('La contraseña debe tener una longitud minima de 8 caracteres.')
      return
    }
    if(!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){7,}$/.test(password)){
      setPasswordError('La contraseña debe tener al menos una mayúscula, una minúscula y un numero')
      return
    }

  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Iniciar sesión'} />
      </div>
    </div>
  )
}

export default Login