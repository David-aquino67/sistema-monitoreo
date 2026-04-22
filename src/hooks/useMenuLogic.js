import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useThemeContext} from "@/contexts/ThemeContext";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

export function useMenuLogic() {
	const navigate = useNavigate();
	const location = useLocation();
	const {isDarkMode, toggleTheme} = useThemeContext();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerToggle = () => setDrawerOpen((open) => !open);
	const handleNavClick = (path) => {
		setDrawerOpen(false);
		navigate(path);
	};

	return {
		navigate,
		location,
		isDarkMode,
		toggleTheme,
		isMobile,
		drawerOpen,
		setDrawerOpen,
		handleDrawerToggle,
		handleNavClick,
	};
}
