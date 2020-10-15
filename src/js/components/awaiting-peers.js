import React from 'react'
import CopyLink from './copy-link'

export default (props) => {

  return (
    <div id='awaiting-peers' className='hero container'>
      <h3>En attente de participant...</h3>
      <p>Partager le lien pour commencer l'appel vidéo</p>
      <CopyLink />
    </div>
  )

}
