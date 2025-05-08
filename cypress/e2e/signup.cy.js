describe('signup', () => {
  it('sign up with valid data', () => {
    // akses url https://www.demoblaze.com/index.html
    // pastikan homepage muncul
    // pastika data uder sudah terdaftar
    // Klik tombol sign up
    // isi username
    // isi password 
    // Klik login button
    // pastikan sign up berhasil
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').should('exist')
    cy.get('#signin2').click()
    cy.get('#signInModalLabel').should('exist')
    cy.wait(10000)
    cy.get('#sign-username').type('tesintan@gmail.com')
    cy.wait(1000)
    cy.get('#sign-password').type('password123')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() 
  })



  it('sign up with password null', () => {
    // akses url https://www.demoblaze.com/index.html
    // pastikan homepage muncul
    // pastika data uder sudah terdaftar
    // Klik tombol sign up
    // isi username
    // password kosong 
    // Klik login button
    // pastikan sign up berhasil
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').should('exist')
    cy.get('#signin2').click()
    cy.get('#signInModalLabel').should('exist')
    cy.wait(10000)
    cy.get('#sign-username').type('tesintan@gmail.com')
    cy.wait(1000)
    cy.get('#sign-password').type('')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() 
  })


  it('sign up with username null', () => {
    // akses url https://www.demoblaze.com/index.html
    // pastikan homepage muncul
    // pastika data uder sudah terdaftar
    // Klik tombol sign up
    // isi username
    // isi password 
    // Klik login button
    // pastikan sign up berhasil
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').should('exist')
    cy.get('#signin2').click()
    cy.get('#signInModalLabel').should('exist')
    cy.wait(10000)
    cy.get('#sign-username').type('')
    cy.wait(1000)
    cy.get('#sign-password').type('password123')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() 
  })
})