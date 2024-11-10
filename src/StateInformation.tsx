import { Grid2, Typography, Button, Container } from '@mui/material';
import { StateProp } from './models/StateProp'
import PlacesAutocomplete from './components/PlacesAutocomplete';
import { useState } from 'react';

export default function StateInformation(props: StateProp) {
	const [place1, setPlace1] = useState('');
	const [place2, setPlace2] = useState('');

  return (
		<Grid2 container spacing={2} direction={"row"}>
			{/* Autocomplete Container */}
			<Grid2 size={6} justifyContent={"center"} alignItems={"center"} display={"flex"}>
				<Container>
					<PlacesAutocomplete selectedPlace={place1} setSelectedPlace={setPlace1} location={'From:'}></PlacesAutocomplete>
					<PlacesAutocomplete selectedPlace={place2} setSelectedPlace={setPlace2} location={'To:'}></PlacesAutocomplete>
					<Button>Submit</Button>
				</Container>
			</Grid2>

			{/* Heatmap of Crime */}
			<Grid2 size={6} justifyContent={"center"} alignItems={"center"} display={"flex"}>
				<Typography variant='h3'>{props.state}</Typography>
			</Grid2>
		</Grid2>

  )
}