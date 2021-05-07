const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const INPUT = document.querySelector(".email");

const validateEmail = (value) => {
	return EMAIL_REGEXP.test(value);
};

const updateInput = () => {
	if (!INPUT.value) {
		alert("Field is Empty");
	} else if (validateEmail(INPUT.value)) {
		alert(`Email ${INPUT.value} is valid`);
	} else {
		alert("Invalid Email ID");
	}
};
