import './Home.css'
import logo from '../../assets/photo_2024-08-23_11-40-48.ico'
import { Link } from 'react-router-dom'
import { FaInstagram, FaSnapchat } from 'react-icons/fa'
const Home = () => {
  return (
    <div className='home'>
        <div className="logo">
            <img src={logo} alt="" />
            {/* <h1>آسيا البركاتي</h1> */}
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
            <Link to='/extraServices' className='instagram'>
                انستغرام التصوير 
                <FaInstagram/>
            </Link>
            <Link to='/extraServices' className='instagram'>
                سناب شات 
                <FaSnapchat/>
            </Link>
            
        </div>
    </div>
  )
}

export default Home