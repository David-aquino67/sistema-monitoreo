import Alert from '@mui/material/Alert';

export const AlertaServidor = ({ servidores }) => {
  return (
    <>
      {servidores === 'warning' && (
        <Alert severity="warning">
          El servidor está experimentando inestabilidad.
        </Alert>
      )}
      {servidores === 'offline' && (
        <Alert severity="error">
          El servidor está fuera de línea.
        </Alert>
      )}
      {servidores === 'maintenance' && (
        <Alert severity="info">
          El servidor está en mantenimiento.
        </Alert>
      )}
    </>
  );
};

export default AlertaServidor;