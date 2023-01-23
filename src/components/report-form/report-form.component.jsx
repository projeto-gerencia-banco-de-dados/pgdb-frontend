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
}   
from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { authContext } from '../../contexts/authContext';
import { findAllCandidates, findAllCandidatesByCargo, findAllCandidatesByUf } from '../../api/apiCandidate';
import { createReport } from '../../api/apiReport';


export default function ReportFormComponent() {
    const { auth } = useContext(authContext);
    const [turnOptions, setTurnOpitions] = useState([
        {turn: "1º Turno", value: 1},
        {turn: "2º Turno", value: 2}
    ]);
    const [stateOptions, setStateOpitions] = useState([
        {uf: 'RS'},
        {uf: 'SP'},
    ]);
    const [presidentOptions, setPresidentOpitions] = useState([]);
    const [governorOptions, setGovernorOpitions] = useState([]);

    const [zona, setZona] = useState(0);
    const [secao, setSecao] = useState(0);
    const [aptos, setAptos] = useState(0);
    const [faltosos, setFaltosos] = useState(0);
    const [votosG1, setVotosG1] = useState(0);
    const [votosG2, setVotosG2] = useState(0);
    const [votosP1, setVotosP1] = useState(0);
    const [votosP2, setVotosP2] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);


    const [selectedTurn, setSelectedTurn] = useState({});
    const [selectedState, setSelectedState] = useState(null);
    const [selectedPresident1, setSelectedPresident1] = useState({});
    const [selectedPresident2, setSelectedPresident2] = useState({});
    const [selectedGovernor1, setSelectedGovernor1] = useState({});
    const [selectedGovernor2, setSelectedGovernor2] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await createReport({
            zona,
            secao,
            aptos,
            faltosos
        },
        auth.data,
        [
            {candidato: {id: selectedPresident1.id}, qtd_votos: votosP1},
            {candidato: {id: selectedPresident2.id}, qtd_votos: votosP2},
            {candidato: {id: selectedGovernor1.id}, qtd_votos: votosG1},
            {candidato: {id: selectedGovernor2.id}, qtd_votos: votosG2},
        ]);
        if(response.status === 201) {
            setIsSuccess(true);
        }
    }

    useEffect(() => {
        const callApiFindAllGovernors = async () => {
            const response = await findAllCandidatesByCargo("governador");

            setGovernorOpitions(response.data);
        }
        try {
            callApiFindAllGovernors();
        } catch (error) {
            
        }
    }, [auth]);

    useEffect(() => {
        const callApiFindAllPresidents = async () => {
            const response = await findAllCandidatesByCargo("presidente");

            setPresidentOpitions(response.data);
        }
        try {
            callApiFindAllPresidents();
        } catch (error) {
            
        }
    }, [auth]);

    useEffect(() => {
        const callApiFindAllCandidatesByUf = async () => {
            if(selectedState){
                const response = await findAllCandidatesByUf(selectedState.uf);

                setGovernorOpitions(response.data);
            }
        }
        try {
            callApiFindAllCandidatesByUf();
        } catch (error) {
            
        }
    }, [selectedState]);

    const handleChangeZona = (e) => {
        const { value } = e.target;
        setZona(value);
    };

    const handleChangeSecao = (e) => {
        const { value } = e.target;
        setSecao(value);
    };

    const handleChangeAptos = (e) => {
        const { value } = e.target;
        setAptos(value);
    };

    const handleChangeFaltosos = (e) => {
        const { value } = e.target;
        setFaltosos(value);
    };

    const handleChangeVotosP1 = (e) => {
        const { value } = e.target;
        setVotosP1(value);
    };

    const handleChangeVotosP2 = (e) => {
        const { value } = e.target;
        setVotosP2(value);
    };

    const handleChangeVotosG1 = (e) => {
        const { value } = e.target;
        setVotosG1(value);
    };

    const handleChangeVotosG2 = (e) => {
        const { value } = e.target;
        setVotosG2(value);
    };

    const defaultPropsTurn = {
        options: turnOptions,
        value: selectedTurn,
        getOptionLabel: (option) => {
            return option?.turn || '';
        },
        getOptionSelected: (option) => {
            return option?.turn || '';
        },
        onChange: (event, newValue) => {
            setSelectedTurn(newValue);
        },
    };

    const defaultPropsState = {
        options: stateOptions,
        value: selectedState,
        getOptionLabel: (option) => {
            return option?.uf || '';
        },
        getOptionSelected: (option) => {
            return option?.uf || '';
        },
        onChange: (event, newValue) => {
            setSelectedState(newValue);
        },
    };

    const defaultPropsC1President = {
        options: presidentOptions,
        value: selectedPresident1,
        getOptionLabel: (option) => {
            return option?.nome || '';
        },
        getOptionSelected: (option) => {
            return option?.nome || '';
        },
        onChange: (event, newValue) => {
            setSelectedPresident1(newValue);
        },
    };

    const defaultPropsC2President = {
        options: presidentOptions,
        value: selectedPresident2,
        getOptionLabel: (option) => {
            return option?.nome || '';
        },
        getOptionSelected: (option) => {
            return option?.nome || '';
        },
        onChange: (event, newValue) => {
            setSelectedPresident2(newValue);
        },
    };

    const defaultPropsC1Gov = {
        options: governorOptions,
        value: selectedGovernor1,
        getOptionLabel: (option) => {
            return option?.nome || '';
        },
        getOptionSelected: (option) => {
            return option?.nome || '';
        },
        onChange: (event, newValue) => {
            setSelectedGovernor1(newValue);
        },
    };

    const defaultPropsC2Gov = {
        options: governorOptions,
        value: selectedGovernor2,
        getOptionLabel: (option) => {
            return option?.nome || '';
        },
        getOptionSelected: (option) => {
            return option?.nome || '';
        },
        onChange: (event, newValue) => {
            setSelectedGovernor2(newValue);
        },
    };
    return(
        <Container component="main" maxWidth="xs">
            <Box component="form" onSubmit={handleSubmit}>
                <Box 
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AssignmentIcon />
                    </Avatar>
                    
                    <Typography component="h1" variant="h5" marginBottom={3}>
                        Formulário
                    </Typography>
                </Box>

                <FormControl fullWidth>
                    <Box
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Zona"
                            type="number"
                            onChange={handleChangeZona}
                            variant="outlined"
                        />

                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Seção"
                            type="number"
                            onChange={handleChangeSecao}
                            variant="outlined"
                        />
                    </Box>

                    <Box            
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mt: 1,
                    }}>
                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Eleitores Aptos"
                            type="number"
                            onChange={handleChangeAptos}
                            variant="outlined"
                        />

                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Eleitores Faltosos"
                            type="number"
                            onChange={handleChangeFaltosos}
                            variant="outlined"
                        />
                    </Box>    

                    <Box            
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mt: 1, mb: 2
                    }}>
                        

                        <Autocomplete
                            {...defaultPropsTurn}
                            margin="normal"
                            id="outlined-select-currency"
                            label="Turno"
                            variant="outlined"
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label="Turno"/>
                            )}
                        />  
                    </Box>
                    {selectedTurn?.value === 2 ? 
                        <>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 2, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                            }}>
                                <Typography component="h1" variant="h5" marginBottom={3} fontSize={20}>
                                    Governador
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 2, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                            }}>
                                <Autocomplete
                                    {...defaultPropsState}
                                    margin="normal"
                                    id="outlined-select-currency"
                                    variant="outlined"
                                    renderInput={(params) => (
                                        <TextField {...params} variant="outlined" label="Estado"/>
                                    )}
                                />

                            </Box>
                                
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 2, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                            }}>


                                <Autocomplete
                                    {...defaultPropsC1Gov}
                                    margin="normal"
                                    id="outlined-select-currency"
                                    variant="outlined"
                                    renderInput={(params) => (
                                        <TextField {...params} variant="outlined" label="Candidato 1"/>
                                    )}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    id="outlined-number"
                                    label="Total de Votos"
                                    type="number"
                                    onChange={handleChangeVotosG1}
                                    variant="outlined"
                                />
                            </Box>

                            <Box
                                sx={{
                                    '& > :not(style)': { m: 2, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                            }}>
                                <Autocomplete
                                    {...defaultPropsC2Gov}
                                    margin="normal"
                                    id="outlined-select-currency"
                                    variant="outlined"
                                    renderInput={(params) => (
                                        <TextField {...params} variant="outlined" label="Candidato 2"/>
                                    )}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    id="outlined-number"
                                    label="Total de Votos"
                                    type="number"
                                    onChange={handleChangeVotosG2}
                                    variant="outlined"
                                />
                            </Box>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 2, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                            }}>
                                <Typography component="h1" variant="h5" marginBottom={3} fontSize={20}>
                                    Presidente
                                </Typography>
                            </Box>    

                            <Box
                                sx={{
                                    '& > :not(style)': { m: 2, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                            }}>

                                <Autocomplete
                                    {...defaultPropsC1President}
                                    margin="normal"
                                    id="outlined-select-currency"
                                    variant="outlined"
                                    renderInput={(params) => (
                                        <TextField {...params} variant="outlined" label="Candidato 1"/>
                                    )}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    id="outlined-number"
                                    label="Total de Votos"
                                    type="number"
                                    onChange={handleChangeVotosP1}
                                    variant="outlined"
                                />
                            </Box>
                                <Box
                                    sx={{
                                    '& > :not(style)': { m: 2, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Autocomplete
                                        {...defaultPropsC2President}
                                        margin="normal"
                                        id="outlined-select-currency"
                                        variant="outlined"
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" label="Candidato 2"/>
                                        )}
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        id="outlined-number"
                                        label="Total de Votos"
                                        type="number"
                                        onChange={handleChangeVotosP2}
                                        variant="outlined"
                                    />
                            </Box>
                        </>
                    :selectedTurn?.value === 1? <></>: <></>}
                    
                    <Button 
                        type='submit'
                        variant="contained"
                        color="secondary"
                        sx={{
                            margin: 1
                        }}
                    >
                        Enviar
                    </Button>
                    {isSuccess && (
                        <Alert severity="success">Casdastro realizado com sucesso!</Alert>
                    )}
                </FormControl>
            </Box>           
        </Container>           
    );
}