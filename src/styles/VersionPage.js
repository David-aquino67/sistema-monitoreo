export const versionPageStyles = {
	root: {
		display: "grid",
		gap: 2.5,
	},
	header: {
		display: "grid",
		gap: 1,
	},
	title: {
		fontWeight: 700,
		letterSpacing: "-0.02em",
		color: "text.primary",
	},
	subtitle: {
		maxWidth: 900,
	},
	loadingBox: {
		display: "grid",
		placeItems: "center",
		minHeight: "40vh",
		gap: 1.25,
	},
	emptyCard: {
		border: "1px dashed",
		borderColor: "divider",
		borderRadius: 2,
		p: 2,
		bgcolor: "background.paper",
	},
	versionCard: {
		borderRadius: 2.5,
		border: "1px solid",
		borderColor: "divider",
		overflow: "hidden",
	},
	versionMeta: {
		display: "flex",
		alignItems: "center",
		gap: 1,
		flexWrap: "wrap",
	},
	chip: {
		fontWeight: 600,
	},
	changesBox: {
		display: "grid",
		gap: 1.25,
		pt: 0.5,
	},
	changeItem: {
		borderLeft: "3px solid",
		borderColor: "primary.main",
		pl: 1.5,
		py: 0.25,
	},
};
