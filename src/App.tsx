import './App.css';
import Demo from './Demo';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
// import { BrowserRouter as Router } from 'react-router-dom';

// Define your custom theme
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: '#196FF0', // Main primary color
    },
    common: {
      black: '#000', // Replacing the default black color
      white: '#FFF', // Replacing the default white color
    },
    background: {
      default: '#F7F7F7', // Default background color
      paper: '#3D3D3D', // Paper/background color for components
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Demo />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
