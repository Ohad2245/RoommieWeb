import  React,{useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { AppBar, Fade } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Register from "./Register";
import Login from "./Login";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";
import { CryptoState } from "../../CryptoContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    color: "white",
    borderRadius: 10,
  },
  google: {
    padding: 24,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: 20,
    fontSize: 20,
  },
  google:{
    padding:24,
    paddingTop:0,
    display:'flex',
    flexDirection: 'column',
    textAlign:'center',
    gap:20,
    fontSize:20,
  }
}));

export default function AuthModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {setAlert} = CryptoState();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () =>{
    signInWithPopup(auth,googleProvider).then(res =>{
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${res.user.email}`,
        type: "success",
      });
      handleClose();
    }).catch(error =>{
      setAlert({
        open:true,
        message:error.message,
        type:error
      });
      return;
    })
  }

  return (
    <div>
      <Button
        variant="contained"
        style={{
          width: 85,
          height: 40,
          marginLeft: 15,
          backgroundColor: "#EEBC1D",
        }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar
              position="static"
              style={{
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                style={{ borderRadius: 10 }}
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            {value === 0 && <Login handleClose={handleClose} />}
            {value === 1 && <Register handleClose={handleClose} />}
            <Box className={classes.google}>
              <span style={{color:'black'}} >OR</span>
              <GoogleButton
                style={{width:'100%',outline: 'none'}}
                onClick={signInWithGoogle}
              />
            </Box>
           
          </div>
        </Fade>
      </Modal>
    </div>
  );
}