import { Box, Container, Grid2 } from "@mui/material"
import { useState } from "react";
import StateInformation from "./StateInformation";
import Header from "./components/Header";
import MapView from "./components/MapView";
import { LoadScript } from "@react-google-maps/api";



function App() {
  const [state, setState] = useState('New York');

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY} libraries={['places']}>
      <Container disableGutters maxWidth={false} className="container">
        <Header state={state} setState={setState} />
        <Box mt={2}>
          <Grid2 container spacing={1}>
            <Grid2 size={5}>
              <StateInformation state={state} setState={setState}/>
            </Grid2>

            {/* Routes */}
            <Grid2 size={7}>
              <Box mr={1}>
                <MapView city={state}></MapView>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </LoadScript>
  )
}

export default App
