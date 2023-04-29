import React, { useEffect, useMemo, useImperativeHandle, useRef } from "react";

const IntersectionAnimationFlex = React.forwardRef<
	HTMLDivElement,
	{ children: React.ReactNode[]; styles: React.CSSProperties }
>((props, ref) => {
	const internalRef = useRef<HTMLDivElement>(null);

	const observer = useMemo(() => {
		return new IntersectionObserver(
			(entries) => {
				console.log(entries);
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// animation start
					}
				});
				console.log("intersection callback called");
			},
			{ threshold: 0.4 }
		);
	}, []);

	useEffect(() => {
		if (internalRef && internalRef.current) {
			observer.observe(internalRef.current);
		}
	}, []);

	// @ts-ignore
	useImperativeHandle(ref, () => {
		return internalRef.current;
	});

	return (
		<div ref={internalRef} style={{ display: "flex", ...props.styles }}>
			{props.children}
		</div>
	);
});

export default IntersectionAnimationFlex;
