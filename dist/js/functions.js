export const createElement = function () {
	const element = document.getElementById(this.parentID)
	const elementHTML = document.createElement(this.typeTag)

	this.text === undefined ? this.text = '' : this.text = this.text

	this.Attribute === undefined ? this.Attribute = '' : this.Attribute = this.Attribute
	Object.keys(this.Attribute).map(e => elementHTML.setAttribute(e, this.Attribute[e]))

	elementHTML.append(this.text)
	element.append(elementHTML)
}

export const createElementSVG = function () {
	const element = document.getElementById(this.parentID)
	const elementSVG = document.createElementNS("http://www.w3.org/2000/svg", this.typeTag);
	Object.keys(this.Attribute).map(el => elementSVG.setAttribute(el, this.Attribute[el]))
	element.appendChild(elementSVG)
}



export const creatPageWithSVG = function (ObjectElementPage) {
	if (ObjectElementPage.Elements) creatPage(ObjectElementPage.Elements)

	if (ObjectElementPage.ElementsSVG) createSVG(ObjectElementPage.ElementsSVG)

}



export const creatPage = function (ObjectElementPage) {

	ObjectElementPage.map(Element => {
		createElement.apply(Element)
	})

}

export const createSVG = function (ObjectElementSVG) {
	ObjectElementSVG.map(Element => {
		createElementSVG.apply(Element)
	})
}



export const RemoveElement = function (element, attribute) {
	let a = element.querySelector(`${attribute}`)
	if (a !== null) {
		a.remove()
	}
}



export const reset = function (elementID) {
	let div = document.getElementById(elementID);
	while (div.lastChild) {
		div.removeChild(div.lastChild)
	}
}



export const passwordVisible = function (className, element, thisElement) {
	const visible = thisElement.querySelector('.passwordVisible')
	const notVisible = thisElement.querySelector('.passwordNotVisible')

	element.type === 'password' ? (element.type = 'text') : (element.type = 'password')

	visible.classList.toggle(className)
	notVisible.classList.toggle(className)
}


export const validation = {
	valueNull(valueInput, element, attribute, thisElement) {

		if (valueInput.value === '') {
			RemoveElement(element, attribute)
			createElement.apply(thisElement)
		}

	},
	valueSmall(valueInput, element, typeSelector, thisElement) {

		if (valueInput.value.length < 6 && valueInput.value.length !== 0) {
			RemoveElement(element, typeSelector)
			createElement.apply(thisElement)
		} else if (valueInput.value.length >= 6) {
			RemoveElement(element, typeSelector)
		}
	},

	valueEmail(valueInput, element, typeSelector, thisElement) {

		const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const testMailFormat = mailFormat.test(valueInput.value)

		if (valueInput.value !== '' && testMailFormat === false) {
			RemoveElement(element, typeSelector)
			createElement.apply(thisElement)
		} else if (testMailFormat === true) {
			RemoveElement(element, typeSelector)
		}
	}
}



export const validForm = function (form, attributeErro) {
	const [...erroInputs] = form.getElementsByClassName('containerInput')

	const ErroFilter = erroInputs.filter(value => {
		return value.querySelector(attributeErro)
	})

	if (ErroFilter.length === 0) {
		setTimeout(() => {
			alert('formulario valido')

		})
	}
}



export const newObject = function (text, newText, newID) {
	let { ...element } = text
	element.parentID = newID
	element.text = newText
	return element
}

