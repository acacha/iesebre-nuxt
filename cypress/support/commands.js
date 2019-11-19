/* eslint-disable no-undef */
Cypress.Commands.add('getStore', () => cy.window().its('$nuxt.$store'))

Cypress.Commands.add('login', (email = 'sergiturbadenas@gmail.com', password = '123456') => {
  Cypress.log({
    name: 'Login as: ',
    message: `${email} | ${password}`
  })
  cy.visit('/login')

  // getStore().its('state').should('have.keys', ['loading', 'newTodo', 'todos'])
  // console.log(cy.window().its('$nuxt.$store'))
  // cy.window().its('$nuxt.$store').commit('auth/SET', { key: 'loggedIn', value: true })

  // cy.window().then( window => {
  //   Cypress.log({
  //     name: 'Window: ',
  //     message: window.nuxtApp
  //   })
  //   window.nuxtApp.loginWith('local', {
  //     data: {
  //       user: {
  //         email: 'sergiturbadenas@gmail.com',
  //         password: '123456'
  //       }
  //     }
  //   })
  // })

  cy.window()
    .then(window => {
      window.nuxtApp.$auth.loginWith('local', {
        data: {
          user: {
            email: 'sergiturbadenas@gmail.com',
            password: '123456'
          }
        }
      })
    })

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
