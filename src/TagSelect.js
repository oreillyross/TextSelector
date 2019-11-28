import React from 'react'
import TagSuggest from './TagSuggest'

import styled from 'styled-components'



const StyledParent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);

`

const StyledHeader = styled.div`
   grid-area: 1 / 1 / 2 / 2;
   font-weight: bold;
   text-align: left;
   padding: 1.2rem;
   justify-self: stretch;
`

const StyledTagInput = styled.div`
   grid-area: 2 / 1 / 3 / 2;
   text-align: left;
   padding: 1.2rem;
   justify-self: stretch;
`

const StyledTags = styled.div`
   grid-area: 2 / 1 / 2 / 2;
   display: grid;
   grid-gap: 10px 10px
`

const StyledTag = styled.button`
  padding: 1.2rem;
`



export default function TagSelect() {
  
 
  
  return (
    <div style={{padding: '1.2rem'}}>
    <TagSuggest></TagSuggest>
    
    </div>

  )
}

