import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import BuildIcon from '@material-ui/icons/Build';
import { useStyles } from './App';

export function Interface({flag,setFlag}) {
  
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  
  
  return (
    <div>
      <List>
      { flag===true ?  <ListSubheader id="menu_heads">INTERFACE:</ListSubheader>: ""}
        
        <ListItem button onClick={handleClick1}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          { flag===true ? <ListItemText primary="Components" /> : ""}
          {open1 ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" id="dropmenus" disablePadding>
            <ListItem className={classes.nested}>
            <ListSubheader id="menu_heads">
                CUSTOM COMPONENTS:
              </ListSubheader>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Buttons" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Cards" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleClick2}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          { flag===true ? <ListItemText primary="Utilites" /> : ""}
          {open2 ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" id="dropmenus" disablePadding>
            <ListItem className={classes.nested}>
            <ListSubheader id="menu_heads">
                CUSTOM UTILITIES:
              </ListSubheader>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Colors" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Animations" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Borders" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Other" />
            </ListItem>
          </List>
        </Collapse>

      </List>


    </div>
  );
}
