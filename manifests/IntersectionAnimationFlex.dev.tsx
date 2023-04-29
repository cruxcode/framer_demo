import IntersectionAnimationFlex from "./IntersectionAnimationFlex";
import React from "react";

const DevIntersectionAnimationFlex: typeof IntersectionAnimationFlex =
	React.forwardRef((props, ref) => {
		const overrideStyles =
			props.children.length === 0
				? {
						height: "100px",
						border: "1px dashed black",
				  }
				: props.styles;
		return (
			<IntersectionAnimationFlex
				ref={ref}
				{...props}
				styles={overrideStyles}
			/>
		);
	});

export default DevIntersectionAnimationFlex;
