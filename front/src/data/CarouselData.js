export const data = [
	{
		title: 'Що кажуть наші клієнти',
		description:
		'Наші клієнти із задоволенням користуються нашими послугами вже кілька років. Подивіться реальні відгуки наших клієнтів',
		image: './assets/foto2.jpg',
	},
	{
		title: 'Наша безпека',
		description: 'Безпека наших клієнтів перш за все, ми гарантуємо вам якість та конфіденційність',
		image: './assets/foto3.jpg',
	},
	{
		title: 'Наша команда',
		description: 'Наша команда складається з найкращих фахівців галузі, дізнайтеся про них',
		image: './assets/golovna.jpg',
	},
	{
		title: 'Наш сервіс',
		description: 'Пропонує якісні послуги та швидке встановлення обраних вами пристроїв',
		image: './assets/smart-city.jpg',
	},
	{
		title: 'Наші провідні клієнти',
		description: 'Ми надавали послуги провідним клієнтам у галузі технологій',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
