// NavBar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Dropdown from '../commonComponent.js/Dropdown';
import "../styles/Navbar.css";

const NavBar = () => {
    const userOptions = [
        { value: "Administrator", label: "Administrator" },
        { value: "General", label: "General" },
      ];
      const [selectedUser, setSelectedUser] = useState(
        userOptions[0]
      );
      const UserChangeHandler = (selectedOption) => {
        setSelectedUser(selectedOption)
    }
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavLink to="/" className="navbar-item" activeClassName="active">
                    <Dropdown
                        customClassName="commonDropdown"
                        options={userOptions}
                        changeHandler={UserChangeHandler}
                        selectedDropdownValue={selectedUser}
                    />
                </NavLink>
            </div>
            <div className="navbar-right">
                <NavLink to="/HubAI-aaS" className="navbar-item" activeClassName="active">
                    HubAI-aaS
                </NavLink>
                <NavLink to="/Experiments" className="navbar-item" activeClassName="active">
                    Experiments
                </NavLink>
                <NavLink to="/Configs" className="navbar-item" activeClassName="active">
                    Configs
                </NavLink>
                <NavLink to="/tools" className="navbar-item active" activeClassName="active">
                    Tools
                </NavLink>
                <NavLink to="/" className="navbar-item profile-icon" activeClassName="active">
                    <PersonIcon/>
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
