import React, { useState } from 'react'
import './UsersOpinions.css'
import Hero from '../../components/Hero/Hero';
import SeoComponnent from '../../components/SeoComponnent/SeoComponnent';
import PhotographersOpinions from '../../components/PhotographersOpinions/PhotographersOpinions';
import BridesOpinions from '../../components/BridesOpinions/BridesOpinions';



const UsersOpinions = () => {

    const [CustomerType, setCustomerType] = useState(null);

    const handleCustomerType = (CustomerType) => {
        setCustomerType(CustomerType);
    };

    const renderCustomerOpinions = () => {
        switch (CustomerType) {
            case 'photographers':
                return <PhotographersOpinions />;
            case 'brides':
                return <BridesOpinions />;

            default:
                return <PhotographersOpinions />;
        }
    };


    return (
        <div className='CustomerOpinions'>
            <SeoComponnent
                title="آسيا البركاتي / آراء العملاء "
                keyword=" أراء عملاءنا , رضى العملاء   "
                description=" A specialized page to display customer reviews."
                type="website"
            />
            <Hero pageName='آراء العملاء' />

            <div className='main_container' >
                <div className='HJ_TitleSection'>
                    <h1>رضى العملاء</h1>
                    <h4>أفضل دليل على نجاح العمل</h4>
                </div>
                <div className="CustomerTypes_filter">
                    <div className="photographers" onClick={() => handleCustomerType('photographers')}>آراء المصورات </div>
                    <div className="brides" onClick={() => handleCustomerType('brides')}>آراء العرائس </div>
                </div>
                
                <div className="opinions_details">
                    {renderCustomerOpinions()}
                </div>


            </div>

        </div>
    )
}

export default UsersOpinions




