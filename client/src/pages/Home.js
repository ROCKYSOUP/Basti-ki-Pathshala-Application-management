import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeNavbar from "../component/HomeNavBar";
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


function Home() {
  const navigate = useNavigate();
  const [apply, setApply] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [resume, setResume] = useState(null);

  const handleApply = () => {
    setApply(true);
  };

  const handleSkill = () => {
    if (skill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, skill.trim()]);
      setSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills((prevSkills) => prevSkills.filter((sk) => sk !== skillToRemove));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    skills.forEach((s) => formData.append("skills", s)); // ✅ correct way
    formData.append("file", resume);

    const res = await axios.post(
      `${process.env.REACT_APP_URL}/request/add`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert("Application Submitted");
    setApply(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSkills([]);
    setResume(null);
  } catch (err) {
    console.log(
      err.response?.data?.msg,
      "handleSubmit function had an issue"
    );
  }
};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomeNavbar />
      <Box
        sx={{
          backgroundImage: `url("/images/image.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh", // Make it fill the screen
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
          {!apply ? (
            <Box textAlign="center">
              <Typography variant="h4" gutterBottom>
                Welcome to Basti ki Pathshala Foundation
              </Typography>
              <Button variant="contained" color="primary" onClick={handleApply}>
                Apply for Volunteer/Internship
              </Button>
            </Box>
          ) : (
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Application Form
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    fullWidth
                  />
                  <Button variant="outlined" onClick={handleSkill}>
                    Add Skill
                  </Button>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {skills.map((ski, index) => (
                      <Chip
                        key={index}
                        label={ski}
                        onDelete={() => removeSkill(ski)}
                        deleteIcon={<CancelIcon />}
                        color="primary"
                      />
                    ))}
                  </Stack>
                  <Typography>Upload your Resume in PDF format</Typography>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                    required
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Paper>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
