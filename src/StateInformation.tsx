import {Grid2, Typography, Box, Container, Fab, Stack, Select, MenuItem, Rating, Alert, Snackbar} from '@mui/material';
import PlacesAutocomplete from './components/PlacesAutocomplete';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
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
	const [starRating, setStarRating] = useState<number | null>(0);
	const [alert, setAlert] = useState<boolean>(false)

	useEffect(() => {setStarRating(0)}, [alert])
  return (
		<Grid2 container spacing={3} direction={"column"}>
			{/* Autocomplete Container */}
			<Grid2 justifyContent={"center"} alignItems={"center"} display={"flex"}>
				<Container>
					<Stack spacing={2}>
						<Select defaultValue={"walking"} onChange={(event) => {props.setMobilityType(event.target.value as string);
							setAlert(false)}}>
							<MenuItem value={"walking"}>Walking</MenuItem>
							<MenuItem value={"driving"}>Driving</MenuItem>
						</Select>
						<PlacesAutocomplete selectedPlace={props.placeFrom} setSelectedPlace={props.setPlaceFrom} location={'From:'}></PlacesAutocomplete>
						<PlacesAutocomplete selectedPlace={props.placeTo} setSelectedPlace={props.setPlaceTo} location={'To:'}></PlacesAutocomplete>
						<Fab onClick= {()=>{
							props.setSearchButton(props.searchButton+1);
							setAlert(false)
						}}sx={{ bgcolor: (props.placeFrom ==='' || props.placeTo ==='') ? '' : "#9ac8d9" }} variant={"extended"} ><Box fontWeight='fontWeightMedium'><Typography variant={"body1"} >Find a route!</Typography></Box></Fab>
						<Typography>Review your route here:</Typography>
						{props.searchButton >= 0 && <Rating
							name="simple-controlled"
							value={starRating}
							defaultValue={0}
							onClick = {() => {setAlert(true)
							}}
							onChange={(event, newValue) => {
								setStarRating(newValue);
							}}
						/>}

						{alert &&
							<Snackbar
								anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								style={{
									backgroundColor:'#83bacc',
								}}
								open={alert}
								message="Your route rating has been added to our database!"
							>
							</Snackbar>}
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