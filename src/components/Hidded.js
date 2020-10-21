import React from 'react'
import { withWidth, Typography, Hidden, Button } from '@material-ui/core'
const Hidded = ({ width }) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Width: {width}
            </Typography>
            <Hidden xsDown>
                <Button variant="contained" color="primary">
                    Not shown on xs and down
                </Button>
            </Hidden>
            <Hidden smDown>
                <Button variant="contained" color="primary">
                    Not shown on sm and down
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button variant="contained" color="secondary">
                    Not shown on md and up
                </Button>
            </Hidden>
            <Hidden only={["lg", "md"]}>
                <Button variant="contained" color="default">
                    Not shown only on lg and md
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Hidded)
