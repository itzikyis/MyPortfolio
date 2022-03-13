import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core'
import NavBar from './Navbar'
import project1 from "../images/netflix-logo.jpg"
//html-css-javascript-lg.jpg"
import project2 from "../images/react-redux.jpg"
import project3 from "../images/react.jpg"
import project4 from "../images/mern-stack.jpg"

const useStyle = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
})



const Portfolio = () => {
    const classes = useStyle();

    const handleNetfixClick = () => {
        window.open('https://itzikyis.github.io/Netflix/', '_blank');
    };

    const handleUsersManegmentClick = () => {
        window.open('https://itzikyis.github.io/UsersManegment/', '_blank');
    };

    const netfixCodeClick = () => {
        window.open('https://github.com/itzikyis/Netflix/', '_blank');
    };

    const usersManegmentCodeClick = () => {
        window.open('https://github.com/itzikyis/UsersManegment/', '_blank');
    };

    
    const moviesManegmentCodeClick = () => {
        window.open('https://github.com/itzikyis/MoviesManegment/', '_blank');
    };

    const handleMoviesManegmentClick = () => {
        window.open('https://itzikyis.github.io/MoviesManegment/', '_blank');
    };


    

    return (
        <Box component="div" className={classes.mainContainer}>
            <NavBar />
            <Grid container justify="center">
                {/*Project 1*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Netflix
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    React, HTML, CSS, styled-components, react-icons-kit
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => netfixCodeClick()}>
                                Code
                            </Button>
                            <Button size="small" color="primary" onClick={() => handleNetfixClick()}>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/*Project 2*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Users Manegment
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    React, HTML, CSS, react-bootstrap, react-redux, axios
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => usersManegmentCodeClick()}>
                                Code
                            </Button>
                            <Button size="small" color="primary" onClick={() => handleUsersManegmentClick()}>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/*Project 3*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Movies Manegment
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    React, HTML, CSS, material-ui, react-router-dom, firebase- Authentication, Firestore DB
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => moviesManegmentCodeClick()}>
                                Code
                            </Button>
                            <Button size="small" color="primary" onClick={() => handleMoviesManegmentClick()}>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/*Project 4*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 4"
                                height="140"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    COMING SOON!
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Coming soon...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Code
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
