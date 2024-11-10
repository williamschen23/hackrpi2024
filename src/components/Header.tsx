import { AppBar, Box, Toolbar, Fab, Container, Typography } from '@mui/material';
import logo from '/logo.png'
import { StateProp } from '../models/StateProp';

export default function Header(props: StateProp){
    return (
        <AppBar position="static">
        <Container maxWidth={false}>
            <Toolbar disableGutters sx={{width:"100%"}}>
            <Box component={"img"} src={logo} sx={{
                height: 40,
                width: 40,
                pointerEvents: "none"
            }}></Box>
            <Typography sx={{
                flexGrow: 1, ml: 2
            }}>Hello</Typography>
            <Fab variant="extended" size="large" onClick={()=>{
                props.setState('New York')
            }}>New York</Fab>
            <Fab variant="extended" size="large" sx={{ml: 2}} onClick={()=>{
                props.setState('San Francisco')
            }}>San Francisco</Fab>
            </Toolbar>
        </Container>
    </AppBar>
  )
}