import React from 'react'
import {PlusSquare, Send, Video} from 'react-feather'

export default (props) => {

  return (
    <div className='features how-it-works'>
      <div className='container'>
        <h3>Comment ça marche ?</h3>
        <div className='row'>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Création d'un appel</div>
              <PlusSquare size={35} />
              <div className='feature-text'>Choisir le nom de l'appel</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Partage le lien</div>
              <Send size={35} />
              <div className='feature-text'>Envoie le lien aux autres participants par Mail, SMS, Discord ou ce que vous préférez</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Chat!</div>
              <Video size={35} />
              <div className='feature-text'>Parles à tes amis en P2P</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
