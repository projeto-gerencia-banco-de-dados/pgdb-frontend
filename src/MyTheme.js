import { createTheme } from '@material-ui/core/styles';

export default createTheme({
    palette: {
        primary: {
            light: '#f2f2f2',
            main: 'rgb(215, 59, 48)',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fff350',
            main: '#616161',
            dark: '#ff5722',
            contrastText: '#212121',
        },
        success: {
            light: '#fff350',
            main: 'rgb(48, 209, 88)',
            dark: '#ff5722',
            contrastText: '#212121',
        },
    },
    typography: {
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
});