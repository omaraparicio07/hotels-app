import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later
    navigate('/login')
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>Pagina de inicio para el proyecto de hotelsApp</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
        />
        {loggedIn ? <div>Tu correo electrónico es {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Home