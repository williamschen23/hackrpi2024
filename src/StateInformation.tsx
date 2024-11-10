import { Grid2, Typography, Box, Container, Fab, Stack} from '@mui/material';
import { StateProp } from './models/StateProp'
import PlacesAutocomplete from './components/PlacesAutocomplete';
import { useState } from 'react';

export default function StateInformation(props: StateProp) {
	const [place1, setPlace1] = useState('');
	const [place2, setPlace2] = useState('');

  return (
		<Grid2 container spacing={3} direction={"column"}>
			{/* Autocomplete Container */}
			<Grid2 justifyContent={"center"} alignItems={"center"} display={"flex"}>
				<Container>
					<Stack spacing={2}>
						<PlacesAutocomplete selectedPlace={place1} setSelectedPlace={setPlace1} location={'From:'}></PlacesAutocomplete>
						<PlacesAutocomplete selectedPlace={place2} setSelectedPlace={setPlace2} location={'To:'}></PlacesAutocomplete>
						<Fab sx={{ bgcolor: (place1 ==='' || place2 ==='') ? '' : "#9ac8d9" }} variant={"extended"} ><Box fontWeight='fontWeightMedium'><Typography variant={"body1"} >Submit</Typography></Box></Fab>
					</Stack>
				</Container>
			</Grid2>
		</Grid2>
  )
}