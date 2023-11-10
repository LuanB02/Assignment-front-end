const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.btn_modal')
const iconCloseModal = document.querySelector('.modal-header i')
const buttonCloseModal = document.querySelector('.modal-footer button')

function toggleModal() {
	modal.classList.toggle('hide1')
}

openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})