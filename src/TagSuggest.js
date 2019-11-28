import React from 'react';
import Autosuggest from 'react-autosuggest'
import TagSuggestTheme from './TagSuggestTheme.css'
import {Input} from 'semantic-ui-react'

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
    placeholder: 'add a new tag',
    value,
    onChange: onChange
  }

  const renderInputComponent = inputProps => (
    <div>
       <Input
        {...inputProps}
    label={{ tag: true, content: 'Add Tag' }}
    labelPosition='right'
    
  />
      
    </div>
  );
  return (
    <span style={{margin: '.5rem', borderRadius: '15px 15px 15px 15px', padding: '.2rem'}}>
       <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={TagSuggestTheme}
      renderInputComponent={renderInputComponent}
     >
     </Autosuggest>
    </span>
  )

}