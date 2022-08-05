import Stepper from './Stepper'
import * as React from 'react'

describe('<Stepper>', () => {
  it('mounts', () => {
    cy.mount(<Stepper />)
    cy.get('[aria-label="decrement"]').click()
    cy.get('[data-cy="counter"]').contains('-1')
    cy.get('[aria-label="increment"]').click()
    cy.get('[data-cy="counter"]').contains('0')
    cy.get('[aria-label="increment"]').click()
    cy.get('[aria-label="increment"]').click()
    cy.get('[data-cy="counter"]').contains('2')
  })
})