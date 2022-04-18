import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import './index.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DehazeIcon from '@mui/icons-material/Dehaze'
import logo from '../../assets/apis_logo.png'
import ReceiptIcon from '@mui/icons-material/Receipt'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ReviewsIcon from '@mui/icons-material/Reviews'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SettingsIcon from '@mui/icons-material/Settings'
import Divider from '@mui/material/Divider'
import Header from './Header'
import { HashRouter, Link } from 'react-router-dom'
type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function SwipeableTemporaryDrawer(props: any) {
  const { children } = props

  const [state, setState] = React.useState({
    left: false,
  })
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  const [openOrders, setOpenOrders] = React.useState(true)

  const OrdersClick = () => {
    setOpenOrders(!openOrders)
  }
  const [openCustomers, setOpenCustomers] = React.useState(true)

  const CustomersClick = () => {
    setOpenCustomers(!openCustomers)
  }
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 430 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="topBox">
        <div className="IconBox">
          <DehazeIcon className="Icon"></DehazeIcon>
        </div>
        <div className="logoImg">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="ListBox">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <HashRouter>
              <Link to="/trending">
                <ListItemText primary="Overview" />
              </Link>
            </HashRouter>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ShoppingBagIcon />
            </ListItemIcon>
            <ListItemText primary="Product" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={OrdersClick}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
            {openOrders ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openOrders} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={CustomersClick}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            {openCustomers ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCustomers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <ReviewsIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Reviews" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Checkout" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
        <div className="TechnicalBox">
          <Divider variant="middle" className="Divider" />
          <div className="TechnicalText">Technical help</div>
          <div className="ContactText">Contact us</div>
          <div className="backBox">
            <div className="ReleaseText">Release you maximal</div>
            <div className="potentialText">potential software.</div>

            <Button className="btn" variant="contained">
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </div>
    </Box>
  )

  return (
    <div>
      <React.Fragment>
        <div>
          <Header openMenu={toggleDrawer('left', true)}></Header>
        </div>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
      <div>{children}</div>
    </div>
  )
}
