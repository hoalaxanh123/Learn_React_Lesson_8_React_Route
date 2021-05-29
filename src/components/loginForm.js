import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import {myStyle} from "../styles";
import {useState} from "react";
import useSnackBar from "../hook";

const LoginForm = () => {
    const classes = myStyle();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {showSnackbar, hideSnackBar} = useSnackBar();

    const changeUserName = (e) => {
        setUsername(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (!username || !password) {
            showSnackbar("Username and password are required.", "error");
            return;
        }

        const snackBarLoadingID = showSnackbar("Logging...", 'loading');

        // Fake calling API
        setTimeout(() => {
            hideSnackBar(snackBarLoadingID);
            if (username === "admin" && password === "admin") {
                showSnackbar("Login success", "success");
            } else {
                showSnackbar("Your username or password is incorrect", "error");
            }
        }, 3000);
    };
    return (
        <>
            <form className={classes.form} noValidate>
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Username'
                    value={username}
                    onChange={changeUserName}
                    autoFocus
                />
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Password'
                    onChange={changePassword}
                    value={password}
                    type='password'
                />
                <FormControlLabel
                    control={<Checkbox value='remember' color='primary'/>}
                    label='Remember me'
                />
                <Button
                    type='button'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href='#' variant='body2'>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href='#' variant='body2'>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default LoginForm;
