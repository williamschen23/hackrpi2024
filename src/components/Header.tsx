import {AppBar, Box, Toolbar, Fab, Container, Typography} from '@mui/material';
import logo from '/logo-removebg-preview.png'
import {StateProp} from '../models/StateProp';

export default function Header(props: StateProp) {
    return (
        <AppBar position="static" sx={{ bgcolor: "#83bacc" }}>
            <Container maxWidth={false}>
                <Toolbar disableGutters sx={{width: "100%"}}>
                    <Box component={"img"} src={logo} sx={{
                        height: 80,
                        width: 80,
                        pointerEvents: "none"
                    }}></Box>
                    <Typography variant="h3" sx={{
                        flexGrow: 1, ml: 2
                    }}>Home Safe</Typography>
                    <Fab sx={{ bgcolor: props.state === "New York" ? "#8bd9a3" : "#D2F4DD", boxShadow: "1"}} variant="extended" size="large" onClick={() => {
                        props.setState('New York')
                    }}>New York</Fab>
                    <Fab sx={{ bgcolor: props.state === "San Francisco" ? "#8bd9a3" : "#D2F4DD", boxShadow: "1", ml: 2}} variant="extended" size="large" onClick={() => {
                        props.setState('San Francisco')
                    }}>San Francisco</Fab>
                </Toolbar>
            </Container>
        </AppBar>
    )
}