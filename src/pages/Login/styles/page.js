export const loginPageStyles = {
	root: {
		minHeight: "100vh",
		display: "grid",
		placeItems: "center",
		px: 2,
		py: 4,
		bgcolor: "background.default",
		backgroundImage: (theme) =>
			theme.palette.mode === "dark"
				? "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.24), transparent 40%), radial-gradient(circle at 90% 0%, rgba(168,85,247,0.2), transparent 36%)"
				: "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.16), transparent 40%), radial-gradient(circle at 90% 0%, rgba(147,51,234,0.12), transparent 36%)",
	},
	paper: {
		width: "min(100%, 520px)",
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
	brandBlock: {
		alignItems: "center",
		justifyContent: "center",
	},
	logoBox: {
		width: 52,
		height: 52,
		display: "grid",
		placeItems: "center",
		borderRadius: "14px",
		border: "1px solid",
		borderColor: "divider",
		bgcolor: "background.paper",
		boxShadow: (theme) => `0 8px 20px ${theme.palette.primary.main}22`,
	},
	logoImage: {
		width: 32,
		height: 32,
		objectFit: "contain",
	},
	brandTitle: {
		display: "block",
		fontWeight: 700,
		fontSize: "0.95rem",
		letterSpacing: "0.06em",
		color: "primary.main",
		lineHeight: 1,
		textAlign: "left",
	},
	systemName: {
		display: "block",
		fontWeight: 500,
		color: "text.secondary",
		maxWidth: 290,
		textAlign: "left",
		lineHeight: 1.4,
	},
	title: {
		fontWeight: 700,
		letterSpacing: "-0.02em",
	},
	subtitle: {
		maxWidth: 420,
	},
	form: {
		display: "grid",
		gap: 2,
	},
	actions: {
		display: "grid",
		gap: 1.5,
		mt: 1,
	},
	forgotPassword: {
		justifySelf: "center",
		fontWeight: 500,
	},
};
