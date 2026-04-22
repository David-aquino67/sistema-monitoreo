import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { createContext, useContext, useState } from "react";

const ExtensibleDialogContext = createContext();

export function ExtensibleDialogContextProvider({ children }) {

	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [onCloseCallback, setOnCloseCallback] = useState(() => () => { });

	function handleClose() {
		setOpen(false);
		onCloseCallback();
	}

	function extensibleDialog({ title = '', content = <></>, onClose = () => { } }) {
		setOnCloseCallback(() => onClose);
		setTitle(title);
		setContent(content);
		setOpen(true);
	}

	return (
		<ExtensibleDialogContext.Provider value={{ extensibleDialog }}>
			{children}
			<Dialog
				open={open}
				onClose={handleClose}
			>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					{content}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Entendido</Button>
				</DialogActions>
			</Dialog>
		</ExtensibleDialogContext.Provider >
	);

}

export function useExtensibleDialogContext() {
	return useContext(ExtensibleDialogContext);
}