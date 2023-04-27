export default function validateForm({ name, email, password, confirmPass }) {
	if (!name.trim()) {
		return 'Логін не вказано';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Електронна пошта відсутня';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Не валідна елктронна пошта';
	}

	return null;
}
