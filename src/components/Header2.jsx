import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import InsertDriveFileSharpIcon from '@mui/icons-material/InsertDriveFileSharp';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CalculateIcon from '@mui/icons-material/Calculate';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TvIcon from '@mui/icons-material/Tv';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './nav.css';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Scouting from './Scouting';
import User from './User';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Header1() {
  const theme = useTheme();
  const [open, setOpen] = useState();
  const [close, setClose] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
    setClose(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomDrawer variant="permanent" open={open}>
        {/* <div id="nevtop"><b>MAP MY CROP</b></div> */}
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['1', '2', '3', '4 ', '5', '6'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  setSelectedItem(text);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 10 === 0 ? (
                    <MenuIcon />
                  ) : index % 10 === 1 ? (
                    <CalculateIcon />
                  ) : index % 10 === 2 ? (
                    <LanguageSharpIcon />
                  ) : index % 10 === 3 ? (
                    <InsertDriveFileSharpIcon />
                  ) : index % 10 === 4 ? (
                    <GridViewOutlinedIcon />
                  ) : index % 10 === 5 ? (
                    <GroupsOutlinedIcon />
                  ) : index % 10 === 6 ? (
                    <ListIcon />
                  ) : index % 10 === 7 ? (
                    <CloudUploadIcon />
                  ) : index % 10 === 8 ? (
                    <ListIcon />
                  ) : index % 10 === 9 ? (
                    <LogoutIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </CustomDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>{/* Your content goes here */}</Typography>
        {selectedItem === 'MY Files' && <Scouting />}
        {selectedItem === 'Map' && <Dashboard />}
        {selectedItem === 'User' && <User />}
      </Box>
    </Box>
  );
}
