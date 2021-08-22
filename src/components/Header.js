import React from 'react'
import { Avatar, Typography, Box, Grid } from "@material-ui/core"
import Typed from 'react-typed'
import avatar from '../MyAvatar.png'
import { makeStyles } from '@material-ui/core/styles';

//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subTitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}
));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Itzik Yisaschar" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Itzik Yisaschar"]} typeSpeed={40} />
            </Typography>
            <Typography className={classes.subTitle} variant="h5">
                <Typed strings={["Web Design", "Web Developer", "MERN Stack", ".NET Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
            </Typography>
        </Box>
    )
}

export default Header
