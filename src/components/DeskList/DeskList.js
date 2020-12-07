import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import Desk from '../Desk/Desk'
import CreateDesk from '../CreateDesk/CreateDesk'

import './DeskList.css'

const DeskList = (props) => {
  const [desks, setDesks] = useState([])

  const goToColumns = (id) => {
    props.history.push(`/list/${id}`)
  }

  const updateDesks = (desk) => {
    setDesks([...desks, desk])
  }

  const removeDesks = (removeId) =>
    setDesks(desks.filter(({ id }) => id !== removeId))

  const deleteDesks = (id) => {
    const db = firebase.firestore()

    db.collection('desks')
      .doc(id)
      .delete()
      .then(() => removeDesks(id))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    const db = firebase.firestore()
    db.collection('desks')
      .get()
      .then((querySnapshot) => {
        const dataDesks = []
        querySnapshot.forEach((doc) => {
          dataDesks.push({
            id: doc.id,
            name: doc.data().name,
          })
        })
        setDesks(dataDesks)
      })
  }, [])

  return (
    <div className="DeskList">
      {desks.map((desk) => {
        return (
          <Desk
            goToColumns={goToColumns}
            id={desk.id}
            deleteDesk={deleteDesks}
            name={desk.name}
            key={desk.id}
          />
        )
      })}
      <CreateDesk update={updateDesks} />
    </div>
  )
}

export default DeskList
