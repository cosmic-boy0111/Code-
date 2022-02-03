import React ,{useContext}from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { AppContext } from '../../../App';
import { Theme } from '../../Theme';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  // return {
  //   id: `simple-tab-${index}`,
  //   'aria-controls': `simple-tabpanel-${index}`,
  // };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const  {themeToggler} = useContext(AppContext)

  return (
    <Box sx={{ width: '100%' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Profile"  className='min' style={{
          color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
        }} />
          <Tab label="Posts"  className='min' style={{
          color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
        }} />
          <Tab label="Problems"  className='min' style={{
          color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
        }} />
          <Tab label="Followers"  className='min' style={{
          color : themeToggler ? Theme.Dark.Color : Theme.Light.Color
        }} />
        </Tabs>
    </Box> 
  );
}

