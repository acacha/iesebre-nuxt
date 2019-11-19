const isCypress = process.client && typeof window.Cypress !== 'undefined'
console.log('HEY')
export default (context) => {
  if (isCypress) {
    console.log('IS CYPRESS!!!!!!!!!!')
    window.nuxtApp = context
  }
}
