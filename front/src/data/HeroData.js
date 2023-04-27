import SignUp from "../pages/SignupPage";


export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Заснований у 2012',
	},
	headline: "Ми розвиваємось у сфері понад 10 років",
	description: 'Ми розробили та впровадили найкращі технології для розвитку і безпеки',
	
	buttonLabel: 'Ми є першою компанією в Україні',
	imgStart: 'start',
	img: './assets/rozvutok.png',
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Проект та розробка',
	},
	headline: 'Найкращий досвід',
	description: 'Наші клієнти отримали якісне обслуговування працюючи з нами',
	buttonLabel: 'Ми гарантуємо високу технологічність!',

	linkTo: '/more',
	imgStart: 'start',
	img: './assets/company.png',
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Марка з високою репутацією',
	},
	headline: 'Чому саме ми? ',
	description:
		'Наш 10-річний досвід дозволив нам використовувати найінноваційніші технології та методики',
	buttonLabel: 'У нас працюють найкращі фахівці',

	linkTo: 'signup',
	imgStart: '',
	img: './assets/chomy.png',
	start: 'true',
};
