import { Grid2, Typography, Button, Container } from '@mui/material';
import { StateProp } from './models/StateProp'
import PlacesAutocomplete from './components/PlacesAutocomplete';
import { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';

export default function StateInformation(props: StateProp) {
	const [place1, setPlace1] = useState('');
	const [place2, setPlace2] = useState('');

  return (
		<Grid2 container spacing={2} direction={"row"}>
			{/* Autocomplete Container */}
			<Grid2 size={6} justifyContent={"center"} alignItems={"center"} display={"flex"}>
				<Container>
					<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY} libraries={['places']}>
						<Typography>From:</Typography>
						<PlacesAutocomplete selectedPlace={place1} setSelectedPlace={setPlace1}></PlacesAutocomplete>
						<Typography>To:</Typography>
						<PlacesAutocomplete selectedPlace={place2} setSelectedPlace={setPlace2}></PlacesAutocomplete>
						<Button>Submit</Button>
					</LoadScript>
				</Container>
			</Grid2>

			{/* Heatmap of Crime */}
			<Grid2 size={6} justifyContent={"center"} alignItems={"center"} display={"flex"}>
				<Typography variant='h3'>{props.state}</Typography>
			</Grid2>
		</Grid2>

  )
}