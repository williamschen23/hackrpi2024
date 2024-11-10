import { Box, Container, Grid2 } from "@mui/material"
import { useState } from "react";
import StateInformation from "./StateInformation";
import Header from "./components/Header";
import MapView from "./components/MapView";



function App() {
  const [state, setState] = useState('New York');

  return (
    <Container disableGutters maxWidth={false} className="container">
      <Header state={state} setState={setState} />
      <Box flexGrow={1} mt={5}>
        <Grid2 container spacing={2} direction={"column"}>
          <StateInformation state={state} setState={setState}/>

          {/* Routes */}
          <Grid2 justifyContent={"center"} alignItems={"center"} display={"flex"}>
              <Box width={"100%"} height={"100%"}>
                <MapView></MapView>
              </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  )
}

export default App
