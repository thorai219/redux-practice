import React from 'react'
import Meme from '../components/Meme'
import NewMemeForm from '../components/NewMemeForm'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/app.css'

function App() {
  const memes = useSelector(state => state.memes)
  const dispatch = useDispatch()

  function addMeme(newMeme) {
    dispatch({ type: 'ADD_MEME', meme: newMeme })
  }

  function deleteMeme(id) {
    dispatch({ type: 'DELETE_MEME', id })
  }

  const memeList = memes.map(meme => (
    <Meme
      key={meme.id}
      topText={meme.topText}
      botText={meme.botText}
      url={meme.url}
      deleteMeme={() => deleteMeme(meme.id)}
    />
  ))

  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme} />
      <hr />
      <div className='meme-container'>
        {memeList}
      </div>
    </div>
  )
}

export default App;
