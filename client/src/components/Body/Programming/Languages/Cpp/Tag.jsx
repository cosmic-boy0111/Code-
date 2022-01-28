import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      
    },
  },
};



export default function MultipleSelectCheckmarks({tags, value , setValue , multi, setErr}) {


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setErr(false)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        {/* <InputLabel id="demo-multiple-checkbox-label">tags</InputLabel> */}
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={multi}
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label="tags" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {tags.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
