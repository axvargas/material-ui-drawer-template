import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
const Grids = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box border={2}>
                    item xs 12
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box border={2}>
                    item xs 12
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Intelligents</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box border={2}>
                    item xs 12 sm 6 md 3
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box border={2}>
                    item xs 12 sm 6 md 3
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box border={2}>
                    item xs 12 sm 6 md 3
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box border={2}>
                    item xs 12 sm 6 md 3
                </Box>
            </Grid>
        </Grid>
    )
}

export default Grids
