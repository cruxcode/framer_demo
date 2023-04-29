import React from "react";

const IntersectionAnimationFlex = React.forwardRef<
	HTMLDivElement,
	{ children: React.ReactNode[]; styles: React.CSSProperties }
>((props, ref) => {
	return (
		<div ref={ref} style={{ display: "flex", ...props.styles }}>
			{props.children}
		</div>
	);
});

export default IntersectionAnimationFlex;
