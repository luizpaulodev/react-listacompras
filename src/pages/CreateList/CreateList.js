import React from 'react'

import Form from './Form'
import ListItem from './ListItem'

import './CreateList.css'

function CreateList () {
  return (
    <div className='page-container'>
      <Form />

      <div className='list-items-container'>
        <ListItem />
      </div>
    </div>
  )
}

export default CreateList
