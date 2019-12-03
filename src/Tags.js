import React from 'react'
import Tag from './Tag'
import TagSuggest from './TagSuggest'
import styled from 'styled-components'



const StyledParent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
`

export default function Tags({initialTags}) {
  
  const [tags, setTags] = React.useState(new Set(initialTags))
  const [value, setValue] = React.useState('')
  
  const onDelete = (name) => {
    const newTags = Array.from(tags).filter(tag => tag !== name)
setTags(new Set(newTags))

}


  const onChange = (event, {newValue}) => {
    setValue(newValue)
  } 
  const addTag = (e) => {
    if (e.key === 'Enter' && value) {
      setTags(tags.add(value))
      setValue('')
    }
  }

  return (
    <StyledParent>
    {Array.from(tags).map(tag => (
      <Tag key={tag} name={tag} onDelete={onDelete}/>
    ))}
    <TagSuggest addTag={addTag} onChange={onChange} value={value}/>
    </StyledParent>
  )
}