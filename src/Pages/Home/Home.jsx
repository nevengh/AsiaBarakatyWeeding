import './Home.css'
import logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
const Home = () => {
  return (
    <div className='home'>
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
                الألبومات 
            </Link>
            <Link to='/extraServices'>
                خدمات إضافية
            </Link>
            <Link to='/extraServices'>
                موقع المطبعة
            </Link>
            <Link to='https://www.instagram.com/asiaphoto3?igsh=MTZmbXpiMWxxa2x6NQ==' className='instagram'>
                انستغرام التصوير 
                <FaInstagram/>
            </Link>
            <Link to='#' className='instagram'>
                واتس آب 
                <FaWhatsapp/>
            </Link>
            
        </div>
    </div>
  )
}

export default Home