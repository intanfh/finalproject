describe('checkout product', () => {
  it('checkout product', () => {
    //akses url https://www.demoblaze.com/index.html
    //user telah login ke homepage
    //user memilih produk yang diinginkan
    //user menambahkan produk ke kerjangan
    //user mengisi form order
    //user melakukan pembayaran produk
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#logInModalLabel').should('exist')
    cy.wait(10000)
    cy.get('#loginusername').type('tesintan@gmail.com')
    cy.wait(10000)
    cy.get('#loginpassword').type('password123')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()//button login
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()//button produk
    cy.get('.col-sm-12 > .btn').click()//add to cart
    cy.get(':nth-child(4) > .nav-link').click() //menu cart
    cy.get('.col-lg-1 > .btn').click()//place order
    cy.get('#orderModalLabel').should('exist')
    cy.get('#name').type('intan')
    cy.wait(3000)
    cy.get('#country').type('Indonesia')
    cy.wait(5000)
    cy.get('#city').type('Jakarta')
    cy.wait(5000)
    cy.get('#card').type('123456789')
    cy.wait(5000)
    cy.get('#month').type('05')
    cy.wait(2000)
    cy.get('#year').type('2025')
    cy.wait(2000)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()//button purchase
    cy.get('.sweet-alert').should('exist')
    cy.get('.lead').should('exist')
    cy.get('.confirm').click()
    cy.get('body').should('exist')
    cy.reload();

  })
})