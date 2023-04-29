import React, { useEffect, useMemo, useImperativeHandle, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const IntersectionAnimationFlex = React.forwardRef<
	HTMLDivElement,
	{ children: React.ReactNode[]; styles: React.CSSProperties }
>((props, ref) => {
	const internalRef = useRef<HTMLDivElement>(null);

	// animation
	const controls = useAnimationControls();
	const variations = {
		initial: { opacity: 0, top: 32 },
		inView: { opacity: 1, top: 0 },
	};

	const observer = useMemo(() => {
		return new IntersectionObserver(
			(entries) => {
				console.log(entries);
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// animation start
						controls.start("inView");
					}
				});
			},
			{ threshold: 0.4 }
		);
	}, [controls]);

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
		<motion.div
			ref={internalRef}
			style={{ ...props.styles, display: "flex", position: "relative" }}
			variants={variations}
			initial="initial"
			animate={controls}
		>
			{props.children}
		</motion.div>
	);
});

export default IntersectionAnimationFlex;
