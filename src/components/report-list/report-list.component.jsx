import { useContext, useEffect, useState } from 'react';
import { 
    TextField,
    MenuItem,
    Container,
    Box,
    Avatar,
    Typography,
    FormControl,
    Button,
    Autocomplete,
    Alert,
    Grid,
}   
from '@mui/material';
import { authContext } from '../../contexts/authContext';
import { createReport, findAllReports, validateReport } from '../../api/apiReport';
import Card from '@mui/joy/Card';


export default function ReportListComponent() {
    const { auth } = useContext(authContext);
    const [reports, setReports] = useState([]);
    const [callApi, setCallApi] = useState(false);

    const handleValidation = async (id) => {
        const response = await validateReport(id);
        let copyArray = [...reports];
        // copyArray.forEach((report) => {
        //     if(report.id === id) {
        //         report.valido = true;
        //     }
        // });
        // setReports(copyArray); 
        setCallApi(!callApi);
    };

    useEffect(() => {
        const callApiFindAllReports = async () => {
            const response = await findAllReports();
            setReports(response.data);
        }
        try {
            callApiFindAllReports();
        } catch (error) {
            
        }
    }, [auth, callApi]);

    return(
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            {reports.map((report)=> (
                <Box component='form' noValidate>
                    <Card variant="outlined" sx={{ 
                        width: 580,
                        mt: 3,
                        mb: 3
                    }}>
                        <Box sx={{ display: 'flex' }}>
                            <div>
                                <Typography level="body3" fontWeight="bold" sx={{mr: 3}}>Zona</Typography>
                                <Typography fontSize="lg" fontWeight="lg" sx={{mr: 3}}>
                                    {report.zona}
                                </Typography>
                            </div>
                            <div>
                                <Typography level="body3" fontWeight="bold" sx={{mr: 3}}>Seção</Typography>
                                <Typography fontSize="lg" fontWeight="lg" sx={{mr: 3}}>
                                    {report.secao}
                                </Typography>
                            </div>
                            <div>
                                <Typography level="body3" fontWeight="bold" sx={{mr: 3}}>Eleitores Aptos</Typography>
                                <Typography fontSize="lg" fontWeight="lg" sx={{mr: 3}}>
                                    {report.aptos}
                                </Typography>
                            </div>
                            <div>
                                <Typography level="body3" fontWeight="bold" sx={{mr: 3}}>Eleitores Faltosos</Typography>
                                <Typography fontSize="lg" fontWeight="lg" sx={{mr: 3}}>
                                    {report.faltosos}
                                </Typography>
                            </div>
                            <div>
                                <Typography level="body3" fontWeight="bold" sx={{mr: 3}}>Estado</Typography>
                                <Typography fontSize="lg" fontWeight="lg" sx={{mr: 3}}>
                                    {Object.values(Object.assign({}, ...report.votos))[3].siglaUf || 'Não Informado' }
                                </Typography>
                            </div>
                        </Box>
                        <Box sx={{ display: 'flex', mt: 2 }}>
                            {report.votos.map((candidato)=>(
                                <div>
                                    <Typography level="body3" fontWeight="bold" sx={{mr: 3}}>{candidato.candidato.nome}</Typography>
                                    <Typography fontSize="lg" fontWeight="lg" sx={{mr: 3}}>
                                        {candidato.qtd_votos}
                                    </Typography>
                                </div>
                            ))}
                        {report.valido ? (
                            <div>
                            <Typography fontSize="lg" fontWeight="bold" color="green" sx={{mr: 3}}>
                                Validado
                            </Typography>
                        </div>
                        ):(
                        
                        <Button 
                            onClick={()=> handleValidation(report.id)}
                            variant="contained"
                            color="success"
                            sx={{
                                margin: 1.2
                            }}
                        >
                            Validar
                        </Button>
                        )}
                        
                        </Box>
                    </Card>
                </Box>
            ))}
        </Grid>
    );
}