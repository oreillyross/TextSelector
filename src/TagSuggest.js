import React from 'react';
import Autosuggest from 'react-autosuggest'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'
import { theme } from './theme'


const tags = [

  {name: 'Google'},
  {name: 'Chrome'},
  {name: 'Chr00ome'},
  {name: 'Chraa00ome'},
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

export default function TagSuggest({addTag, value, onChange}) {
  
  const onSuggestionsFetchRequested = ({value}) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }



  const [suggestions, setSuggestions] = React.useState([])

  
  const inputProps = {
    placeholder: 'add a new tag',
    value,
    onChange,
  }

 

    const renderInputComponent = inputProps => (
    <Input 
     onKeyPress={addTag}
    {...inputProps}/>
  );
  
  return (
    <span style={{margin: '.5rem', borderRadius: '15px 15px 15px 15px', padding: '.2rem'}}>
       <Autosuggest
      highlightFirstSuggestion
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={theme}     
      renderInputComponent={renderInputComponent}
     >
     </Autosuggest>
    </span>
  )

}