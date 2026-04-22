import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import App from '@/App.jsx'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;
const forceTLS = import.meta.env.VITE_REVERB_FORCE_TLS === "true";
window.Echo = new Echo({
	broadcaster: 'reverb',
	key: import.meta.env.VITE_REVERB_APP_KEY,
	wsHost: import.meta.env.VITE_REVERB_HOST,
	wsPort: forceTLS ? undefined : import.meta.env.VITE_REVERB_PORT,
	wssPort: forceTLS ? import.meta.env.VITE_REVERB_PORT : undefined,
	forceTLS,
	enabledTransports: ['ws', 'wss'],
	disableStats: true,
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
