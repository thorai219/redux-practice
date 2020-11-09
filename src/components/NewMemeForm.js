import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const DEFAULT = {
  url: '',
  topText: '',
  botText: ''
}

function NewMemeForm({ addMeme }) {
  const [form, setForm] = useState(DEFAULT)

  function handleSubmit(e) {
    e.preventDefault()
    addMeme({ ...form, id: uuidv4() })
    setForm(DEFAULT)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }))
  }

  return (
    <div>
      <form className='meme-form' onSubmit={handleSubmit}>
      <h2 className='text-center'>Create a Meme</h2>
        <div className='form-group'>
          <label htmlFor='url'>Image URL</label>
          <input
            type='text'
            name='url'
            onChange={handleChange}
            value={form.url}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='topText'>Top Text</label>
          <input
            type='text'
            name='topText'
            onChange={handleChange}
            value={form.topText}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='botText'>Bottom Text</label>
          <input
            type='text'
            name='botText'
            onChange={handleChange}
            value={form.botText}
          />
        </div>
        <button className='meme-btn' type='submit'>
          Create!
        </button>
      </form>
    </div>
  )
}

export default NewMemeForm