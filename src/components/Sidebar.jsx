import { useContext, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './nav.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from './Provider';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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

export default function Sidebar() {
  const { calculatorHandler, openCalculator } = useContext(AuthContext);
  const location = useLocation();
  const currentPage = location.pathname;
  console.log('currentPage : ', currentPage);
  const theme = useTheme();
  const [open, setOpen] = useState();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomDrawer variant="permanent" open={open}>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <img
            src="/sidebaricons/Menu.png"
            alt="menu"
            style={{ marginTop: '35px' }}
          />
          <div style={{ marginTop: '25px', cursor: 'pointer' }}>
            {currentPage === '/map' && (
              <img
                src="/sidebaricons/Calculator.png"
                alt="calculator"
                onClick={() => calculatorHandler()}
              />
            )}
          </div>
          <Link style={{ marginTop: '15px' }} to="/map">
            <img src="/sidebaricons/map.png" alt="map" />
          </Link>
          <Link style={{ marginLeft: '5px' }} to="/documents">
            <img src="/sidebaricons/files.png" alt="files" />
          </Link>
          <Link
            style={{ marginLeft: '5px', marginTop: '-6px' }}
            to="/dashboard"
          >
            <img src="/sidebaricons/dashboard.png" alt="dashboard" />
          </Link>
          <Link style={{ marginLeft: '5px', marginTop: '-6px' }} to="/users">
            <img src="/sidebaricons/users.png" alt="users" />
          </Link>
        </div>
        <Divider />
      </CustomDrawer>
    </Box>
  );
}
