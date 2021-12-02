export const IsAuthenticated = () => {
  return localStorage.getItem('login') ? localStorage.getItem('login') : false
}
