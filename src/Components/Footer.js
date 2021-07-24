import React from 'react'
import { Container, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    centerItems:{
     textAlign:"center",
     color:theme.palette.error.light,
    
    }


}))
const Footer = () => {
    const classes = useStyles()
    return (
        <>
        <Container maxWidth="sm" className={classes.centerItems}>
        <Box>
            <Typography variant="subtitile2" component="p" >
              Copyright @ Ro-Coder
            </Typography>
            </Box>
        </Container>
            
        </>
    )
}

export default Footer