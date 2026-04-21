export const cardStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        minWidth: 275,
        height: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: (theme) => theme.palette.mode === 'dark'
            ? '0 4px 20px rgba(0,0,0,0.5)'
            : '0 2px 12px rgba(0,0,0,0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: (theme) => theme.palette.mode === 'dark'
                ? '0 8px 30px rgba(59, 130, 246, 0.15)'
                : 6,
            borderColor: 'primary.main'
        }
    },
    actions: {
        p: 2,
        pt: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        mt: 'auto'
    },
    progress: {
        mt: 2,
        borderRadius: 1,
        height: 8,
        bgcolor: 'action.hover',
        '& .MuiLinearProgress-bar': {
            borderRadius: 1
        }
    }
};