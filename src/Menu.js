import React from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Menu = ()=>{
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Link to="/" href="#home">SHOP ÀTÀRÍ</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to='/new' className='Nav'>New</Link>
      <NavDropdown title="Brands" id="collasible-nav-dropdown">
        <Link to='/adidas' className='dropdown-item'>Adidas</Link>
        <Link to='/nike' className='dropdown-item'>Nike</Link>
        <Link to='/nike' className='dropdown-item'>Under Amour</Link>
        <Link to='/new' className='dropdown-item'>Cone</Link>
      </NavDropdown>
      <NavDropdown title="Clothings" id="collasible-nav-dropdown">
      <Link to='/adidas' className='dropdown-item'>Adidas</Link>
      <Link to='/nike' className='dropdown-item'>Nike</Link>
      <Link to='/nike' className='dropdown-item'>Under Amour</Link>
      <Link to='/new' className='dropdown-item'>Cone</Link>
      </NavDropdown>
      <NavDropdown title="Clothings" id="collasible-nav-dropdown">
      <Link to='/adidas' className='dropdown-item'>Adidas</Link>
      <Link to='/nike' className='dropdown-item'>Nike</Link>
      <Link to='/nike' className='dropdown-item'>Under Amour</Link>
      <Link to='/new' className='dropdown-item'>Cone</Link>
      </NavDropdown>
      <NavDropdown title="Accessories" id="collasible-nav-dropdown">
      <Link to='/adidas' className='dropdown-item'>Adidas</Link>
      <Link to='/nike' className='dropdown-item'>Nike</Link>
      <Link to='/nike' className='dropdown-item'>Under Amour</Link>
      <Link to='/new' className='dropdown-item'>Cone</Link>
      </NavDropdown>
      <NavDropdown title="Skateboarding" id="collasible-nav-dropdown">
      <Link to='/adidas' className='dropdown-item'>Adidas</Link>
      <Link to='/nike' className='dropdown-item'>Nike</Link>
      <Link to='/adidas' className='dropdown-item'>Under Amour</Link>
      <Link to='/new' className='dropdown-item'>Cone</Link>
      </NavDropdown>
      <Nav.Link href="#features">Shoes</Nav.Link>
      <Nav.Link href="#features">Sales</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>


    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
        <Link to='/account' className='Nav'>Account</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default Menu
