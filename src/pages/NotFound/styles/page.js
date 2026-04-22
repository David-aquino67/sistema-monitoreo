export const styles = {
	root: {
		minHeight: "100vh",
		display: "grid",
		placeItems: "center",
		px: 2,
		py: 4,
		bgcolor: "background.default",
		backgroundImage: (theme) =>
			theme.palette.mode === "dark"
				? "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(168,85,247,0.16), transparent 35%)"
				: "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.14), transparent 45%), radial-gradient(circle at 80% 0%, rgba(147,51,234,0.12), transparent 35%)",
	},
	paper: {
		width: "min(100%, 680px)",
		borderRadius: 4,
		p: {xs: 3, sm: 4.5},
		border: "1px solid",
		borderColor: "divider",
		background: (theme) =>
			theme.palette.mode === "dark" ? "linear-gradient(160deg, rgba(30,41,59,0.95) 20%, rgba(15,23,42,0.95) 100%)" : "linear-gradient(160deg, rgba(255,255,255,0.95) 20%, rgba(248,250,252,0.95) 100%)",
	},
	header: {
		alignItems: "center",
		textAlign: "center",
	},
	iconWrapper: {
		width: 80,
		height: 80,
		borderRadius: "50%",
		display: "grid",
		placeItems: "center",
		bgcolor: "info.main",
		color: "info.contrastText",
		boxShadow: (theme) => `0 12px 28px ${theme.palette.info.main}40`,
	},
	icon: {
		fontSize: 42,
	},
	titleCode: {
		fontWeight: 700,
	},
	title: {
		fontWeight: 600,
	},
	message: {
		maxWidth: 520,
	},
	actions: {
		direction: {xs: "column", sm: "row"},
		spacing: 1.5,
		justifyContent: "center",
	},
};
