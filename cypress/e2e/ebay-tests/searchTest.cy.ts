/// <reference types="cypress" />

import Banner from '../objects/banner.cy';
import SearchResults from '../objects/searchResults.cy';

describe('example ebay tests', () => {
  beforeEach(() => {
    // visit base url.
    cy.visit('https://www.ebay.com.au/')
  })

  it('can search for an item and verify the returned list is > 0', () => {
    const banner = new(Banner)
    const searchResults = new(SearchResults)
    banner.getSearchInputField().type("sennheiser headphones")
    banner.getSearchButton().click()
    searchResults.getResults().should('have.length.greaterThan', 0) 
  })

  
})
