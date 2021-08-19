import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpeedIcon from '@material-ui/icons/Speed';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Interface } from './Interface';
import { Addons } from './Addons';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import TodayIcon from '@material-ui/icons/Today';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';

import { createContext, useState } from "react";

import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
  ArgumentAxis,
  AreaSeries,
  ValueAxis,
  ScatterSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation, ArgumentScale } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';

import {
  curveCatmullRom,
  area,
} from 'd3-shape';

import { scalePoint } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';


import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';
import { FormatColorResetOutlined, RepeatOutlined } from '@material-ui/icons';

import * as d3Format from 'd3-format';
import { findAllByDisplayValue } from '@testing-library/react';
import { Template } from '@devexpress/dx-react-core';

const ctx = createContext(null)

const iniflag = true


function App() {


  const [flag, setFlag] = useState(iniflag);

  return (

    <div className="maincontainer"
      style={
        {
          display: "grid",
          gridTemplateColumns: !flag ?  "1fr 12fr":"1fr 4fr" ,
        }
      }
    >
      <div className="leftC">
        <Menumain flag={flag} setFlag={setFlag} />
      </div>
      <div className="rightC">
        <Dashboard />
      </div>
    </div>

  );
}

export default App;


function Menumain({ flag, setFlag }) {

  return (
    <div>
      <MenuList flag={flag} setFlag={setFlag} />
    </div>
  )
}

function MenuList({ flag, setFlag }) {


  return (
    <div className="menubar">
      <div class="heads"><InsertEmoticonIcon />

        {flag? <h2>SB ADMIN2</h2> : ""}
      </div>
      <div>
        <List>
          <ListItem>
            <ListItemIcon>
              <SpeedIcon />
            </ListItemIcon>
            {flag ? <ListItemText primary="Dashboard" /> : ""}
          </ListItem>
        </List>
      </div>
      <Interface flag={flag} setFlag={setFlag} />
      <Addons flag={flag} setFlag={setFlag} />
      <div>
        {
          flag ?
            <Fab color="secondary" aria-label="edit"  onClick={()=>setFlag(!flag)}>
              <ArrowBackIosIcon/>
            </Fab>
            :
            <Fab color="secondary" aria-label="edit" onClick={()=>setFlag(!flag)}>
              <ArrowForwardIosIcon/>
            </Fab>
        }
      </div>

    </div>

  )

}

function Dashboard() {
  return (
    <div>
      <Dboard />
    </div>
  )
}

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));



