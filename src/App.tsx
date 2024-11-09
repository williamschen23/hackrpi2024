import { AppBar, Box, Button, Container, Fab, Grid2, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import logo from "/logo.png"


function App() {
  const [state, setState] = useState('New York');

  return (
    <Container disableGutters maxWidth={false}>
      <AppBar position="static">
        <Container maxWidth={false}>
            <Toolbar disableGutters sx={{width:"100%"}}>
              <Typography sx={{
                flexGrow: 1
              }}>Hello</Typography>
              <Fab variant="extended" size="large">New York</Fab>
              <Fab variant="extended" size="large" sx={{ml: 2}}>San Fransico</Fab>
            </Toolbar>
        </Container>
      </AppBar>

      <Box flexGrow={1} mt={5}>
        <Grid2 container spacing={2} direction={"column"}>
          <Grid2 container spacing={2} direction={"row"}>
            {/* Autocomplete Container */}
            <Grid2 size={6} justifyContent={"center"} alignItems={"center"} display={"flex"}>
              <Typography>From:</Typography>
              <br></br>
              <Typography>To:</Typography>
              <Button>Submit</Button>
            </Grid2>

            {/* Heatmap of Crime */}
            <Grid2 size={6} justifyContent={"center"} alignItems={"center"} display={"flex"}>
              
            </Grid2>
          </Grid2>

          {/* Routes */}
          <Grid2 justifyContent={"center"} alignItems={"center"} display={"flex"}>HUDIAH</Grid2>
        </Grid2>
      </Box>

    </Container>
  )
}

export default App
