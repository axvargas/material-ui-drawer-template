import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import PermanentNavBar from './PermanentNavBar'
import PermanentDrawer from './PermanentDrawer'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
}))
const Layout = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <PermanentNavBar />
            <PermanentDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                Content
            </main>
        </div>
    )
}

export default Layout
