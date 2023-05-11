import React from "react";
import { CommonFormControlOptions } from "./types";
import { Text } from "./components/Text";

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
		>
			{/** Add different types of input widgets */}
			{props.custom.fields.map((field, index) => {
				if (field.selectedOption === "text") {
					return <Text {...field.text} key={`${props.id}${index}`} />;
				}
				return <div></div>;
			})}
		</form>
	);
});

export default Form;
