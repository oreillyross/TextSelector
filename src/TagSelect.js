import React from 'react'
import Autosuggest from 'react-autosuggest'

const tags = [

{name: 'Google'},
{name: 'Chrome'},
{name: 'Browser'},
]

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0 ? [] : 
  
  tags.filter(tag => tag.name.toLowerCase().slice(0, inputLength) === inputValue
   ) 
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
)

export default function TagSelect() {
  return (
    <Autosuggest>/

      this is auto suggest
    </Autosuggest>

  )
}

