import RecoverPassword from './views/RecoverPassword.js'
import Registration from './views/Registration.js'
import login from './views/login.js'
import erro from './views/erro.js'

const routers = [
  { path: 404, viwe: erro },
  { path: '/dist/index.html', viwe: Registration },
  { path: '/login', viwe: login },
  { path: '/RecoverPassword', viwe: RecoverPassword }
]

const router = async routers => {
  const paths = location.pathname

  const validPage = routers.find(router => router.path === paths)

  validPage !== undefined ?  await validPage.viwe() :  await routers[0].viwe()
  
  onClickLink(changeHrefOfPage)
}

function onClickLink(callback) {
  
  const links = [...document.querySelectorAll(`a[href]`)]

  const linksOfPage = links.filter(e => e.href.includes(window.location.origin))
  linksOfPage.forEach(e => {
    e.addEventListener('click', e => callback(e))
  })
}

function changeHrefOfPage(element) {
  const hrefOfElement = element.target.href
  if (hrefOfElement) {
    if (hrefOfElement.includes(location.host)) {
      element.preventDefault()
      history.pushState({}, null, hrefOfElement)
      router(routers)
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await router(routers)
})

window.addEventListener('popstate', async () => {
  await router(routers)
})
