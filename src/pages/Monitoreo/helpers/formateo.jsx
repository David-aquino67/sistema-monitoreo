import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const fecha = (valor) => {
	if (!valor) return '0d 0h 0m';
	// Formato: día/mes/año hora:min:seg AM/PM
	return dayjs.utc(valor).local().format('DD/MM/YYYY hh:mm:ss A');
};

export const latencia = (ms) => {
	if (ms === undefined || ms === null) return '-- ms';
	return `${ms} ms`;
};

export const horaFormateada = (date) => {
	return date ? dayjs(date).format('HH:mm:ss') : '--:--:--';
};