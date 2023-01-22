import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../api/api';
import { Alert } from '@mui/material';

const theme = createTheme();

export default function SignUpComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    let history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await createUser(name, email, password);
        if(response.status !== 201) {
            setIsError(true);
        } else {
            setIsSuccess(true);
            const timer = setTimeout(() => {
                history.replace('/login');
            }, 2000);
            return ()=> clearTimeout(timer);
        }
    };

    const handleChangeName = (e) => {
        const { value } = e.target;
        setName(value);
    };

    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleChangePassword = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Name"
                        onChange={handleChangeName}
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={handleChangeEmail}
                        autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={handleChangePassword}
                        autoComplete="new-password"
                        />
                    </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                        Already have an account? Sign in
                        </Link>
                    </Grid>
                    </Grid>
                    {isSuccess && (
                        <Alert sx={{mt: 2}} severity="success">Casdastro realizado com sucesso!</Alert>
                    )}
                    {isError && (
                        <Alert sx={{mt: 2}} severity="error">Dados Inválidos!</Alert>
                    )}
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}