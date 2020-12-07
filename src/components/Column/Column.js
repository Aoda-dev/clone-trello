import React, { useState } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'

import './Column.css'

const Column = ({
  id,
  name,
  deleteColumn,
  createColumnBool,
  updateColumns,
  deskId,
}) => {
  const [show, setShow] = useState(false)
  const [inpValue, setInpValue] = useState('')

  const createColumn = () => {
    if (!inpValue.trim().length) {
      alert('найс пустое поле')
      return null
    }

    const db = firebase.firestore()
    db.collection('columns')
      .add({
        name: inpValue,
        deskId: deskId,
      })
      .then((docRef) => docRef.get()) //делает return
      .then((doc) => {
        updateColumns({
          id: doc.id,
          ...doc.data(),
        })
      })
      .then(() => setInpValue(''))
      .catch((error) => console.log(error))
  }

  if (show) {
    return (
      <div className="Column Form">
        <p>{name}</p>
        <input
          type="text"
          autoFocus
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />
        <button onClick={() => createColumn()}>Создать</button>
        <button onClick={() => setShow(false)}>отменить</button>
      </div>
    )
  }

  if (createColumnBool) {
    return (
      <div onClick={() => setShow(true)} className="Column create">
        {name}
      </div>
    )
  }
  return (
    <div className="Column">
      {name}
      <div onClick={deleteColumn.bind(this, id)} className="Desk__delete">
        X
      </div>
    </div>
  )
}

Column.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  deleteColumn: PropTypes.func,
  createColumnBool: PropTypes.bool,
  updateColumns: PropTypes.func,
  deskId: PropTypes.string,
}

export default Column
