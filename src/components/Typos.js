import React from 'react'
import { Button, Typography } from "@material-ui/core";

const Typos = () => {
    return (
        <div>
            <Typography variant="h4">Typography</Typography>
            <Typography variant="h1" color="primary">
                h1. Heading
            </Typography>
            <Typography variant="body1" color="secondary" align="center" paragraph>
                Centered
            </Typography>
            <Typography variant="body1" color="secondary" align="center" gutterBottom>
                Centered
            </Typography>
            <Typography variant="body1" color="secondary" align="center">
                Centered
            </Typography>
        </div>
    )
}

export default Typos
