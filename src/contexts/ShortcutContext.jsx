import { createContext, useContext, useEffect } from "react";

const ShortcutContext = createContext();

export function ShortcutContextProvider({ children }) {

	useEffect(() => {

		const handleKeyDown = (e) => {
			// Detectamos Alt + N para nueva pestaña
			if (e.altKey && e.key.toLowerCase() === 'n') {
				e.preventDefault();
				window.open(window.location.href, '_blank');
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<ShortcutContext.Provider value={{}}>
			{children}
		</ShortcutContext.Provider>
	);

}

export function useShortcutContext() {
	return useContext(ShortcutContext);
}