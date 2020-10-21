import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';

const DRAWER_WIDTH = 240
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    appBar: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
    }
}));

const NavBar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton aria-label="menu-icon" color="inherit" className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Xav
                    </Typography>
                    <Button variant="text" color="inherit">
                        Sign in
                    </Button>
                </ Toolbar >
            </AppBar>
            {/* <div className={classes.toolbar} /> */}
        </>
    )
}

export default NavBar
