import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TableChartIcon from '@material-ui/icons/TableChart';
import { useStyles } from './App';

export function Addons({flag,setFlag}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <List>
      { flag===true ? <ListSubheader id="menu_heads">ADDONS:</ListSubheader> : ""}
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          { flag===true ? <ListItemText primary="Pages" /> : ""}
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" id="dropmenus" disablePadding>
            <ListItem className={classes.nested}>
              <ListSubheader id="menu_heads">
                LOGIN SCREEN:
              </ListSubheader>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Forgot Password" />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListSubheader id="menu_heads">
                OTHER PAGES:
              </ListSubheader>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="404 Page" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Blank Page" />
            </ListItem>



          </List>
        </Collapse>

        <ListItem button >
          <ListItemIcon>
            <EqualizerIcon />
          </ListItemIcon>
          { flag===true ? <ListItemText primary="Charts" /> : ""}
        </ListItem>

        <ListItem button >
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          { flag===true ? <ListItemText primary="Tables" /> : ""}
        </ListItem>
      </List>
    </div>
  );
}
