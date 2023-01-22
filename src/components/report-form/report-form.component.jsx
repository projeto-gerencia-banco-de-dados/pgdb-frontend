import { useContext, useState } from 'react';
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
}   
from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { authContext } from '../../contexts/authContext';


export default function ReportFormComponent() {
    const { auth } = useContext(authContext);
    console.log(auth);
    const [turnOptions, setTurnOpitions] = useState([
        {turn: "1º Turno", value: 1},
        {turn: "2º Turno", value: 2}
    ]);
    const [stateOptions, setStateOpitions] = useState([
        {name: "Rio Grande do Sul", uf: 'RS'},
        {name: "São Paulo", uf: 'SP'},
    ]);
    const [presidentOptions, setPresidentOpitions] = useState([
        {name: "Lula", id: 1},
        {name: "Bolsonaro", id: 2},
    ]);

    const [governorOptions, setGovernorOpitions] = useState([
        {name: "Eduardo Leite", id: 1},
        {name: "Onyx Lorenzoni", id: 2},
    ]);
    const [selectedTurn, setSelectedTurn] = useState({});
    const [selectedState, setSelectedState] = useState({});
    const [selectedPresident1, setSelectedPresident1] = useState({});
    const [selectedPresident2, setSelectedPresident2] = useState({});
    const [selectedGovernor1, setSelectedGovernor1] = useState({});
    const [selectedGovernor2, setSelectedGovernor2] = useState({});

    const defaultPropsTurn = {
        options: turnOptions,
        value: selectedTurn,
        getOptionLabel: (option) => {
            return option.turn || '';
        },
        getOptionSelected: (option) => {
            return option.turn || '';
        },
        onChange: (event, newValue) => {
            setSelectedTurn(newValue);
        },
    };

    const defaultPropsState = {
        options: stateOptions,
        value: selectedState,
        getOptionLabel: (option) => {
            return option.name || '';
        },
        getOptionSelected: (option) => {
            return option.name || '';
        },
        onChange: (event, newValue) => {
            setSelectedState(newValue);
        },
    };

    const defaultPropsC1President = {
        options: presidentOptions,
        value: selectedPresident1,
        getOptionLabel: (option) => {
            return option.name || '';
        },
        getOptionSelected: (option) => {
            return option.name || '';
        },
        onChange: (event, newValue) => {
            setSelectedPresident1(newValue);
        },
    };

    const defaultPropsC2President = {
        options: presidentOptions,
        value: selectedPresident2,
        getOptionLabel: (option) => {
            return option.name || '';
        },
        getOptionSelected: (option) => {
            return option.name || '';
        },
        onChange: (event, newValue) => {
            setSelectedPresident2(newValue);
        },
    };

    const defaultPropsC1Gov = {
        options: governorOptions,
        value: selectedGovernor1,
        getOptionLabel: (option) => {
            return option.name || '';
        },
        getOptionSelected: (option) => {
            return option.name || '';
        },
        onChange: (event, newValue) => {
            setSelectedGovernor1(newValue);
        },
    };

    const defaultPropsC2Gov = {
        options: governorOptions,
        value: selectedGovernor2,
        getOptionLabel: (option) => {
            return option.name || '';
        },
        getOptionSelected: (option) => {
            return option.name || '';
        },
        onChange: (event, newValue) => {
            setSelectedGovernor2(newValue);
        },
    };
    return(
        <Container component="main" maxWidth="xs">
            <Box>
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
                    component="form"  
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
                            variant="outlined"
                        />

                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Seção"
                            type="number"
                            variant="outlined"
                        />
                    </Box>

                    <Box            
                    component="form"     
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
                            variant="outlined"
                        />

                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Eleitores Faltosos"
                            type="number"
                            variant="outlined"
                        />
                    </Box>    

                    <Box            
                    component="form"     
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
                                component="form"
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
                                component="form"
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
                                component="form"
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
                                    variant="outlined"
                                />
                            </Box>

                            <Box
                                component="form"
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
                                    variant="outlined"
                                />
                            </Box>
                            <Box
                                component="form"
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
                                component="form"
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
                                    variant="outlined"
                                />
                            </Box>
                                <Box
                                    component="form"
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
                                        variant="outlined"
                                    />
                            </Box>
                        </>
                    :selectedTurn?.value === 1? <></>: <></>}
                    
                    <Button 
                        variant="contained"
                        color="secondary"
                        sx={{
                            margin: 4
                        }}
                    >
                        Enviar
                    </Button>
                </FormControl>
            </Box>           
        </Container>           
    );
}