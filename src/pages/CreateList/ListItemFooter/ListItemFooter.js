import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

function ListItemFooter (props) {
  return (
    <div className='list-card-footer'>
      <div className='list-item-footer-actions'>
        <FontAwesomeIcon icon={faPen} color='#00b0ff' size='1x' />
        <FontAwesomeIcon
          icon={faTrash}
          color='#e91e63'
          size='1x'
          onClick={() => props.deleteProduct(props.item.id)}
        />
      </div>
      <p>Total: R$ {props.item.total}</p>
    </div>
  )
}

export default ListItemFooter
