import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useContext, useState } from 'react';
import { authContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';

const pages = [
    {label: 'Formulário', href: '/report-form', visible: true}, 
    {label: 'Cadastar Candidato', href: '/candidate-register', visible: true}, 
    {label: 'Apuração', href: '/tally-chart', visible: true}
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const linkStyle = {
  margin: "1.5rem",
  textDecoration: "none",
  color: 'white'
};

export default function HeaderComponent() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { auth } = useContext(authContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/report-form"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ELEICÕES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key={'Formulário'} href={'/report-form'}>
                  <Typography textAlign="center">{'Formulário'}</Typography>
              </MenuItem>
                <MenuItem key={'Cadastar Candidato'} href={'/candidate-register'}>
                    <Typography textAlign="center">{'Cadastar Candidato'}</Typography>
                </MenuItem>
              <MenuItem key={'Apuração'} href={'/tally-chart'}>
                  <Typography textAlign="center">{'Apuração'}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link
                to={'/report-form'}
                style={linkStyle}
              >
                {'Enviar Boletim'}
              </Link>
            {auth.data.admin && (
              <Link
                to={'/candidate-register'}
                style={linkStyle}
              >
                {'Cadastar Candidato'}
              </Link>
            )}
            <Link
                to={'/tally-chart'}
                style={linkStyle}
            >
              {'Apuração'}
            </Link>
            {auth.data.admin && (
              <Link
                  to={'/report-list'}
                  style={linkStyle}
              >
                {'Validar Boletins'}
              </Link>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}