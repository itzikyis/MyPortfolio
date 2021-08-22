import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import Facebook from "@material-ui/icons/Facebook"
import LinkedIn from "@material-ui/icons/LinkedIn"
import GitHub from "@material-ui/icons/GitHub"

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            },
        },
    },
})
const Footer = () => {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        if(newValue == "Facebook")
        window.open("https://www.facebook.com/itzik.yisaschar/", "_blank")
        if(newValue == "GitHub")
        window.open("https://github.com/itzikyis/", "_blank")
        if(newValue == "LinkedIn")
        window.open("https://www.linkedin.com/in/itzikyis/", "_blank")
      };

    return (
        <div>
            <BottomNavigation width="auto" style={{ background: "#222" }} onChange={handleChange} >
                <BottomNavigationAction
                    value="Facebook"
                    className={classes.root}
                    style={{ padding: 0 }}
                    icon={<Facebook /> }
                />
                <BottomNavigationAction
                value="GitHub"
                    className={classes.root}
                    style={{ padding: 0 }}
                    icon={<GitHub />}
                />
                <BottomNavigationAction
                value="LinkedIn"
                    className={classes.root}
                    style={{ padding: 0 }}
                    icon={<LinkedIn />}
                />
            </BottomNavigation>
        </div>
    )
}

export default Footer
