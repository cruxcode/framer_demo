import { createComponentManifest } from "@atrilabs/utils";

export default createComponentManifest({
	name: "CustomForm",
	custom: {
		fields: {
			type: "array_typed_map",
			attributes: [
				{
					fieldName: "text",
					type: "map",
					attributes: [
						{ fieldName: "id", type: "text" },
						{ fieldName: "label", type: "text" },
						{ fieldName: "placeholder", type: "text" },
					],
				},
				{
					fieldName: "number",
					type: "map",
					attributes: [
						{ fieldName: "id", type: "text" },
						{ fieldName: "label", type: "text" },
						{ fieldName: "placeholder", type: "text" },
					],
				},
				{
					fieldName: "password",
					type: "map",
					attributes: [
						{ fieldName: "id", type: "text" },
						{ fieldName: "label", type: "text" },
						{ fieldName: "placeholder", type: "text" },
					],
				},
				{
					fieldName: "email",
					type: "map",
					attributes: [
						{ fieldName: "id", type: "text" },
						{ fieldName: "label", type: "text" },
						{ fieldName: "placeholder", type: "text" },
					],
				},
			],
		},
	},
});
