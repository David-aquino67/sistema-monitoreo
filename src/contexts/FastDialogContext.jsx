import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { createContext, useContext, useState } from "react";

const FastDialogContext = createContext();

export function FastDialogContextProvider({ children }) {

	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const [onCloseCallback, setOnCloseCallback] = useState(() => () => { });

	function handleClose() {
		setOpen(false);
		onCloseCallback();
	}

	function fastDialog({ title = '', message = '', onClose = () => { } }) {
		setOnCloseCallback(() => onClose);
		setTitle(title);
		setMessage(message);
		setOpen(true);
	}

	return (
		<FastDialogContext.Provider value={{ fastDialog }}>
			{children}
			<Dialog
				open={open}
				onClose={handleClose}
			>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{message}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Entendido</Button>
				</DialogActions>
			</Dialog>
		</FastDialogContext.Provider >
	);

}

export function useFastDialogContext() {
	return useContext(FastDialogContext);
}