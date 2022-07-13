import { reset, creatPageWithSVG, validForm, validation, newObject } from '../functions.js'
import { getPage } from '../firebase.js'

export default async function RecoverPassword() {
	const pageRecoverPassword = await getPage('pageRecoverPassword')

	reset('app')

	creatPageWithSVG(pageRecoverPassword)

	const form = document.forms.recoverPassword

	const erroTexts = {
		emailNull: 'E-mail é obrigatório',
		emailUndefined: 'Insira um e-mail válido'
	}

	form.addEventListener('submit', event => {
		event.preventDefault(), formValidationLogin(), validForm(form, '.erro')
	})

	function formValidationLogin() {
		const formPage = document.forms.recoverPassword

		const inputEmail = formPage.elements.email
		const containerEmail = formPage.querySelector('#containerEmail')

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

		validation.valueEmail(
			inputEmail,
			containerEmail,
			classErro,
			newObject(erro, erroTexts.emailUndefined, 'containerEmail')
		)
	}
}
