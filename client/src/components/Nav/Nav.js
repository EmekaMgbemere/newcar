import React, { useState } from 'react';
import navicon from "../../components/images/4.png"
import Badge from '@mui/material/Badge';
import { common } from '@mui/material/colors';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Menu, MenuItem } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


function Nav({ newLoginId }) {

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

return(
       
<div id="navbar">            
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                  <a class="navbar-brand" href="/home">
                      <img src={navicon} alt='navicon' style={{width:"60px", height:"50px"}} class="d-inline-block align-text-top "/>
                  </a>
                <nav class="navbar bg-body-tertiary d-flex flex-end">
                      <div class="container-fluid">
                          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                              <div class="offcanvas-header">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                              </div>
                              <div class="offcanvas-body">
                                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                  
                                       <Paper
                                            component="form"
                                            sx={{display: 'flex', alignItems: 'center', width: 250, height: 35, marginX:2 }}
                                          >
                                            <IconButton sx={{ p: '10px' }} aria-label="menu">
                                              <MenuIcon />
                                            </IconButton>
                                            <InputBase
                                              sx={{ ml: 1, flex: 1 }}
                                              placeholder="Search"
                                              inputProps={{ 'aria-label': 'search google maps' }}
                                            />
                                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                              <SearchIcon />
                                            </IconButton>
                                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                          </Paper>
                                      <li class="nav-item">
                                          <Badge badgeContent={4} color="primary">
                                            <ShoppingBagOutlinedIcon color="action" fontSize="large" sx={{ color: common.black }}/>
                                          </Badge>
                                      </li>
                                      <li class="nav-item dropdown">
                                        <PersonOutlineOutlinedIcon onClick={handleClick} color="action" fontSize="large" sx={{ color: common.black, marginX:1 }}/>
                                            <Menu
                                              id="demo-positioned-menu"
                                              aria-labelledby="demo-positioned-button"
                                              anchorEl={anchorEl}
                                              open={open}
                                              onClose={handleClose}
                                              anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                              }}
                                              transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                              }}
                                            >
                                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                                              <MenuItem onClick={handleClose}>My account</MenuItem>
                                              <MenuItem onClick={handleClose}>Logout</MenuItem>
                                              {!newLoginId && (
                                                <MenuItem onClick={handleClose}>DASHBOARD</MenuItem>
                                              )}

                                            </Menu>
                                          
                                        </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                </nav>
            </div>
      </nav>
  </div>
)
}

export default Nav;
