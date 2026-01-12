import dayjs from 'dayjs';

export const fecha = (valor) => {
    if (!valor) return '0d 0h 0m';
    return valor;
};

export const latencia = (ms) => {
    if (ms === undefined || ms === null) return '-- ms';
    return `${ms} ms`;
};

export const horaFormateada = (date) => {
    return date ? dayjs(date).format('HH:mm:ss') : '--:--:--';
};