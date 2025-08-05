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

function PendingRequests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/request/pending`);
      setRequests(res.data);
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

  const approve = async (id, status) => {
    try {
      await axios.put(`${process.env.REACT_APP_URL}/request/edit/${id}`, {
        status,
      });
      getRequest();
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

  const disapprove = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/request/delete/${id}`);
      getRequest();
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AdminNavBar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Pending Requests
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
                          onClick={() => approve(request._id, "Approved")}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          startIcon={<CloseIcon />}
                          onClick={() => disapprove(request._id)}
                        >
                          Disapprove
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

export default PendingRequests;
