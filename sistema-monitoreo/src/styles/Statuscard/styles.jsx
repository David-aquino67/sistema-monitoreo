export const cardStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        minWidth: 275,
        boxShadow: 3,
        borderRadius: 2,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' }
    },
    actions: {
        p: 2,
        pt: 0,
        gap: 1
    },
    progress: {
        mt: 2
    }
};