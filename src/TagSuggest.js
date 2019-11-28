import React from 'react';
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

export default function TagSuggest() {
  
  const onSuggestionsFetchRequested = ({value}) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const onChange = (event, {newValue}) => {
    setValue(newValue)
  } 

  const [suggestions, setSuggestions] = React.useState([])
  const [value, setValue] = React.useState('')
  
  const inputProps = {
    placeholder: 'type a tag',
    value,
    onChange: onChange
  }


  return (
    <div style={{padding: '1.2rem'}}>
       <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
     >
     </Autosuggest>
    </div>
  )

}