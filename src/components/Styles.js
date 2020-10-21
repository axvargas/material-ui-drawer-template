import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    myBtnClass: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
    },
})

const Styles = () => {
    const classes = useStyles()
    return (
        <div>
            <Button className={classes.myBtnClass}>
                My styled button
            </Button>
            <Typography variant="h6">Default</Typography>
            <Button variant="contained">
                Primary button
            </Button>
            <Typography variant="h6" color="primary">Primary</Typography>
            <Button variant="contained" color="primary">
                Primary button
            </Button>
            <Typography variant="h6" color="secondary">Secondary</Typography>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
        </div>
    )
}

export default Styles
