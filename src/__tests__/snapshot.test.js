import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TextSelect from '../index'
import { article } from '../data/article'

afterEach(cleanup)

it('Matches snapshot', () => {
  const { asFragment } = render(<TextSelect article={article}/>)
  expect(asFragment()).toMatchSnapshot()
})

