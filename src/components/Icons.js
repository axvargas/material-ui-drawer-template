import React from 'react'
import { Button, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const Icons = () => {
    return (
        <div>
            <Typography variant="h4">Icons</Typography>

            <DeleteIcon color="primary" fontSize="large" />
            <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <IconButton aria-label="delete" color="primary">
                <DeleteIcon />
            </IconButton>

        </div>
    )
}

export default Icons
