import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import Column from '../Column/Column'

import './ColumnList.css'

const ColumnList = (props) => {
  const [columns, setColumns] = useState([])

  const deskId = props.match.params.id

  const updateColumns = (column) => {
    setColumns([...columns, column])
  }

  const removeColumns = (removeId) =>
    setColumns(columns.filter(({ id }) => id !== removeId))

  const deleteColumn = (id) => {
    const db = firebase.firestore()
    db.collection('columns')
      .doc(id)
      .delete()
      .then(() => removeColumns(id))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    const db = firebase.firestore()
    db.collection('columns')
      .where('deskId', '==', deskId)
      .get()
      .then((querySnapshot) => {
        const dataColumns = []
        querySnapshot.forEach((doc) => {
          const { name, deskId } = doc.data()
          dataColumns.push({
            id: doc.id,
            name: name,
            deskId: deskId,
          })
        })

        setColumns(dataColumns)
      })
  }, [])

  return (
    <div className="ColumnList">
      {columns.map((column) => (
        <Column
          id={column.id}
          deleteColumn={deleteColumn}
          key={column.id}
          name={column.name}
        />
      ))}
      <Column
        deskId={deskId}
        updateColumns={updateColumns}
        createColumnBool={true}
        name="Создать лист"
      />
    </div>
  )
}
export default ColumnList
