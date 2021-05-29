import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {myStyle} from '../styles';
import LoginForm from './loginForm';

const LoginContainer = () => {
    const classes = myStyle();

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <LoginForm/>
        </div>
    )
}
export default LoginContainer