import React, { useState, useContext } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Link,
  Button,
  TextField,
  Container,
  Card,
  Box,
  Typography,
  Grid,
  CssBaseline,
  Avatar,
} from "@mui/material";
import Nav from "../../Components/Navbar/nav";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../Components/loader/Loader";
import myContext from "../../context/myContext";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0", // Purple color
    },
    secondary: {
      main: "#9c27b0", // Purple color
    },
  },
});

const Signup = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
    const {loading, setLoading } = context;
  const [userSignup, setUserSignup] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "user"
  });

  const userSignUp = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (
      userSignup.firstname === "" ||
      userSignup.lastname === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );
      const user = {
        firstname: userSignup.firstname,
        lastname: userSignup.lastname,
        email: users.user.email,
        uid: users.user.uid,
        role: "user",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      setUserSignup({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      });
      toast.success("SignedUp Successfully");
      setLoading(false);
      navigate("/login");
    } catch (err) {

      setLoading(false);
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email is already in use");
      } else if (err.code === "auth/weak-password") {
        toast.error("Password is too weak");
      } else {
        console.log(err);
        toast.error("Error signing up");
      }
    };
  };

    return (
      <>
        <Nav />
        <Card
          sx={{
            maxWidth: "40vw",
            minWidth: "320px",
            margin: "4rem auto",
            borderRadius: "50px",
            background:
              "linear-gradient(90deg, rgba(173,38,172,1) 7%, rgba(198,137,207,1) 44%, rgba(179,0,255,1) 99%)",
          }}
        >
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" fontWeight="bold">
                  Sign up {loading && <Loader />}
                </Typography>
                <form onSubmit={userSignUp}>
                  <Box component="div" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                          value={userSignup.firstname}
                          onChange={(e) =>
                            setUserSignup({
                              ...userSignup,
                              firstname: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                          value={userSignup.lastname}
                          onChange={(e) =>
                            setUserSignup({
                              ...userSignup,
                              lastname: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={userSignup.email}
                          onChange={(e) =>
                            setUserSignup({
                              ...userSignup,
                              email: e.target.value,
                            })
                          }
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
                          autoComplete="new-password"
                          value={userSignup.password}
                          onChange={(e) =>
                            setUserSignup({
                              ...userSignup,
                              password: e.target.value,
                            })
                          }
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
                  </Box>
                </form>
                <Grid container justifyContent="flex-end">
                  <Grid item style={{ paddingBottom: "5vh" }}>
                    <Link href="login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </ThemeProvider>
        </Card>
      </>
    );
  };
  export default Signup;
