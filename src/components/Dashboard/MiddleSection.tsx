import React from 'react';
import './MiddleSection.scss'
import Layout from "../ReusableComponent/Layout";
import Card from "../ReusableComponent/Card";
import MiddleSectionTable from './MiddleSectionTable';



const MiddleSection = () => {
    return (
        <div className="container">
            <Layout>
                    <div className="content">
                        <p>Users</p>
                        <div><Card/></div>
                        <MiddleSectionTable/>
                    </div>
            </Layout>
        </div>
    );
};

export default MiddleSection;