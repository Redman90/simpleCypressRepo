// import cypress from "cypress";

class Banner {
  
   getSearchInputField(){
    return cy.get('#gh-ac');
   } 
   
   getSearchButton() {
    return cy.get('#gh-btn');
   }

}
export default Banner