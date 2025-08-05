import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeNavBar from "../component/HomeNavBar";
import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Chip,
  IconButton,
  Paper,
  Stack,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { green } from "@mui/material/colors";
import CancelIcon from "@mui/icons-material/Cancel";
import AdminNavbar from "../component/AdminNavBar";

const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: green[300],
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,  
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '0.5px',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
});

function    Login() {
  const navigate = useNavigate();
 
  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/admin/add-admin`,{email,password})
        setpassword("");
        setEmail("");
        navigate("/pending-req")
    } catch (err) {
      console.log(
        err.response?.data?.msg,
        "Login function had an issue"
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomeNavBar/>
      <Box
        sx={{
          backgroundImage: `url("/images/image.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            mt: 5,
            backgroundColor: "rgba(255,255,255,0.9)", // light white overlay
            borderRadius: 2,
            p: 4,
          }}
        >
       
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Admin Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    label="Enter your mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Enter your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                    fullWidth
                  />
        
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Paper>
          
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
