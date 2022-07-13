import { reset, creatPageWithSVG, passwordVisible, validForm, validation, RemoveElement, newObject, createElement } from '../functions.js'
import { getPage } from '../firebase.js'


export default async function Registration() {
  const pageRegistration = await getPage('pageRegistration')
  reset('app')

  creatPageWithSVG(pageRegistration)

  const formPage = document.forms.registrationForm
  const inputPassword = document.getElementById('inputPassword')
  const inputConfirmPassword = document.getElementById('inputConfirmPassword')
  const linkLogin = document.getElementById('linkLogin')

  const erroTexts = {
    emailNull: 'E-mail é obrigatório',

    emailUndefined: 'Insira um e-mail válido',

    nameNull: 'Nome é obrigatório',

    nameSmall: 'O nome deve ter no minimo 6 dígitos',

    namebig: 'O nome deve ter no máximo 100 dígitos',

    passwordNull: 'Senha é obrigatório',

    passwordSmall: 'Senha deve ter no mínimo 6 caracteres',

    confirmPasswordNull: 'Confirmação de senha é obrigatório',

    confirmPasswordUndefined: 'Senhas não conferem.'
  }

  formPage.addEventListener('submit', event => {
    event.preventDefault(),
      formValidationRegistration(),
      validForm(formPage, '.erro')
  })

  const containerPasswordVisible = document.getElementById(
    'containerPasswordVisible'
  )

  const containerConfirmPasswordVisible = document.getElementById(
    'containerConfirmPasswordVisible'
  )

  containerPasswordVisible.addEventListener('click', function () {
    passwordVisible('visible', inputPassword, this)
  })

  containerConfirmPasswordVisible.addEventListener('click', function () {
    passwordVisible('visible', inputConfirmPassword, this)
  })

  function formValidationRegistration() {
    const formPage = document.getElementById('form')

    const inputName = formPage.elements.name
    const inputEmail = formPage.elements.email
    const inputPassword = formPage.elements.password
    const inputConfirmPassword = formPage.elements.confirmPassword

    const containerName = formPage.querySelector('#containerName')
    const containerEmail = formPage.querySelector('#containerEmail')
    const containerPassword = formPage.querySelector('#containerPassword')
    const containerConfirmPassword = formPage.querySelector(
      '#containerConfirmPassword'
    )

    const classErro = '.erro'

    const Attribute = { class: 'erro subtitle' }

    const typeDivErro = 'span'

    const erro = {
      parentID: '',
      typeTag: typeDivErro,
      Attribute: Attribute
    }

    validation.valueNull(
      inputEmail,
      containerEmail,
      classErro,
      newObject(erro, erroTexts.emailNull, 'containerEmail')
    )

    validation.valueNull(
      inputName,
      containerName,
      classErro,
      newObject(erro, erroTexts.nameNull, 'containerName')
    )

    validation.valueNull(
      inputPassword,
      containerPassword,
      classErro,
      newObject(erro, erroTexts.passwordNull, 'containerPassword')
    )

    validation.valueSmall(
      inputName,
      containerName,
      classErro,
      newObject(erro, erroTexts.nameSmall, 'containerName')
    )

    validation.valueSmall(
      inputPassword,
      containerPassword,
      classErro,
      newObject(erro, erroTexts.passwordSmall, 'containerPassword')
    )

    validation.valueEmail(
      inputEmail,
      containerEmail,
      classErro,
      newObject(erro, erroTexts.emailUndefined, 'containerEmail')
    )

    if (inputConfirmPassword.value !== inputPassword.value) {
      RemoveElement(containerConfirmPassword, classErro)
      createElement.apply(
        newObject(
          erro,
          erroTexts.confirmPasswordUndefined,
          'containerConfirmPassword'
        )
      )
    } else {
      RemoveElement(containerConfirmPassword, classErro)
    }
  }
}
