import React, {ReactNode, useState} from 'react';
import Bell from '../../asset/Vector.jpg';
import Logo from '../../asset/Group.svg';
import Image from '../../asset/image 4.svg';
import './dashboardTopNav.scss';
import dropdown from '../../asset/np_dropdown_615120_000000 1.svg';
import { NavLink } from 'react-router-dom';

interface DashboardTopNavProps {
    children?: ReactNode;
    page?: string;
}

const DashboardTopNav: React.FC<DashboardTopNavProps> = ({ children }) => {
    const [searchText, setSearchText] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSearch = () => {
        // Implement your search logic here, e.g., make an API request
        console.log('Searching for:', searchText);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="main_container">
            <div className="left_side">
                <div className="logo">
                    <NavLink to="/">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                </div>
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="Search for anything"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="search_icon" onClick={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
            <div className="right_side">
                <div className="docs">
                    <a href="https://www.youtube.com/watch?v=VzWBLj_CfpE">Docs</a>
                </div>
                <div className="bell">
                    <img src={Bell} alt="Bell" />
                </div>
                <div className="image">
                    <img src={Image} alt="Image" />
                    <div className="paragraph">
                        <p>Adedeji</p>
                        <div className="dropdown" onClick={toggleDropdown}>
                            <img src={dropdown} alt="Dropdown" />
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <a href="#">Item 1</a>
                                <a href="#">Item 2</a>
                                <a href="#">Item 3</a>
                            </div>
                        )}
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default DashboardTopNav;
