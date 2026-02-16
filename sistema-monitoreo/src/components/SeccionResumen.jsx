import { Grid} from '@mui/material';
import ResumenServidores from '@components/ResumenServidores/ResumenServidores.jsx';
import StatusResume from '@components/StatusResume/StatusResume.jsx';
import {GridPadre,
    GridResumenServidores,
    GridPadreStatusResumen,
    GridHijoStatusResumen,
    GridStatusResume} from '@const/SeccionResumen.jsx'
import {SeccionResumenStyle} from '@styles/SeccionResumen.jsx'
import {calcularResumenServidores} from "@/const/ConstSeccionResumen.jsx";

export const SeccionResumen = ({ servidores = [] }) => {
    const conteo = calcularResumenServidores(servidores);
    return (
        <Grid {...GridPadre} sx={ SeccionResumenStyle.gridpadre }>
            <Grid size={GridResumenServidores}>
                <ResumenServidores total={conteo.total} />
            </Grid>
            <Grid size={GridPadreStatusResumen}>
                <Grid {...GridHijoStatusResumen}>
                    <Grid size={GridStatusResume}>
                        <StatusResume quantity={conteo.online} status="online" />
                    </Grid>
                    <Grid size={GridStatusResume}>
                        <StatusResume quantity={conteo.warning} status="warning" />
                    </Grid>
                    <Grid size={GridStatusResume}>
                        <StatusResume quantity={conteo.maintenance} status="maintenance" />
                    </Grid>
                    <Grid size={GridStatusResume}>
                        <StatusResume quantity={conteo.offline} status="offline" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
