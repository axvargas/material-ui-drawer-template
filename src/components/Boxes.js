import { Box } from '@material-ui/core'
import React from 'react'

const Boxes = () => {
    return (
        <div>
            <Box
                color="primary.main"
            >
                Boxita
            </Box>
            <Box
                color="primary.contrastText"
                bgcolor="primary.main"
            >
                With bg
            </Box>
            <Box
                color="primary.contrastText"
                bgcolor="primary.main"
                m={2}
            >
                margin 2
            </Box>
            <Box
                color="primary.contrastText"
                bgcolor="primary.main"
                mr={2}
            >
                margin rigth 2
            </Box>
            <Box
                color="primary.contrastText"
                bgcolor="primary.main"
                mx={2}
            >
                margin rigth and left 2
            </Box>
            <Box
                color="primary.contrastText"
                bgcolor="primary.main"
                my={2}
            >
                margin top and bottom 2
            </Box>
            <Box
                color="primary.contrastText"
                bgcolor="primary.main"
                p={5}
            >
                padding 5
            </Box>
            <Box
                color="primary.contrastText"
                bgcolor="primary.main"
                py={3}
            >
                padding top and bottom 3
            </Box>
            <Box
                color="error.main"
                bgcolor="#f3f3f3"
                m={3}
                p={3}
                boxShadow={3}
                borderLeft={5}
                borderColor="error.main"
                borderRadius={5}
            >
                Error message
            </Box>
        </div>
    )
}

export default Boxes
