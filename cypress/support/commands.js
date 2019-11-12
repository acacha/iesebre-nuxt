/* eslint-disable no-undef */
Cypress.Commands.add('getStore', () => cy.window().its('$nuxt.$store'))

Cypress.Commands.add('login', (email = 'sergiturbadenas@gmail.com', password = '123456') => {
  Cypress.log({
    name: 'Login as: ',
    message: `${email} | ${password}`
  })

  // getStore().its('state').should('have.keys', ['loading', 'newTodo', 'todos'])
  cy.window().its('app.$store').commit('auth/SET', { key: 'loggedIn', value: true })

  // https://www.cypress.io/blog/2017/11/28/testing-vue-web-application-with-vuex-data-store-and-rest-backend/
  // window.$nuxt.$store.commit('auth/SET',{ key: 'loggedIn', value: true})

  // cy.server()
  // cy.request('/login')
  //   .getCookie('XSRF-TOKEN')
  //   .then((cookie) => {
  //     const csrf = cookie.value
  //     cy.log('Using CSRF TOKEN:' + csrf)
  //     return cy.loginByCSRF(csrf, email, password)
  //   })
})
