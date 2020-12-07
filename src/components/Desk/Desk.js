import React from 'react'
import PropTypes from 'prop-types'

import './Desk.css'

const Desk = ({ id, deleteDesk, name, goToColumns }) => {
  return (
    <div onClick={goToColumns.bind(this, id)} className="Desk">
      <div onClick={deleteDesk.bind(this, id)} className="Desk__delete">
        X
      </div>
      {name}
    </div>
  )
}

Desk.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deleteDesk: PropTypes.func.isRequired,
  goToColumns: PropTypes.func.isRequired,
}

export default Desk
