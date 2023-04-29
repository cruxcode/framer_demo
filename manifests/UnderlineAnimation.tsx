import React, { useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";

const UnderlineAnimation = React.forwardRef<
	HTMLDivElement,
	{
		custom: {
			hoverColor?: string;
			nonHoverColor?: string;
			height?: number;
			duration?: number;
		};
	}
>((props, ref) => {
	const textVariations = {
		mouseleave: { color: props.custom.nonHoverColor || "#000000" },
		mouseenter: {
			color: props.custom.hoverColor || "#c4c4c4",
			transition: { duration: props.custom.duration ?? 2 },
		},
	};
	const underlineVariations = {
		mouseleave: {
			backgroundColor: props.custom.nonHoverColor || "#000000",
			width: "0%",
		},
		mouseenter: {
			backgroundColor: props.custom.hoverColor || "#c4c4c4",
			transition: { duration: props.custom.duration ?? 2 },
			width: "100%",
		},
	};
	const controls = useAnimationControls();
	const onMouseEnter = useCallback((e: React.MouseEvent) => {
		controls.start("mouseenter");
	}, []);
	const onMouseLeave = useCallback((e: React.MouseEvent) => {
		controls.start("mouseleave");
	}, []);
	return (
		<div ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<motion.div
				animate={controls}
				variants={textVariations}
				initial={"mouseleave"}
			>
				Text
			</motion.div>
			<motion.div
				animate={controls}
				variants={underlineVariations}
				initial={"mouseleave"}
				style={{ height: `${props.custom.height}px` ?? "2px" }}
			></motion.div>
		</div>
	);
});

export default UnderlineAnimation;
