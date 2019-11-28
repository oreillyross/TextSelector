import React from 'react'
import {Icon, Label} from 'semantic-ui-react'

export default function Tag({name}) {
  return (
    <Label style={{borderRadius: '50px', padding: '1.2rem'}}>
      {name} <Icon name='delete'/>
    </Label>
  )
}