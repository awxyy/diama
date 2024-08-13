


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

// Задача №1 
// Що потрапить в консоль? (1)

// let someVar = 0;
// ++someVar;

// if (someVar) {
// 	console.log(someVar);
// }

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.
//:
// for(let i=0;i<11;++i){
// 	console.log(`Пункт №${i}`)
// }

// Задача №3
// Що потрапить в консоль ? (нічого)
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// 	console.log('000');
// }

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку 

// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль


// for(let i=0;i<11;++i){
// 	console.log(`Пункт №${i}`)
// }
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// 	console.log('000');
// }

// function back(a=0 ,b=1){
// 	return a/b;
// }
// function show(text="Результат ділення:"){
// 	console.log(text);


// }
// show(back(10,2));
// show(back());

// let array =["lorem",20,"20","10"] ;

// array.forEach(item => {
// 		console.log( item ==+  10? array :"");
	
	
// });


// Задача №1
// Отримати в константу елемент <body>
// const bodythmlexam = document.body;
// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)



// const bodythmlexam = document.body;

// function bodyFunc(a=1) {
//     let template = document.createElement('ul');

// 	for(let i=1;i<=a;++i){
// 		template.innerHTML +='<li>Item</li>'; 
// 	}

//     bodythmlexam.prepend(template);
// }

// bodyFunc(2);
// console.log(bodythmlexam);


// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.
// const examp3 = document.body;

// examp3.classList.toggle('loaded')

// if(examp3.classList.contains('loaded')){
// 	examp3.style.backgroundColor = 'green';
// }

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".


// const examp4items = document.querySelectorAll('.item');


// examp4items.forEach((examp4item,i=0) =>{
// 		examp4item.classList.toggle('active');
// 		examp4item.textContent =`Елемент №${i+1}`;
		
// })

// console.log(examp4items);



// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
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
	
		scrollToBlock(reviews);
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
// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний


// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.
// const examp3 = document.body;

// examp3.classList.toggle('loaded')

// if(examp3.classList.contains('loaded')){
// 	examp3.style.backgroundColor = 'green';
// }