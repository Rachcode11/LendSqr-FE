import React from 'react';
import "./SideBar.scss";
import Home from '../../asset/home 1.svg';
import { SidebarData } from './SidebarData';






const SideBar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sub_sidebar">
                {
                    SidebarData.map((item) => (
                        <div key={item.id} className="dash">
                            <div style={{display: "flex"}} >
                                <h3 style={{color: "rgba(33, 63, 125, 1)", marginTop: "1rem"
                                }} className="dash">{item.name}</h3>
                                <img src={item.image} style={{marginLeft: ".5rem", marginTop:"0rem"}} alt=""/>
                            </div>
                            <div>
                                <div className="dashboard">
                                    <img src={Home} alt=""/>
                                    <h3 className="dash">Dashboard</h3>
                                </div>
                                {item.subItem.map((sub)=>(
                                        <>
                                            <div key={sub.id} className="dashboard">
                                                <h3 className="dash">{sub.name}</h3>
                                            </div>
                                            <div>
                                                {sub.subItems.map((x)=> (
                                                    <div key={x.id} className="decision">
                                                        <img src={x.image} alt=""/>
                                                        <h3>{x.name}</h3>
                                                    </div>
                                                ))}
                                            </div>
                                        </>

                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SideBar;
