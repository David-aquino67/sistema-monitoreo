import { Box, CircularProgress, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import { sessionStatusPageStyles } from '@/styles/SessionStatusPage';

export default function SessionStatusPage({ title, subtitle, hint, showProgress = true }) {
	const styles = sessionStatusPageStyles;

	return (
		<Box sx={styles.root}>
			<Paper elevation={8} sx={styles.paper}>
				<Stack spacing={3.5}>
					<Stack spacing={1.5} sx={styles.header}>
						<Box sx={styles.loaderBox}>
							<CircularProgress size={42} thickness={4.5} sx={styles.loader} />
						</Box>

						<Typography variant='h4' component='h1' sx={styles.title}>
							{title}
						</Typography>

						<Typography variant='body1' color='text.secondary' sx={styles.subtitle}>
							{subtitle}
						</Typography>
					</Stack>

					{showProgress && <LinearProgress sx={styles.progress} />}

					{hint && (
						<Box sx={styles.hintBox}>
							<Typography color='text.secondary' sx={styles.hintText}>
								{hint}
							</Typography>
						</Box>
					)}
				</Stack>
			</Paper>
		</Box>
	);
}
