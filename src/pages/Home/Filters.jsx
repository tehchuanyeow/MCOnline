import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { color } from '@mui/system';

export default function FixedTags() {
  const [value, setValue] = React.useState([filterServers[0]]);

  const groupedFilters = filterServers.map(category => ({
    title: category.title,
    options: filterServers.filter(filter => filter.category === category.category),
  }));

  return (
    <Autocomplete
      multiple
      limitTags={4}
      id="filters"
      variant="outlined"
      value={value}
      style={{ bordercolor: 'white' }}
      onChange={(event, newValue) => {
        setValue([...newValue]);
      }}
      options={groupedFilters}
      groupBy={(option) => option.title}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            style={{ backgroundColor: '#3f51b5' }}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select a Filter"
          placeholder="Up to 4 Filters"
          InputLabelProps={{
            style: { color: 'white',
            borderColor: 'white' },
          }}
        />
      )}
    />
  );
}

// List of Minecraft Server Types
const filterServers = [
  { title: 'Adventure', category: 'Adventure' },
  { title: 'Survival', category: 'Open World' },
  { title: 'Creative', category: 'Open World' },
  { title: 'Hardcore', category: 'Open World' },
  { title: 'Vanilla', category: 'Server Type' },
  { title: 'Anarchy', year: 'Server Type' },
  { title: 'Factions', year: 'Server Type' },
  { title: 'Prison', year: 'Server Type' },
  { title: 'Skyblock', year: 'Minigame' },
  { title: 'Skygrid', year: 'Server Type' },
  { title: 'Towny', year: 'Server Type' },
  { title: 'Bedwars', year: 'Minigame' },
  { title: 'Hunger Games', year: 'Minigame' },
  { title: 'Minigames', year: 'Server Type' },
  { title: 'PvP', year: 2010 },
  { title: 'Roleplay', year: 2010 },
  { title: 'RPG', year: 2010 },
  { title: 'Skywars', year: 2010 },
  { title: 'Survival Games', year: 2010 },
  { title: 'UHC', year: 2010 },
  { title: 'Modded', year: 2010 },
  { title: 'Pixelmon', year: 2010 },
  { title: 'Tekkit', year: 2010 },
  { title: 'Hexxit', year: 2010 },
  { title: 'Feed The Beast', year: 2010 },
  { title: 'ATLauncher', year: 2010 },
  { title: 'Void Launcher', year: 2010 },
  { title: 'Technic Launcher', year: 2010 },
  { title: 'Curse Launcher', year: 2010 },
  { title: 'Minecraft Legacy', year: 2010 },
];