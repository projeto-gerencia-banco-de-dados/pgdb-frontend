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
}   
from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';


const FormUrna = () =>{

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
                            label="Código da Urna"
                            type="number"
                            variant="outlined"
                        />

                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Zona"
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
                            label="Seção"
                            type="number"
                            variant="outlined"
                        />

                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Eleitores Aptos"
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
                        <TextField
                            margin="normal"
                            required
                            id="outlined-number"
                            label="Eleitores Faltosos"
                            type="number"
                            variant="outlined"
                        />

                        <TextField
                            margin="normal"
                            required
                            id="outlined-select-currency"
                            select
                            label="Governador"
                            variant="outlined"
                        >
                            <MenuItem    
                                value="1"
                            >
                                Governador
                            </MenuItem >
                        </TextField>
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
                                label="Estado"
                                variant="outlined"
                            >
                                <MenuItem
                                    value="estado"
                                >
                                    Estado1
                                </MenuItem>
                            </TextField>

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
                                <TextField
                                    margin="normal"
                                    required
                                    id="outlined-select-currency"
                                    select
                                    label="Presidente"
                                    variant="outlined"
                                >
                                    <MenuItem
                                        value="estado"
                                    >
                                        Presidente
                                    </MenuItem>
                                </TextField>

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
                            <Button 
                                variant="contained"
                                color="secondary"
                            >
                                Enviar
                            </Button>
                </FormControl>
            </Box>           
        </Container>           
    );
}

export default FormUrna;