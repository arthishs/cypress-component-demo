//import Stepper from './Stepper'
import App from './App'
import * as React from 'react'

describe('<App>', () => {
  it('mounts', () => {
    cy.mount(<App />)
    cy.get('button').click().contains('count is 1')
    cy.get('button').click().contains('count is 2')
  })
})