// import cypress from "cypress";

class SearchResults {
  
   getResults(){
    return cy.get('.srp-results > li');
   } 


}
export default SearchResults