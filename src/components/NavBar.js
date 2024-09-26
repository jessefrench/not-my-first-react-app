'use client';

import React from 'react';
import { useAuth } from '@/utils/context/authContext';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '@/utils/auth';

export default function NavBar() {
  const { user } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/" className="navbar-brand">
          🏠 Not My First React App
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" href="/form">
              ➕ CREATE A FACT
            </Link>
            <Link className="nav-link" href={`/response/${user.uid}?value=Yes`}>
              ✅ YES
            </Link>
            <Link className="nav-link" href={`/response/${user.uid}?value=No`}>
              ❌ NO
            </Link>
          </Nav>
          <Button variant="danger" onClick={signOut}>
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
