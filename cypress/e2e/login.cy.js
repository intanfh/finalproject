describe('login', () => {
  it('login with valid data', () => {
    // akses url https://www.demoblaze.com/index.html
    // pastikan homepage muncul
    // pastika data uder sudah terdaftar
    // Klik tombol login
    // isi username
    // isi password 
    // Klik login button
    // pastikan login berhasil
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#logInModalLabel').should('exist')
    cy.wait(10000)
    cy.get('#loginusername').type('tesintan@gmail.com')
    cy.wait(10000)
    cy.get('#loginpassword').type('password123')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
  
  it('login with username null', () => {
    // akses url https://www.demoblaze.com/index.html
    // pastikan homepage muncul
    // pastika data uder sudah terdaftar
    // Klik tombol login
    // isi username
    // isi password 
    // Klik login button
    // pastikan login berhasil
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#logInModalLabel').should('exist')
    cy.wait(10000)
    cy.get('#loginusername').type('')
    cy.wait(10000)
    cy.get('#loginpassword').type('password123')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })

  it('login with password null', () => {
    // akses url https://www.demoblaze.com/index.html
    // pastikan homepage muncul
    // pastika data uder sudah terdaftar
    // Klik tombol login
    // isi username
    // isi password 
    // Klik login button
    // pastikan login berhasil
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#logInModalLabel').should('exist')
    cy.wait(10000)
    cy.get('#loginusername').type('tesintan@gmail.com')
    cy.wait(10000)
    cy.get('#loginpassword').type('')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })


})