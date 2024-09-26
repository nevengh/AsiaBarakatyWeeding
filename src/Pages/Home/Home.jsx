import './Home.css'
import logo from '../../assets/Untitled-1.png'
import { Link } from 'react-router-dom'
import Video1 from './../../assets/videos/VID-20240902-WA0001.mp4'
import Video2 from './../../assets/videos/VID-20240902-WA0002.mp4'
import Video4 from './../../assets/videos/VID-20240902-WA0004.mp4'
import Video5 from './../../assets/videos/VID-20240902-WA0005.mp4'
import Video6 from './../../assets/videos/VID-20240902-WA0006.mp4'
import SeoComponnent from '../../components/SeoComponnent/SeoComponnent'


const Home = () => {
    return (
        <div className='home'>

            <SeoComponnent
                title="آسيا البركاتي / الصفحة الرئيسية"
                keyword=" البكجات , اراء العملاء , من نحن, انستغرام التصوير "
                description=" A page containing the basic tabs of the site, along with videos from weddings."
                type="website"
            />
            
            <div className="logo">
                <img src={logo} alt="Asia Al barakaty Logo" />
            </div>
            <div className="nav_link_btn">
                <Link to='/about-us'>
                    من نحن
                </Link>
                <Link to='/packages'>
                    البكجات
                </Link>
                <Link to='/user-opinion'>
                    آراء العملاء
                </Link>
                <Link to='/albums'>
                    تصوير حفلات الزفاف
                </Link>
                <Link to='https://www.instagram.com/asounaphotograph2?igsh=amt6ZWVsNHpmMzBm'>
                    حساب إنستقرام المطبعة
                </Link>
                <Link to='https://www.instagram.com/asiaphoto3?igsh=MTZmbXpiMWxxa2x6NQ==' className='instagram'>
                    إنستقرام التصوير
                </Link>
                <Link to='/extraServices'>
                    خدمات إضافية
                </Link>
                <Link to='https://iwtsp.com/971523500607' className='instagram'>
                    واتس 
                </Link>
                <Link to='https://snapchat.com/t/EhgU8aJO' className='instagram'>
                    سناب شات
                </Link>

            </div>

            <div className='Videos'>
                <div className='main_container'>
                    <div className='HJ_groupVideos'>
                        <video autoPlay loop muted >
                            <source src={Video1} type="video/mp4" />
                        </video>

                        <video autoPlay loop muted>
                            <source src={Video2} type="video/mp4" />
                        </video>

                    </div>


                    <div className='HJ_group2Videos'>
                        <video autoPlay loop muted>
                            <source src={Video4} type="video/mp4" />
                        </video>
                        <video autoPlay loop muted>
                            <source src={Video5} type="video/mp4" />
                        </video>
                        <video autoPlay loop muted>
                            <source src={Video6} type="video/mp4" />
                        </video>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Home