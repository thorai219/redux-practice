import React from 'react'
import PropTypes from 'prop-types'


function Meme({ deleteMeme, topText, botText, url, id }) {
  function handleDelete() {
    deleteMeme(id)
  }

  return (
    <div className='meme'>
      <span className='top-text'>{topText}</span>
      <img src={url} alt='meme' />
      <span className='bot-text'>{botText}</span>
      <button className='meme-btn' onClick={handleDelete}>
        DELETE
      </button>
    </div>
  )
}


Meme.propTypes= {
  topText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  botText: PropTypes.string.isRequired
}

export default Meme