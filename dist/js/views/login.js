import { reset, creatPageWithSVG, passwordVisible, validForm, validation } from '../functions.js'
import { getPage } from '../firebase.js'

export default async function login() {
	const pageLogin = await getPage('pageLogin')
	reset('app')

	creatPageWithSVG(pageLogin)

	const form = document.forms.loginForm
	const email = form.elements.email
	const password = form.elements.password
	const button = document.getElementById('buttonInput')
	const containerPasswordVisible = document.getElementById(
		'containerPasswordVisible'
	)
	const erroTexts = {
		emailUndefined: 'Insira um e-mail válido'
	}

	containerPasswordVisible.addEventListener('click', function () {
		passwordVisible('visible', password, this)
	})

	form.addEventListener('submit', event => {
		event.preventDefault(), formValidationLogin(), validForm(form, '.erro')
	})

	form.addEventListener('input', () => {
		email.value.length > 0 && password.value.length >= 6
			? button.removeAttribute('disabled')
			: button.setAttribute('disabled', '')
	})

	function formValidationLogin() {
		const formPage = document.forms.loginForm
		const inputEmail = formPage.elements.email
		const containerEmail = formPage.querySelector('#containerEmail')

		const classErro = '.erro'
		const Attribute = { class: 'erro subtitle' }
		const typeDivErro = 'span'

		const erro = {
			parentID: 'containerEmail',
			text: erroTexts.emailUndefined,
			typeTag: typeDivErro,
			Attribute: Attribute
		}

		validation.valueEmail(inputEmail, containerEmail, classErro, erro)
	}
}
