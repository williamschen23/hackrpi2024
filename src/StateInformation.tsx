import { Grid2, Typography, Button } from '@mui/material';
import { StateProp } from './model/StateProp'

export default function StateInformation(props: StateProp) {
  return (
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
				<Typography variant='h3'>{props.state}</Typography>
			</Grid2>
		</Grid2>

  )
}