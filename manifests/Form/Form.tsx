import React from "react";

type CommonFormControlOptions = {
	label?: string;
	id?: string;
	placeholder?: string;
};

const Form = React.forwardRef<
	HTMLFormElement,
	{
		className: string;
		id: string;
		styles: React.CSSProperties;
		attrs: { class: string };
		custom: {
			fields: {
				selectedOption:
					| "none"
					| "text"
					| "number"
					| "password"
					| "email";
				text: CommonFormControlOptions;
				password: CommonFormControlOptions;
				email: CommonFormControlOptions;
				number: CommonFormControlOptions;
			}[];
		};
	}
>((props, ref) => {
	return (
		<form
			ref={ref}
			className={`${props.className} ${props.attrs?.class || ""}`}
			id={props.id}
			style={props.styles}
		></form>
	);
});

export default Form;
