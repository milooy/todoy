import { Link, NavbarItem } from '@nextui-org/react';

export default function ViewSelector() {
  return (
    <>
      <NavbarItem>
        <Link color="foreground" href="#">
          D
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          M
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          W
        </Link>
      </NavbarItem>
    </>
  );
}
