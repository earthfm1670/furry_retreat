'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PawPrintIcon as Paw, LogIn, LogOut, ShoppingCart } from 'lucide-react';
import {
  Button as MuiButton,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';

const GreenButton = styled(MuiButton)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userImage, setUserImage] = useState<string>('');
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // replace 3 with data of items in cart
    const cartItems = 3;
    setCartItemsCount(cartItems);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleMenuClose();
  };
  return (
    <>
      <nav className='h-16 bg-green-500 text-white shadow-md'>
        <div className='container mx-auto flex h-full items-center justify-between px-6 py-3'>
          <Link href='/' className='flex items-center space-x-2'>
            <Paw className='h-8 w-8' />
            <span className='text-xl font-bold'>Furry Retreat</span>
          </Link>
          {/* right side menus */}
          <div className='flex items-center space-x-4'>
            <Link
              href='/booking'
              className='transition-colors hover:text-green-200'
            >
              Booking
            </Link>
            <Link
              href='/services'
              className='transition-colors hover:text-green-200'
            >
              Services
            </Link>
            <Link
              href='/products'
              className='transition-colors hover:text-green-200'
            >
              Products
            </Link>

            <Link
              href='/cart'
              className='relative transition-colors hover:text-green-200'
            >
              <ShoppingCart className='h-8 w-8' />
              {cartItemsCount > 0 && (
                <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Login button or user image */}
            {isLoggedIn ? (
              <>
                <IconButton
                  onClick={handleMenuOpen}
                  size='small'
                  sx={{ ml: 2, p: 0 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspoup='true'
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar
                    src={userImage}
                    alt='User profile'
                    sx={{ width: 32, height: 32 }}
                  >
                    <PersonIcon />
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  id='account-menu'
                  open={open}
                  onClose={handleMenuClose}
                  onClick={handleMenuClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem component={Link} href='/dashboard'>
                    Dashboard
                  </MenuItem>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <LogOut className='mr-2 h-4 w-4' />
                    <span>Log out</span>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className='flex items-center space-x-2'>
                <GreenButton
                  size='small'
                  onClick={handleLogin}
                  startIcon={<LogIn />}
                >
                  Log in
                </GreenButton>
                <GreenButton
                  size='small'
                  sx={{
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <Link href='/register'>
                    <span>Register</span>
                  </Link>
                </GreenButton>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
