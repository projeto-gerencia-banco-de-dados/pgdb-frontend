import * as React from 'react';
import { useState } from 'react';
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


export default function ReportFormComponent() {
    const [turnOptions, setTurnOpitions] = useState([
        {turn: "1º Turno", value: 1},
        {turn: "2º Turno", value: 2}
    ]);
    const [stateOptions, setStateOpitions] = useState([
        {name: "Rio Grande do Sul", uf: 'RS'},
        {name: "São Paulo", uf: 'SP'},
    ]);
    const [selectedTurn, setSelectedTurn] = useState(null);
    const [isFirstTurn, setIsFirstTurn] = useState(false);

    const defaultPropsTurn = {
        options: turnOptions,
        value: selectedTurn,
        getOptionLabel: (option) => {
            return option && option.turn;
        },
        getOptionSelected: (option) => {
            return option && option.turn;
        },
        onChange: (event, newValue) => {
            setSelectedTurn(newValue);
        },
    };

    const defaultPropsState = {
        options: stateOptions,
        // value: selectedState,
        getOptionLabel: (option) => {
            return option && option.name;
        },
        getOptionSelected: (option) => {
            return option && option.name;
        },
        onChange: (event, newValue) => {
            setSelectedTurn(newValue);
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
                            required
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
                                    required
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


                                <TextField
                                    margin="normal"
                                    required
                                    id="outlined-select-currency"
                                    select
                                    label="Candidato1"
                                    variant="outlined"
                                >
                                    <MenuItem
                                        value="candidato1"
                                    >
                                        Candidato1
                                    </MenuItem>
                                </TextField>

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
                                <TextField
                                    margin="normal"
                                    required
                                    id="outlined-select-currency"
                                    select
                                    label="Candidato2"
                                    variant="outlined"
                                >
                                    <MenuItem
                                        value="candidato2"
                                    >
                                        Candidato1
                                    </MenuItem>
                                </TextField>

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

                                <TextField
                                    margin="normal"
                                    required
                                    id="outlined-select-currency"
                                    select
                                    label="Candidato 1"
                                    variant="outlined"
                                >
                                    <MenuItem
                                        value="candidato1"
                                    >
                                        Candidato1
                                    </MenuItem>
                                </TextField>

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


                                <TextField
                                    margin="normal"
                                    required
                                    id="outlined-select-currency"
                                    select
                                    label="Candidato 2"
                                    variant="outlined"
                                >
                                    <MenuItem
                                        value="candidato 2"
                                    >
                                        Candidato1
                                    </MenuItem>
                                </TextField>

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