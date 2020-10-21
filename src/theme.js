import {createMuiTheme} from '@material-ui/core/styles'
import { purple, teal} from "@material-ui/core/colors"

const theme = createMuiTheme({
    palette:{
        primary:{
            main: purple[400]
        },
        secondary:{
            main: teal[400]
        }
    }
})
export default theme