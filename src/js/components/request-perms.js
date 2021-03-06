import React from 'react'

export default (props) => {

  const {roomName, created, noStream, onRequestPerms} = props

  return (
    <div id='request-perms' className='container'>
      <h3>{created ? 'Création de ' : null}{roomName}</h3>
      {
        !created ? (
          <h5>Tu es sur le point de rejoindre un appel vidéo.</h5>
        ): null
      }
      <button
        class="btn-one"
        type='button'
        className='button-primary'
        onClick={onRequestPerms}
      >
       Autoriser l'accès Caméra/Micro
      </button>
    </div>
  )

}
