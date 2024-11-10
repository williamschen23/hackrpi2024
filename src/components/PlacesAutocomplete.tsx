import { Autocomplete, TextField } from '@mui/material';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { PlacesProp } from '../models/PlacesProp';

export default function PlacesAutocomplete(props: PlacesProp) {

  
  const { setValue, suggestions: { data }} = usePlacesAutocomplete({debounce: 300})
  
  function settingValues(newValue: string){
    setValue(newValue);
    props.setSelectedPlace(newValue);
  }
  
  return (
    <Autocomplete
      id='PlacesAutocomplete'
      options={data}
      sx={{width: 400}}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.description
      }
      renderInput = {(params) => <TextField {...params} label="Something"></TextField>}
      onInputChange={(_, newValue) => settingValues(newValue)}
    />
  )
}