function Dboard() {
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
  return (
    <Container fluid className="mc">
      <Row className="r1 rr">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav
              className="me-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

            </Nav>

            <Nav id="navl">
              <Nav.Link href="#" id="navi"><Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge></Nav.Link>
              <Nav.Link href="#" id="navi">
                <Badge badgeContent={2} color="primary">
                  <NotificationsIcon />
                </Badge>
              </Nav.Link>
              <Nav.Link href="#" id="navi"><h5>Itachi Uhicha</h5></Nav.Link>
              <Avatar alt="I" src="/static/images/avatar/1.jpg" />

            </Nav>

          </Navbar.Collapse>
        </Navbar>

      </Row>

      <Row className="r2-1 rr">
        <div id="dash_heading">
          <div><h3>DashBoard</h3></div>
          <div id="report_bt"><GetAppIcon /> Generate Report</div>
        </div>
      </Row>

      <Row className="r2 rr">


        <Col sm="12" md="6" lg="6" xl="3" className="c2" >
          <div className="smcards" >
            <Paper id="smallpaper" style={{ borderLeft: "solid red" }}>

              <div id="sc_subheads">
                <div id="slc">
                  <h6 style={{ color: "red" }}>EARNINGS (MONTHLY)</h6>
                  <h4>$40,000</h4>
                </div>
                <div>
                  <TodayIcon fontSize="large" />
                </div>
              </div>

            </Paper>
          </div>
        </Col>

        <Col sm="12" md="6" lg="6" xl="3" className="c2"  >
          <div className="smcards" >
            <Paper id="smallpaper" style={{ borderLeft: "solid green" }}>

              <div id="sc_subheads">
                <div id="slc">
                  <h6 style={{ color: "green" }}>EARNINGS (ANNUAL):</h6>
                  <h4>1,24,000</h4>
                </div>
                <div>
                  < MonetizationOnIcon fontSize="large" />
                </div>
              </div>

            </Paper>
          </div>
        </Col>

        <Col sm="12" md="6" lg="6" xl="3" className="c2" >
          <div className="smcards" >
            <Paper id="smallpaper" style={{ borderLeft: "solid blue" }}>

              <div id="sc_subheads">
                <div id="slc">
                  <h6 style={{ color: "blue" }}>TASKS COMPLITION:</h6>
                  <div id="compbar"><div><h4>50%</h4></div><div id="lbar"><BorderLinearProgress variant="determinate" value={50} /></div></div>
                </div>
                <div>
                  <SpeakerNotesIcon fontSize="large" />
                </div>

              </div>


            </Paper>
          </div>
        </Col>

        <Col sm="12" md="6" lg="6" xl="3" className="c2" >
          <div className="smcards" >
            <Paper id="smallpaper" style={{ borderLeft: "solid #f6c23e" }}>

              <div id="sc_subheads">
                <div id="slc">
                  <h6 style={{ color: "#f6c23e" }}>PENDING REQUESTS:</h6>
                  <h4>15</h4>
                </div>
                <div>
                  <QuestionAnswerIcon fontSize="large" />
                </div>
              </div>
            </Paper>
          </div>
        </Col>

      </Row>

      <Row className="r3 rr">
        <Col sm="12" md="12" lg="7" xl="8" className="c31 cc">
          <DashHeading title="Earning Overview" />
          <LineGraph />
        </Col>
        <Col sm="12" md="12" lg="5" xl="4" className="c32 cc">
          <DashHeading title="Revenue Sources" />
          <PieChart />
        </Col>

      </Row>

      <Row className="r4 rr">
        <Col md="12" lg="6" xl="6" className="c41">
          <DashHeading title="Projects" />
          <Projcomplition />
          <ColorDescitioncards />
        </Col>
        <Col md="12" lg="6" xl="6" className="c42">

          <Row id="rr"><Card1 /></Row>
          <Row id="rr"><Card2 /></Row>

        </Col>
      </Row>
    </Container>

  )
}



function Projcomplition() {
  var dt = [{ name: "Server Migration", val: "20", col: "red" },
  { name: "Sales Tracking", val: "40", col: "green" },
  { name: "Customer Database", val: "60", col: "blue" },
  { name: "Payout Details", val: "80", col: "yellow" },
  { name: "Account Setup", val: "100", col: "pink" }];

  var colr = [
    { na: "Primary", hsh: "#4e73df" },
    { na: "Success", hsh: "#1cc88a" },
    { na: "Info", hsh: "#36b9cc" },
    { na: "Warning", hsh: "#f6c23e" },
    { na: "Danger", hsh: "#e74a3b" },
    { na: "Secondary", hsh: "#858796" },
    { na: "Light", hsh: "#FFC0CB" },
    { na: "Dark", hsh: "#5a5c69" },
  ];
  return (
    <div>
      <Paper>
        <div>
          {
            dt.map((e) => (<SmallCOMPc name={e.name} val={e.val} col={e.col} />))}
        </div>
      </Paper>

      <div className="colorcardsbox">
        {colr.map((e) => (<ColorDescitioncards na={e.na} hsh={e.hsh} />))}
      </div>
    </div>

  )
}

function SmallCOMPc(e) {
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: `${e.col}`,
    },
  }))(LinearProgress);
  return (
    <div class="compbox">
      <div className="competionhead">
        <div><h5>{e.name}</h5></div>
        <div><h5>{e.val == 100 ? "Completed" : e.val}</h5></div>
      </div>
      <div id="Cbar"><BorderLinearProgress variant="determinate" value={e.val} /></div>
    </div>
  )
}


