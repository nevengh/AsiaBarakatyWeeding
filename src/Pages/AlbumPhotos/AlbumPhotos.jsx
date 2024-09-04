import React from 'react'
import './AlbumPhotos.css'
import Hero from '../../components/Hero/Hero'
import Img1 from './../../assets/Albums/1.jpg'
import Img2 from './../../assets/Albums/2.jpg'
import Img3 from './../../assets/Albums/3.jpg'
import Img4 from './../../assets/Albums/4.jpg'
import Img5 from './../../assets/Albums/5.jpg'
import Img6 from './../../assets/Albums/6.jpg'
import Img7 from './../../assets/Albums/7.jpg'
import Img8 from './../../assets/Albums/8.jpg'
import Img9 from './../../assets/Albums/9.jpg'
import Img10 from './../../assets/Albums/10.jpg'
import Img11 from './../../assets/Albums/11.jpg'
import Img12 from './../../assets/Albums/12.jpg'
import Img13 from './../../assets/Albums/13.jpg'
import Img14 from './../../assets/Albums/14.jpg'
import Img15 from './../../assets/Albums/15.jpg'
import Img16 from './../../assets/Albums/16.jpg'
import Img17 from './../../assets/Albums/17.jpg'
import Img18 from './../../assets/Albums/IMG_0636.jpg'
import Img19 from './../../assets/Albums/19.jpg'
import Img20 from './../../assets/Albums/20.jpg'
import Img21 from './../../assets/Albums/21.jpg'
import Img22 from './../../assets/Albums/22.jpg'
import Img23 from './../../assets/Albums/23.jpg'
import Img24 from './../../assets/Albums/24.jpg'
import Img25 from './../../assets/Albums/25.jpg'
import Img26 from './../../assets/Albums/26.jpg'
import SeoComponnent from '../../components/SeoComponnent/SeoComponnent'

const AlbumPhotos = () => {
    return (
        <div className='AlbumPhotos'>
            <SeoComponnent
                title="آسيا البركاتي /  تصوير حفلات الزفاف  "
                keyword="  يوم زفافك ,   حدث يستحق ان يتم التقاطه بأجمل طريقة ممكنة   "
                description=" A specialized page for displaying photos from weddings."
                type="website"
            />
            <Hero pageName='  تصوير حفلات الزفاف ' />
            <div className='main_container'>
                <div className='HJ_Album'>
                    <div className='Title'>
                        <h2>  يوم زفافك هو حدث يستحق ان يتم التقاطه بأجمل طريقة ممكنة</h2>
                    </div>
                    <div className='HJ_groupImgs'>
                        <img src={Img1} alt="Image Wedding" />
                        <img src={Img2} alt="Image Wedding" />
                        <img src={Img3} alt="Image Wedding" />
                    </div>

                    <div className='HJ_groupImgs'>
                        <img src={Img4} alt="Image Wedding" />
                        <img src={Img5} alt="Image Wedding" />
                        <img src={Img6} alt="Image Wedding" />
                    </div>

                    <div className='HJ_groupImgs'>
                        <img src={Img7} alt="Image Wedding" />
                        <img src={Img8} alt="Image Wedding" />
                        <img src={Img9} alt="Image Wedding" />
                    </div>

                    <div className='HJ_groupImgs'>
                        <img src={Img10} alt="Image Wedding" />
                        <img src={Img11} alt="Image Wedding" />
                        <img src={Img12} alt="Image Wedding" />
                    </div>


                    <div className='HJ_groupImgs'>
                        <img src={Img13} alt="Image Wedding" />
                        <img src={Img14} alt="Image Wedding" />
                        <img src={Img15} alt="Image Wedding" />
                    </div>


                    <div className='HJ_groupImgs'>
                        <img src={Img16} alt="Image Wedding" />
                        <img src={Img17} alt="Image Wedding" />
                        <img src={Img18} alt="Image Wedding" />
                    </div>

                    <div className='HJ_groupImgs'>
                        <img src={Img19} alt="Image Wedding" />
                        <img src={Img20} alt="Image Wedding" />
                        <img src={Img21} alt="Image Wedding" />
                    </div>

                    <div className='HJ_groupImgs'>
                        <img src={Img22} alt="Image Wedding" />
                        <img src={Img23} alt="Image Wedding" />
                        <img src={Img24} alt="Image Wedding" />
                    </div>

                    <div className='HJ_groupImgs'>
                        <img src={Img25} alt="Image Wedding" />
                        <img src={Img26} alt="Image Wedding" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AlbumPhotos