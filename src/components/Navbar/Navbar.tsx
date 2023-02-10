import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
import EarthLogo from '../../assets/images/earth_yarnovin.png';
import DropdownList from './DropdownList';

const brandStyle = { color: '#ffffff' };

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div dir='rtl'>
      <Navbar color="dark" dark expand='sm'>
        <NavbarBrand style={brandStyle}><img src={EarthLogo} alt="yarnovin-logo" width={25} /> زلـزله یـار</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <DropdownList />
            <a href="https://yarnovin.ir">
              <Button className='other_projects' color='success' outline>
                سایر سرویس ها
              </Button>
            </a>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
