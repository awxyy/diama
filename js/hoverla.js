document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu-icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
	if (targetElement.closest('.list-menu__item')) {
		document.documentElement.classList.remove('menu-open');
	}
})

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.pop-tel')) {
		document.documentElement.classList.toggle('open-tel');
	}
})
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.btn-off')) {
		document.documentElement.classList.toggle('open-tel');
	}
})
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.pop-addres')) {
		document.documentElement.classList.toggle('open-addres');
	}
})
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.btn-of')) {
		document.documentElement.classList.toggle('open-addres');
	}
})
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.pop-calendar')) {
		document.documentElement.classList.toggle('open-cal');
	}
})
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.btn-o')) {
		document.documentElement.classList.toggle('open-cal');
	}
})

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.comments__btn')) {
		document.documentElement.classList.toggle('open-com');
	}
})
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.btn-close-form')) {
		document.documentElement.classList.toggle('open-com');
	}
})

const reviews = document.querySelector('.comments')
const contact = document.querySelector('.bottom')
function scrollToBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		block: "start",
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "start",
		behavior: "smooth"
	});
}
const reviewsBtnMenu = document.querySelector('.reviews')
reviewsBtnMenu.addEventListener('click', function () {
    location.href = "http://127.0.0.1:5500#reviews";
})

const contactStyleOff =document.getElementById("contact-style-on")
contactStyleOff.addEventListener('click', function(){
	
	document.documentElement.classList.toggle('opacity-contact');
	if (document.querySelector('.opacity-contact')) {
        document.querySelector('.contact__list').style.opacity = '1';
    }else{
		document.querySelector('.contact__list').style.opacity = '0';
	}
 	
})