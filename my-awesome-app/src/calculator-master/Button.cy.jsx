//import Stepper from './Stepper'
import App from './App'
import * as React from 'react'

describe('<App>', () => {
  it('mounts', () => {
    cy.mount(<App />)
    cy.get(':nth-child(3) > :nth-child(1) > button').contains('4').click()
    cy.get(':nth-child(4) > .orange > button').click()
    cy.get(':nth-child(3) > :nth-child(3) > button').contains('6').click()
    cy.get(':nth-child(5) > .orange > button').click()
    cy.get('.component-display > div').contains('10')
  })
})