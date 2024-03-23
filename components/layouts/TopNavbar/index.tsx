'use client';

import { postSignOut, useUser } from '@/remotes/user';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { redirect } from 'next/navigation';
import DateSelector from './DateSelector';
import LoginedUserDropdown from './LoginedUserDropdown';
import ViewSelector from './ViewSelector';

export default function TopNavBar() {
  const { data: user } = useUser();
  const handleSignOut = async () => {
    await postSignOut();
    return redirect('/login');
  };
  console.log({ user });

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">TODOY</p>
      </NavbarBrand>

      <NavbarContent justify="start">
        <ViewSelector />
      </NavbarContent>

      <NavbarContent justify="center">
        <DateSelector />
      </NavbarContent>

      <NavbarContent justify="end">
        {user?.email !== undefined ? (
          <LoginedUserDropdown
            userEmail={user.email}
            onSignOutClick={handleSignOut}
          />
        ) : (
          <NavbarItem>
            <Button as={Link} color="primary" href="/login" variant="flat">
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
