import Alert from '@mui/material/Alert';

export const AlertaServidor = ({ servidores }) => {
  return (
    <>
      {servidores === 'warning' && (
        <Alert severity="warning" sx={{marginBottom:1}}>
          El servidor está experimentando inestabilidad.
        </Alert>
      )}
      {servidores === 'offline' && (
        <Alert severity="error" sx={{marginBottom:1}}>
          El servidor está fuera de línea.
        </Alert>
      )}
      {servidores === 'maintenance' && (
        <Alert severity="info" sx={{marginBottom:1}}>
          El servidor está en mantenimiento.
        </Alert>
      )}
    </>
  );
};

export default AlertaServidor;