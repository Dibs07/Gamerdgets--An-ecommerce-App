
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    Link,
    Button,
    Checkbox,
    TextField,
    Container,
    Card,
    FormControlLabel,
    Box,
    Typography,
    Grid,
    CssBaseline,
    Avatar,
} from "@mui/material";
import Nav from "../../Components/Navbar/nav";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth , fireDB} from "../../firebase/FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Loader from "../../Components/loader/Loader";


const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#9c27b0",
        },
        secondary: {
            main: "#9c27b0",
        },
    },
});

const Login = () => {
    const context = useContext(myContext);
    const {loading, setLoading} = context;
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });
    const handleuserLogin = async (event) => {
        event.preventDefault();
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All fields are required");
            return;
        }
        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            try {
                const q = query(
                    collection(fireDB, "users"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    if (!QuerySnapshot.empty) {
                        let user;
                        QuerySnapshot.forEach((doc) => user = doc.data());
                        console.log("Retrieved user:", user);
                        if (user && user.role) {
                            localStorage.setItem("users", JSON.stringify(user));
                            setUserLogin({
                                email: "",
                                password: ""
                            });
                            toast.success("Login Successfully");
                            setLoading(false);
                            if (user.role === "user") {
                                navigate('/dashboard');
                            } else {
                                navigate('/admin');
                            }
                        } else {
                            toast.error("User data is incomplete");
                        }
                    } else {
                        toast.error("User not found");
                    }
                }, (error) => {
                    console.error("Error fetching user:", error); // Log any errors that occur during the query
                    toast.error("Error fetching user data");
                    setLoading(false);
                });
                return () => data;
            } catch (error) {
                console.error("Error querying Firestore:", error); // Log any errors that occur during the try block
                toast.error("Error querying Firestore");
                setLoading(false);
            }
            
            
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    };

    return (
        <>
            <Nav />
            <Card
                sx={{ maxWidth: "40vw", minWidth: "320px", margin: "70px auto", borderRadius: "50px", background: 'linear-gradient(90deg, rgba(173,38,172,1) 7%, rgba(198,137,207,1) 44%, rgba(179,0,255,1) 99%)' }}
            >{loading && <Loader />}
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
                                Sign in
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleuserLogin}
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={userLogin.email}
                                    onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={userLogin.password}
                                    onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                                />
                                
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item style={{ paddingBottom: "10vh" }}>
                                        <Link href="signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </Card>
        </>
    );
};

export default Login;