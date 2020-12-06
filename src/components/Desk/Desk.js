import React from 'react'
import PropTypes from 'prop-types'

import './Desk.css'

const Desk = ({ id, deleteDesk, name }) => {
  return (
    <div className="Desk">
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
}

export default Desk
