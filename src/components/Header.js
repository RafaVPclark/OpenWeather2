import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function Header() {
    return (
        <header>
            <Nav justified tabs>
                <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        Disabled Link
                    </NavLink>
                </NavItem>
            </Nav>
        </header>
    );
}

export default Header;