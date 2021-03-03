import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: "100%",
    // background:"rgba(198, 197, 185, .4)",
    fontSize:"40px !important"
  },
});

export default function Bottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style={
    fontSize:"42px"
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Üzemeltető" value="recents"  icon={<RestoreIcon style={style}/>} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon style={style}/>} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon style={style} />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon  style={style}/>} />
    </BottomNavigation>
  );
}