function ColorDescitioncards(promps) {
  return (
    <div className="cbox" style={{ backgroundColor: `${promps.hsh}` }}>
      <h5>{promps.na}</h5>
      <h5>{promps.hsh}</h5>
    </div>
  )
}

function PieChart() {
  const data = [
    { region: 'direct', val: 15 },
    { region: 'social', val: 55 },
    { region: 'referrel', val: 30 },

  ];

  const legendStyles = () => ({
    root: {
      display: 'flex',
      margin: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

  const legendRootBase = ({ classes, ...restProps }) =>
    (<Legend.Root {...restProps} className={classes.root} />)

  const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);

  return (
    <div>
      <Paper className="diagra_content">
        <Chart
          data={data}>
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.7}
          />
          <Title
          />
          <Animation />
          <Legend
            position="bottom" rootComponent={Root} />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    </div>
  )
}





function Card1() {
  return (
    <div>
      <DashHeading title="Illustrations" />
      <Paper>
        <article className="article">Add some quality, svg illustrations to your project
          courtesy of <a href="#">unDraw</a>, a constantly updated collection
          of beautiful svg images that you can use completely
          free and without attribution!<br />
          <br />
          <a href="#">Browse Illustrations on unDraw →</a>
        </article>
      </Paper>
    </div>
  )
}

function Card2() {
  return (
    <div>
      <DashHeading title="Development Approach" />
      <Paper>
        <article className="article">
          SB Admin 2 makes extensive use of Bootstrap 4 utility
          classes in order
          to reduce CSS bloat and poor page performance.
          Custom CSS classes are used to create custom
          components and custom utility classes.<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Before working with this theme,
          you should become familiar with the Bootstrap framework,
          especially the utility classes.
        </article>

      </Paper>
    </div>
  )
}

//linegrapg

function LineGraph() {

  const data = [
    { month: 'Jan', appStore: 0 },
    { month: 'Feb', appStore: 10000 },
    { month: 'Mar', appStore: 5000 },
    { month: 'Apr', appStore: 15000 },
    { month: 'May', appStore: 10000 },
    { month: 'Jun', appStore: 20000 },
    { month: 'Jul', appStore: 15000 },
    { month: 'Aug', appStore: 25000 },
    { month: 'Sep', appStore: 20000 },
    { month: 'Oct', appStore: 30000 },
    { month: 'Nov', appStore: 25000 },
    { month: 'Dec', appStore: 40000 },
  ];



  const Area = props => (
    <AreaSeries.Path
      {...props}
      path={area()
        .x(({ arg }) => arg)
        .y1(({ val }) => val)
        .y0(({ startVal }) => startVal)
        .curve(curveCatmullRom)}
    />
  );
  const formatTooltip = d3Format.format(',.2r');
  const TooltipContent = (props) => {
    const { targetItem, text, ...restProps } = props;

    return (
      <div>
        <div>
          <Tooltip.Content
            text={text}
          />
        </div>
      </div>
    )
  }

  return (
    <Paper className="diagra_content">
      <Chart
        data={data}

      >
        <ArgumentScale factory={scalePoint} />
        <ArgumentAxis />
        <ValueAxis />

        <AreaSeries
          name="App Store"
          valueField="appStore"
          argumentField="month"
          seriesComponent={Area}
        />
        <ScatterSeries
          valueField="appStore"
          argumentField="month"
        />
        <Animation />
        <EventTracker />

        <Tooltip
          contentComponent={TooltipContent}
        />

      </Chart>
    </Paper>

  )

}












//donut graph



function DashHeading({ title }) {
  const options = [
    'None',
    'Atria',
    'Callisto',
  ];
  const ITEM_HEIGHT = 48;

  function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Paper id="heading_paper">
        <div class="dashhead">
          <div>
            {title}
          </div>
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Paper>
    );
  }

  return (
    <LongMenu />
  )
}



