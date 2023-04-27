import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Безпека',
		description: 'Наша система проста у використанні та інтеграції',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Технології',
		description: 'Для покращення життя населення ми ефективно проводимо цифрування різних сфер',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Технічне обслуговування',
		description: 'Наша система працює на новітніх розробках та обслуговуванням займаються професійні фахівці',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Підтримка 24/7',
		description: 'Наша команда завжди доступна, якщо ми вам знадобимося',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Ціна',
		description: 'Ми пропонуємо найдоступніше співвідношення ціна/вартість',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Масштабність',
		description:
			'Наші системи управління розташовані по всьому світу, що покращує масштабованість та швидкість',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
	
	
];
