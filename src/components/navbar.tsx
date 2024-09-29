import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Nav className="w-100 d-flex justify-content-start">

        <Nav.Link href="" id="logo">ChurningCanada</Nav.Link>

        <NavDropdown title="Credit Cards" id="basic-nav-dropdown">
          <NavDropdown.Item href="#credit-cards/top-credit-card-offers">
            Top Credit Card Offers 🍁
          </NavDropdown.Item>
          <NavDropdown.Item href="#credit-cards/compare-rebates">
            Compare Rebates
          </NavDropdown.Item>
          <NavDropdown.Item href="#credit-cards/fx-free-cards">
            FX Free Cards
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Guides and Rules" id="basic-nav-dropdown">
          <NavDropdown.Item href="#guides-and-rules/getting-started">
            Getting Started
          </NavDropdown.Item>
          <NavDropdown.Item href="#guides-and-rules/terms-and-definitions">
            Terms and Definitions
          </NavDropdown.Item>
          <NavDropdown.Item href="#guides-and-rules/getting-business-credit-cards">
            Getting Business Credit Cards
          </NavDropdown.Item>
          <NavDropdown.Item href="#guides-and-rules/credit-card-tracking-template">
            Credit Card Tracking Template
          </NavDropdown.Item>
          <NavDropdown.Item href="#guides-and-rules/checking-your-credit-score-and-history">
            Checking your Credit Score and History
          </NavDropdown.Item>
          <NavDropdown.Item href="#guides-and-rules/multiplayer-mode">
            Multiplayer Mode
          </NavDropdown.Item>
          <NavDropdown.Item href="#guides-and-rules/refundable-hotel-trick">
            Refundable Hotel Trick
          </NavDropdown.Item>
          <NavDropdown.Item href="#guides-and-rules/checking-aeroplan-edq">
            Checking Aeroplan EDQ
          </NavDropdown.Item>
          <NavDropdown.Item href="#guides-and-rules/checking-fico-score">
            Checking FICO Score
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="U.S. Churning" id="basic-nav-dropdown">
          <NavDropdown.Item href="#us-churning/starter-guide">
            Starter Guide
          </NavDropdown.Item>
          <NavDropdown.Item href="#us-churning/get-an-itin">
            Get an ITIN
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Points" id="basic-nav-dropdown">
          <NavDropdown.Item href="#points/bank-programs">
            Bank Programs
          </NavDropdown.Item>
          <NavDropdown.Item href="#points/action-programs">
            Action Programs
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="User Referrals" id="basic-nav-dropdown">
          <NavDropdown.Item href="#user-referrals/referral-policies">
            Referral Policies
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#login">Login</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
