import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminNavBar from "../component/AdminNavBar";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Button,
  Container,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

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
      fontSize: "2rem",
      letterSpacing: "0.5px",
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

function In_touchRequests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/request/in-touch`);
      setRequests(res.data);
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

 const sendMail = (email) => {
  const subject = encodeURIComponent("Regarding your application");
  const body = encodeURIComponent("Hi,\n\nWe reviewed your request and will contact you shortly.\n\nThanks!");

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

 

  return (
    <ThemeProvider theme={theme}>
      <AdminNavBar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Applicants In-touch
        </Typography>

        {requests.length === 0 ? (
          <Typography variant="h6" align="center">
            No request right now
          </Typography>
        ) : (
          <Paper elevation={3}>
            <List>
              {requests.map((request, index) => (
                <Box key={request._id}>
                  <ListItem alignItems="flex-start">
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        <PersonIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                        {request.firstName} {request.lastName}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <EmailIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                        {request.email}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Skills:</strong>{" "}
                        {request.skills && request.skills.join(", ")}
                      </Typography>

                      <Typography variant="body1">
                        <DescriptionIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                        <a
                          href={request.resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resume
                        </a>
                      </Typography>

                      <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<CheckIcon />}
                          onClick={()=>sendMail(request.email)}
                        >
                          Send Mail
                        </Button>
                        <Button
                          variant="outlined"
                          color="yellow"
                          
                        >
                          In-Touch
                        </Button>
                      </Box>
                    </Box>
                  </ListItem>
                  {index < requests.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default In_touchRequests;
