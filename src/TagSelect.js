import React from 'react'
import Tag from './Tag'
import TagSuggest from './TagSuggest'
import styled from 'styled-components'



const StyledParent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  

`

export default function TagSelect() {
  
 
  
  return (
    <StyledParent>
    {['Chrome', 'Google', 'IOS'].map(tag => (
      <Tag key={tag} name={tag}/>
    ))}
    <TagSuggest/>
    </StyledParent>

  )
}

