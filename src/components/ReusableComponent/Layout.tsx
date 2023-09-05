import React, {ReactNode} from 'react';
import SideBar from "./SideBar";
import DashboardTopNav from "./DashboardTopNav";
import './Layout.scss'


interface IProps {
    children?: ReactNode
    page?: any
}

const Layout = ({children, page}:IProps) => {
    return (
        <div className="layout_container">
            {/* <div className="second_layout">
             <DashboardTopNav />
            </div>
            <div>{children}</div>
            <div style={{display: "flex"}}>
                <div className="top_container">
                    <SideBar/>
                </div>
            
            </div> */}

            <DashboardTopNav/>
            <div className="layout-row">
            <SideBar/>
            <div className="children">{children}</div>
            </div>
        </div>
    );
};

export default Layout;