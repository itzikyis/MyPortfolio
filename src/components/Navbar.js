import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from "@material-ui/core"
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons"
import avatar from '../MyAvatar.png'
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import Footer from './Footer'
//CSS STYLES
const useStyles = makeStyles(theme => ({
    manuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/MyPortfolio/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/MyPortfolio/resume"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "CV",
        listPath: "/MyPortfolio/cv"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/MyPortfolio/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/MyPortfolio/contacts"
    }
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = useStyles();
    const sideList = slider => (
        <Box className={classes.manuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Itzik Yisaschar" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                            <Footer />
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
