import { createComponentManifest } from "@atrilabs/utils";

export default createComponentManifest({
	name: "UnderlineAnimation",
	custom: {
		hoverColor: { type: "color" },
		nonHoverColor: { type: "color" },
		height: { type: "number" },
		duration: { type: "number" },
	},
});
