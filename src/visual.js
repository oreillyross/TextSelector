import React from 'react'
import ReactDOM from 'react-dom'
import TextSelect from './index'
import { article } from './data/article'

const rootElement = document.getElementById("root");
ReactDOM.render(<TextSelect article={article}/>, rootElement);