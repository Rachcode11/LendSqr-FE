import React from 'react';
import DashboardTopNav from "./DashboardTopNav";
import dropdown from '../../asset/dropdown.svg';
import "./SideBar.scss"
import briefcase from '../../asset/briefcase 1.svg'
import Home from '../../asset/home 1.svg'



const SideBar = () => {
    return(
        <div className="sidebar">
            <DashboardTopNav/>
            <div className="sub_sidebar">
                <div className="switch_dropdown">
                    <div className="briefcase">
                        <img src={briefcase} alt=""/>
                    </div>
                    <h3>Switch Organization <span> <img src={dropdown} alt=""/></span></h3>
                </div>
                <div className="dashboard">
                    <div className="home">
                        <img src={Home} alt=""/>
                    </div>
                    <h3 className="dash">Dashboard</h3>
                </div>
                <div className="customer">
                    <h2 className="custom">CUSTOMER</h2>
                </div>
            </div>

        </div>
    )
}
export default SideBar