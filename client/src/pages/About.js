import React from "react";
import HomeNavbar from "../component/HomeNavBar";
import {
  Container,
  Typography,
  Box,
  Paper,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Divider,
} from "@mui/material";
import { green } from "@mui/material/colors";

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
function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomeNavbar />
      <Box
        sx={{
          backgroundImage: `url("/images/image.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          py: 5,
        }}
      >
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4, bgcolor: "rgba(255, 255, 255, 0.95)" }}>
            <Typography variant="h4" color="primary" gutterBottom>
              About Basti Ki Pathshala Foundation
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Typography variant="body1" paragraph>
              Basti Ki Pathshala Foundation is a grassroots initiative aimed at empowering
              underprivileged children through education and community engagement. We believe
              that access to education is a fundamental right and are committed to bridging
              the gap for those who need it the most.
            </Typography>
            <Typography variant="body1" paragraph>
              Our volunteers work in local communities to set up informal learning spaces,
              offer mentorship, provide essential learning resources, and create a safe,
              nurturing environment for children to grow.
            </Typography>
            <Typography variant="body1" paragraph>
              We welcome students, educators, professionals, and anyone passionate about
              social change to join us as a volunteer or intern.
            </Typography>
            <Typography variant="h6" sx={{ mt: 4 }} color="primary">
              Mission
            </Typography>
            <Typography variant="body2" paragraph>
              To build a more equitable society by providing quality education and learning
              opportunities to every child, regardless of their background.
            </Typography>
            <Typography variant="h6" sx={{ mt: 3 }} color="primary">
              Vision
            </Typography>
            <Typography variant="body2" paragraph>
              To create a nation where every child has the tools and support needed to reach
              their fullest potential.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default About;
