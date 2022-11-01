
describe('example pets API tests', () => {

it('can create, update and delete a pet from pet API', () => {  
  
cy.request('POST', '/pet', {
    "name": "dougie mad dog",
    "photoUrls": [
      "ad tempor id magna",
      "Duis"
    ],
    "id": 8111111111111111,
    "category": {
      "id": -20476978889,
      "name": "id occaecat est"
    },
    "tags": [
      {
        "id": 895601778,
        "name": "magna ipsum"
      },
      {
        "id": 86688648889,
        "name": "quis voluptate"
      }
    ],
    "status": "available"
  }).then(
    (response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('id', 8111111111111111) // true
    }
  )

  // now do a get and confirm our pet is there
  cy.request('/pet/8111111111111111',).then(
    (response) => {
        expect(response.body).to.have.property('name', 'dougie mad dog')
    }
  )

// now change our pets name
cy.request('PUT', '/pet', {
    "name": "He Man",
    "photoUrls": [
      "ad tempor id magna",
      "Duis"
    ],
    "id": 8111111111111111,
    "category": {
      "id": -20476978889,
      "name": "id occaecat est"
    },
    "tags": [
      {
        "id": 895601778,
        "name": "magna ipsum"
      },
      {
        "id": 86688648889,
        "name": "quis voluptate"
      }
    ],
    "status": "available"
  }).then(
    (response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('id', 8111111111111111) // true
    }
  )

// now do a get and confirm our pet name has changed 
cy.request('/pet/8111111111111111',).then(
    (response) => {
        expect(response.body).to.have.property('name', 'He Man')
    }
  )


// to finish the test cleanly we must delete our pet
cy.request('DELETE','/pet/8111111111111111').then(
    (response) => {
        expect(response.body).to.have.property("message", "8111111111111111")
        expect(response.status = 200)    
          })
    }
)

})
