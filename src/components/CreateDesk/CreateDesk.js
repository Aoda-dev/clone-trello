import React, { useState } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'

import './CreateDesk.css'

const CreateDesk = ({ update }) => {
  const [show, setShow] = useState(false)
  const [inpValue, setInpValue] = useState('')

  const createDesk = () => {
    if (!inpValue.trim().length) {
      alert('найс пустое поле')
      return null
    }

    const db = firebase.firestore()
    db.collection('desks')
      .add({
        name: inpValue,
      })
      .then((docRef) => docRef.get()) //делает return
      .then((doc) => {
        update({
          id: doc.id,
          ...doc.data(),
        })
      })
      .then(() => setInpValue(''))
      .catch((error) => console.log(error))
  }

  const showCreate = () => {
    setShow(true)
  }

  if (show) {
    return (
      <div className="CreateShowDesk">
        <p>Создать доску</p>
        <input
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              createDesk()
            }
          }}
          autoFocus
          type="text"
          value={inpValue}
          onChange={(e) => {
            setInpValue(e.target.value)
          }}
        />
        <button onClick={createDesk.bind(this)}>Создать</button>
        <button onClick={() => setShow(false)}>Отменить</button>
      </div>
    )
  }

  return (
    <div onClick={showCreate.bind(this)} className="CreateDesk">
      Создать доску
    </div>
  )
}

CreateDesk.propTypes = {
  update: PropTypes.func.isRequired,
}

export default CreateDesk
