import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import NavBar from './Navbar';
import apiKey from '../emailkey'
import emailjs from 'emailjs-com';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const useStyle = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan",
            },
        },
    },
})(TextField)

const Contacts = () => {
    const classes = useStyle();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    // call your hook here
    const forceUpdate = useForceUpdate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const clearFeilds = () => {
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
    };

    const handleClose = () => {
        setOpen(false);
        forceUpdate();
    };

    const handleSubmit = () => {

        var templateParams = {
            from_name: name,
            email: email,
            company: company,
            message: message
        };

        emailjs.send("service_ao3v9fa", apiKey.TEMPLATE_ID, templateParams, apiKey.USER_ID)
            .then(function (response) {
                handleClickOpen();
                clearFeilds();
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    };

    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
            <NavBar />
            <Grid container justify="center">
                <Box component="form" className={classes.form} >
                    <Typography
                        variant="h5"
                        style={{ color: "tomato", textAlign: "center", textTransform: "uppercaseF" }}>Hire or Contact me...</Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium" onChange={e => setName(e.target.value)} /><br />
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium" onChange={e => setEmail(e.target.value)} /><br />
                    <InputField
                        fullWidth={true}
                        label="Company Name"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium" onChange={e => setCompany(e.target.value)} />
                    <InputField
                        fullWidth={true}
                        label="Message"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="large" onChange={e => setMessage(e.target.value)} />
                    <br />
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />} onClick={() => handleSubmit()} >CONTACT ME</Button>
                </Box>
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-dialog-title"
                aria-describedby="simple-dialog-description"
            >
                <DialogTitle id="simple-dialog-title">{""}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="simple-dialog-description">
                        Message was sent! Thank you!
                    </DialogContentText>
                </DialogContent>
            </Dialog>

        </Box>
    )

}
export default Contacts;
