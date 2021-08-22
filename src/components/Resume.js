import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import NavBar from './Navbar';

const useStyle = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            }
        },
        "&:nth-of-type(2n):before": {
            display: "none"
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyle();

    return (
        <div>
            <NavBar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Ex
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        2016 – current
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            .NET DEVELOPER
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            MATRIX
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Mizrahi Tfahot Bank - Infrastructure development .NET, knowledge in Winforms C#
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Security clearance as part of the conditions of acceptance of the Bank of Israel
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Backend C# development - integration between the main legacy systems of the Bank of Israel to new global systems.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	WCF – created Web Services - secure, reliable, and responsive manner.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Queues.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Process Automation.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	SQL- Oracle- includes data insert, query, update and delete. (SQL Developer, Toad)
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Project coordination with system analysts, QA and the client.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Installing software versions on Unix environment in the BOI’s secure environment.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Supporting the client during the project launching, including real-time bug solutions.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Project coordination with system analysts, QA and the client.
                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            +	Familiar with React, Bootstrap.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        2015 – 2016
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            FREELANCE WEB DEVELOPER – FULL STACK
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            FREELANCE
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            +	Design and development of websites for small businesses with adjustment to different phones and devices. Worked in various environments as private or as team work.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                        2005 – 2010
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            FREELANCE COMPUTER TECHNICIAN
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            FREELANCE
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Installation of hardware, software, malfunctions, regulations operating systems, installing networks.          </Typography>
                    </Box>
                </Box>

            </Box>
        </div >
    )
}

export default Resume