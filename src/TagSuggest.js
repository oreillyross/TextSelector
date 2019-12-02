import React from 'react';
import Autosuggest from 'react-autosuggest'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'

const theme = {
  container: {
    position: 'relative'
  },
  input: {
    
    padding: '10px 20px',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: 51,
    width: 280,
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd'
  }
};

const tags = [

  {name: 'Google'},
  {name: 'Chrome'},
  {name: 'Chr00ome'},
  {name: 'Chraa00ome'},
  {name: 'Browser'},
  ]


const StyledSuggestions = styled.div`
  background-color: #E4EEE1;
  list-style: none;

`
  
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0 ? [] : 
  
  tags.filter(tag => tag.name.toLowerCase().slice(0, inputLength) === inputValue
   ) 
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => (
  <StyledSuggestions>
    {suggestion.name}
  </StyledSuggestions>
)

export default function TagSuggest({addTag}) {
  
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
    onChange
    
  }

    const renderInputComponent = inputProps => (
    <Input 
   
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