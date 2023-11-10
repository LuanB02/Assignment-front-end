const eKey = document.querySelector('.element.key p:last-child')
const eLocation = document.querySelector('.element.location p:last-child')
const eWhich = document.querySelector('.element.which p:last-child')
const eCode = document.querySelector('.element.code p:last-child')
const alert = document.querySelector('.alert')
const container = document.querySelector('.container')
const total = document.querySelector('.total')


document.addEventListener('keydown', (e)=> {

	eKey.innerText = e.key
	eLocation.innerHTML = e.location
	eWhich.innerHTML = e.which
	eCode.innerHTML = e.code
	total.innerHTML = e.which


	alert.classList.add('hide')
	container.classList.remove('hide')
})
