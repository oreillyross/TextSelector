import React from 'react'
import {Icon, Label} from 'semantic-ui-react'

export default function Tag({name, onDelete}) {
  return (
    <Label style={{margin: '.5rem', borderRadius: '15px 15px 15px 15px', textAlign: 'center', padding: '.7rem'}}>
      {name} <Icon style={{float: 'right'}} onClick={() => onDelete(name)} name='delete'/>
    </Label>
  )
}