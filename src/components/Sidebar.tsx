'use client';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants';
import Link from 'next/link';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PetsIcon from '@mui/icons-material/Pets';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

interface SideBarItem {
  id: number;
  label: string;
  url: string;
  icon: React.ReactNode;
}

const navbarItemList: SideBarItem[] = [
  { id: 1, label: 'Profile', url: ROUTES.USER_DASHBOARD, icon: <PersonIcon /> },
  {
    id: 2,
    label: 'Pet Profiles',
    url: ROUTES.USER_DASHBOARD_PET_PROFILE,
    icon: <PetsIcon />,
  },
  {
    id: 3,
    label: 'Booking History',
    url: ROUTES.USER_DASHBOARD_BOOKING_HISTORY,
    icon: <CalendarTodayIcon />,
  },
  {
    id: 4,
    label: 'Services History',
    url: ROUTES.USER_DASHBOARD_SERVICES_HISTORY,
    icon: <ContentCutIcon />,
  },
  {
    id: 5,
    label: 'Purchase History',
    url: ROUTES.USER_DASHBOARD_PURCHASE_HISTORY,
    icon: <EventAvailableIcon />,
  },
];

export const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className='h-full w-[300px] border-r px-2'>
      <List className='mt-16'>
        {navbarItemList.map((item) => (
          <ListItem
            className={
              pathName !== item.url
                ? 'my-2 w-full overflow-hidden rounded-lg hover:bg-green-300'
                : 'pointer-events-none my-2 w-full overflow-hidden rounded-lg bg-green-400 text-white'
            }
            key={item.id}
            disablePadding
          >
            <Link className='w-full' href={item.url}>
              <ListItemButton className='gap-2'>
                {item.icon}
                <ListItemText className='flex-1' primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
