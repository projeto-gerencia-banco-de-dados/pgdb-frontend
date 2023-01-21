import * as React from 'react';
import { useState } from 'react';
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
import { FormControl } from '@mui/material';

const theme = createTheme();

export default function CandidateRegisterComponent() {
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
    const [selectedRole, setSelectedRole] = useState({});
    const [selectedState, setSelectedState] = useState({});
    const [selectedParty, setSelectedParty] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email : data.get('email'),
            password : data.get('password'),
        });
    };

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
            setSelectedState(newValue);
        },
    };

    return (
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
                    Cadastrar Candidato
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
                        autoComplete="given-name"
                        name="firstName"
                        required
                        sx={{
                            width: '25ch'
                        }}
                        id="firstName"
                        label="Name"
                        autoFocus
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
                        variant="outlined"
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="UF"/>
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
                    />
                </Box>                          
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