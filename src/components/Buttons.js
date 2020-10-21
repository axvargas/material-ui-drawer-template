import React from 'react'
import { Button, Typography} from "@material-ui/core";

const Buttons = () => {
    return (
        <div>
            <Typography variant="h4">Buttons</Typography>
            <Button variant="outlined" color="primary">
                outlined
      		</Button>
            <p>sth</p>
            <Button variant="contained" color="primary">
                contained
     		 </Button>
            <p>sth</p>
            <Button variant="text" color="primary" href="https://google.com" target="_blank" disableElevation>
                Google
      		</Button>
            <p>sth</p>
            <Button variant="contained" color="primary" disableElevation fullWidth>
                fullwidth
			</Button>
            <p>sth</p>
            <Button variant="contained" color="primary" disableElevation size="large">
                large
			</Button>
            <Button variant="contained" color="primary" disableElevation size="medium">
                Medium
			</Button>
            <Button variant="contained" color="primary" disableElevation size="small">
                small
			</Button>
        </div>
    )
}

export default Buttons
