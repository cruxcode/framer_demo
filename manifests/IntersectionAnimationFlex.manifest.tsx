import { createComponentManifest } from "@atrilabs/utils";

export default createComponentManifest({
	name: "IntersectionAnimationFlex",
	acceptsChild: "flex",
	custom: {
		initialTop: { type: "number" },
		initialLeft: { type: "number" },
		initialRight: { type: "number" },
		initialBottom: { type: "number" },
		finalTop: { type: "number" },
		finalLeft: { type: "number" },
		finalRight: { type: "number" },
		finalBottom: { type: "number" },
		initialOpacity: { type: "number" },
		finalOpacity: { type: "number" },
		threshold: { type: "number" },
	},
	initalCustomValues: {
		initialTop: 32,
		initialOpacity: 0,
		finalTop: 0,
		finalOpacity: 1,
		threshold: 0.5,
	},
});
