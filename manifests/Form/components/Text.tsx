import { CommonFormControlOptions } from "../types";

export const Text = (props?: CommonFormControlOptions & { key: string }) => {
	return (
		<div>
			<label htmlFor={props?.id}>{props?.label}</label>
			<input {...props} key={props?.key} name={props?.id} type="text" />
		</div>
	);
};
