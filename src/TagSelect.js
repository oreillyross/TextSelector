import React from 'react'
import Tag from './Tag'
import TagSuggest from './TagSuggest'
import styled from 'styled-components'



const StyledParent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
`

export default function TagSelect({tags}) {
  
 
  
  return (
    <StyledParent>
    {tags.map(tag => (
      <Tag key={tag} name={tag}/>
    ))}
    <TagSuggest/>
    </StyledParent>

  )
}

