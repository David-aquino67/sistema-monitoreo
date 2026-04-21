export const SeccionResumenStyle = {
    gridpadre: {
        mb: 4,
        width: '100%',
        margin: 0,
        padding: { xs: 1, sm: 2 },
        bgcolor: (theme) => theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.02)'
            : 'transparent',
        borderRadius: 2,
        transition: 'background-color 0.3s ease'
    }
};