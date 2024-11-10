import {Grid2, Typography, Box, Container, Fab, Stack, Select, MenuItem} from '@mui/material';
import PlacesAutocomplete from './components/PlacesAutocomplete';
import {Dispatch, SetStateAction} from 'react';
import MapComponent from "./heatmap.tsx";


interface StateInformationProp {
	state: string;
	setState: Dispatch<SetStateAction<string>>
	mobilityType: string;
	setMobilityType: Dispatch<SetStateAction<string>>
	placeFrom: string;
	setPlaceFrom: Dispatch<SetStateAction<string>>
	placeTo: string;
	setPlaceTo: Dispatch<SetStateAction<string>>
	searchButton: number
	setSearchButton: Dispatch<SetStateAction<number>>
}

export default function StateInformation(props: StateInformationProp) {

  return (
		<Grid2 container spacing={3} direction={"column"}>
			{/* Autocomplete Container */}
			<Grid2 justifyContent={"center"} alignItems={"center"} display={"flex"}>
				<Container>
					<Stack spacing={2}>
						<Select defaultValue={"walking"} onChange={(event) => {props.setMobilityType(event.target.value as string)}}>
							<MenuItem value={"walking"}>Walking</MenuItem>
							<MenuItem value={"driving"}>Driving</MenuItem>
						</Select>
						<PlacesAutocomplete selectedPlace={props.placeFrom} setSelectedPlace={props.setPlaceFrom} location={'From:'}></PlacesAutocomplete>
						<PlacesAutocomplete selectedPlace={props.placeTo} setSelectedPlace={props.setPlaceTo} location={'To:'}></PlacesAutocomplete>
						<Fab onClick= {()=>{
							props.setSearchButton(props.searchButton+1);
						}}sx={{ bgcolor: (props.placeFrom ==='' || props.placeTo ==='') ? '' : "#9ac8d9" }} variant={"extended"} ><Box fontWeight='fontWeightMedium'><Typography variant={"body1"} >Submit</Typography></Box></Fab>
					</Stack>
				</Container>
			</Grid2>

			<Grid2>
				<Box margin={1}>
					<MapComponent city={props.state} transportationMode={props.mobilityType}></MapComponent>
				</Box>
			</Grid2>

		</Grid2>
  )
}