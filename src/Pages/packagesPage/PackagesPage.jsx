import { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import './packagesPage.css';
import SixHourOffer from '../../components/SixHourOffer/SixHourOffer';
import TenHours from '../../components/TenHours/TenHours';
import SilverPackage from '../../components/SilverPackage/SilverPackage';
import GoldPackage from '../../components/GoldPackage/GoldPackage';
import DimondPackage from '../../components/DimondPackage/DimondPackage';
import VIP from '../../components/VIP/VIP';

const PackagesPage = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
  
    const handlePackageClick = (packageName) => {
        setSelectedPackage(packageName);
    };

    const renderPackageDetails = () => {
        switch (selectedPackage) {
            case 'bronze':
                return <TenHours />;
            case 'silver':
                return <SilverPackage/>;
            case 'gold':
                return <GoldPackage/>;
            case 'diamond':
                return <DimondPackage />;
            case 'vip':
                return <VIP/>;
            case 'classic':
                return <SixHourOffer/>
            default:
                return <SixHourOffer/>;
        }
    };

    return (
        <>
            <Hero pageName='الباقات' />
            <div className="packages_filter">
                <div className="classicPackage" onClick={() => handlePackageClick('classic')}>الباقة الكلاسيكية</div>
                <div className="bronzePackage" onClick={() => handlePackageClick('bronze')}>الباقة البرونزية</div>
                <div className="silverPackage" onClick={() => handlePackageClick('silver')}>الباقة الفضية</div>
                <div className="goldPackage" onClick={() => handlePackageClick('gold')}>الباقة الذهبية</div>
                <div className="dimondPackage" onClick={() => handlePackageClick('diamond')}>الباقة الألماسية</div>
                <div className="vipPackage" onClick={() => handlePackageClick('vip')}>VIP</div>
            </div>
            <div className="package_details">
                {renderPackageDetails()}
            </div>
        </>
    );
};

export default PackagesPage;
