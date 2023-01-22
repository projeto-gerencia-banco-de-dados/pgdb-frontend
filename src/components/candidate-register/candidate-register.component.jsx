import { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles';
import { Autocomplete } from '@material-ui/lab';
import { Alert, FormControl } from '@mui/material';
import { authContext } from '../../contexts/authContext';
import { createCandidate } from '../../api/apiCandidate';

export default function CandidateRegisterComponent() {
    const { auth } = useContext(authContext);
    const [roleOptions, setRoleOptions] = useState([
        { role: 'Presidente'},
        { role: 'Governador'}
    ]);
    const [stateOptions, setStateOpitions] = useState([
        {uf: 'RS'},
        {uf: 'SP'},
    ]);
    const [partyOptions, setPartyOptions] = useState([
        { sigla: 'PT', id: 1},
        { sigla: 'PL', id: 2}
    ]);

    const [nome, setNome] = useState('');
    const [numCand, setNumCand] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedRole, setSelectedRole] = useState({});
    const [selectedState, setSelectedState] = useState({});
    const [selectedParty, setSelectedParty] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await createCandidate(
            nome, 
            selectedRole.role.toUpperCase(), 
            selectedState?.uf ? selectedState.uf : null, 
            selectedParty, 
            numCand);
        if(response.status !== 201) {
            setIsError(true);
        } else {
            setIsSuccess(true);
        }
    };

    const handleChangeNome = (e) => {
        const { value } = e.target;
        setNome(value);
    };

    const handleChangeNumCand = (e) => {
        const { value } = e.target;
        setNumCand(value);
    }

    const defaultPropsRole = {
        options: roleOptions,
        value: selectedRole,
        getOptionLabel: (option) => {
            return option.role || '';
        },
        getOptionSelected: (option) => {
            return option.role || '';
        },
        onChange: (event, newValue) => {
            setSelectedRole(newValue);
        },
    };

    const defaultPropsState = {
        options: stateOptions,
        value: selectedState,
        getOptionLabel: (option) => {
            return option.uf || '';
        },
        getOptionSelected: (option) => {
            return option.uf || '';
        },
        onChange: (event, newValue) => {
            console.log(newValue);
            setSelectedState(newValue);
        },
    };

    const defaultPropsParty = {
        options: partyOptions,
        value: selectedParty,
        getOptionLabel: (option) => {
            return option.sigla || '';
        },
        getOptionSelected: (option) => {
            return option.sigla || '';
        },
        onChange: (event, newValue) => {
            setSelectedParty(newValue);
        },
    };

    return (
        <Container component="main" maxWidth="xs">
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                    Cadastrar Candidato
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
                        autoComplete="given-name"
                        name="firstName"
                        required
                        sx={{
                            width: '25ch'
                        }}
                        id="firstName"
                        label="Nome"
                        onChange={handleChangeNome}
                        autoFocus
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
                    <Autocomplete
                        {...defaultPropsRole}
                        margin="normal"
                        id="outlined-select-currency"
                        variant="outlined"
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Cargo"/>
                        )}
                    />
                    <Autocomplete
                        {...defaultPropsState}
                        margin="normal"
                        id="outlined-select-currency"
                        disabled={selectedRole?.role !== 'Governador' ? true: false}
                        variant="outlined"
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="UF"/>
                        )}
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
                    <Autocomplete
                        {...defaultPropsParty}
                        margin="normal"
                        id="outlined-select-currency"
                        variant="outlined"
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Partido"/>
                        )}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="outlined-number"
                        label="Número Candidato"
                        type="number"
                        variant="outlined"
                        onChange={handleChangeNumCand}
                    />
                </Box>                          
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
                    <Alert sx={{mt: 2}} severity="success">Casdastro realizado com sucesso!</Alert>
                )}
                {isError && (
                    <Alert sx={{mt: 2}} severity="error">Dados Inválidos!</Alert>
                )}
            </FormControl>
        </Box>           
    </Container>
    );
}