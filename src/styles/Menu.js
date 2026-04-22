export const menuStyles = {
	appBar: {
		borderBottom: "1px solid",
		borderColor: "divider",
		backgroundColor: "background.paper",
		color: "text.primary",
		boxShadow: "none",
	},
	toolbar: {
		minHeight: 68,
		display: "flex",
		justifyContent: "space-between",
		gap: 2,
		px: {xs: 1.5, sm: 3},
	},
	brand: {
		display: "flex",
		alignItems: "center",
		gap: 1,
		minWidth: 0,
	},
	logo: {
		width: 30,
		height: 30,
		objectFit: "contain",
	},
	brandText: {
		fontWeight: 700,
		letterSpacing: "-0.01em",
		whiteSpace: "nowrap",
	},
	navSection: {
		display: "flex",
		alignItems: "center",
		gap: 1,
	},
	nav: {
		display: "flex",
		alignItems: "center",
		gap: 1,
		flexWrap: {xs: "wrap", sm: "nowrap"},
		justifyContent: "flex-end",
	},
	navButton: {
		color: "text.primary",
		textTransform: "none",
		fontWeight: 600,
		borderRadius: 2,
		px: {xs: 1, sm: 1.5},
	},
	themeButton: {
		border: "1px solid",
		borderColor: "divider",
		borderRadius: 2,
		color: "text.secondary",
		"&:hover": {
			bgcolor: "action.hover",
		},
	},
};
