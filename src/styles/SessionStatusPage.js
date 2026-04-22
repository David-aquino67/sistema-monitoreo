export const sessionStatusPageStyles = {
	root: {
		minHeight: "100vh",
		display: "grid",
		placeItems: "center",
		px: 2,
		py: 4,
		bgcolor: "background.default",
		backgroundImage: (theme) =>
			theme.palette.mode === "dark"
				? "radial-gradient(circle at 14% 16%, rgba(56,189,248,0.2), transparent 44%), radial-gradient(circle at 86% 0%, rgba(74,222,128,0.14), transparent 36%)"
				: "radial-gradient(circle at 14% 16%, rgba(14,165,233,0.14), transparent 44%), radial-gradient(circle at 86% 0%, rgba(34,197,94,0.1), transparent 36%)",
	},
	paper: {
		width: "min(100%, 620px)",
		borderRadius: 4,
		p: {xs: 3, sm: 4.5},
		border: "1px solid",
		borderColor: "divider",
		background: (theme) =>
			theme.palette.mode === "dark" ? "linear-gradient(165deg, rgba(30,41,59,0.96) 0%, rgba(15,23,42,0.96) 100%)" : "linear-gradient(165deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.96) 100%)",
	},
	header: {
		alignItems: "center",
		textAlign: "center",
	},
	loaderBox: {
		width: 84,
		height: 84,
		borderRadius: "50%",
		display: "grid",
		placeItems: "center",
		border: "1px solid",
		borderColor: "divider",
		bgcolor: "background.paper",
		boxShadow: (theme) => `0 10px 24px ${theme.palette.info.main}26`,
	},
	loader: {
		color: "info.main",
	},
	title: {
		fontWeight: 700,
		letterSpacing: "-0.02em",
	},
	subtitle: {
		maxWidth: 500,
	},
	progress: {
		height: 8,
		borderRadius: 999,
		bgcolor: "action.hover",
	},
	hintBox: {
		border: "1px dashed",
		borderColor: "divider",
		borderRadius: 2,
		px: 2,
		py: 1.5,
		bgcolor: "action.hover",
	},
	hintText: {
		fontSize: "0.9rem",
		lineHeight: 1.5,
	},
};
