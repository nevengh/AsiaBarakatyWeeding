import './Home.css'
import logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom'
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
                تصوير حفلات الزفاف 
            </Link>
            <Link to='https://www.instagram.com/asounaphotograph2?igsh=amt6ZWVsNHpmMzBm'>
                حساب انستغرام المطبعة
            </Link>
            <Link to='https://www.instagram.com/asiaphoto3?igsh=MTZmbXpiMWxxa2x6NQ==' className='instagram'>
                انستغرام التصوير 
            </Link>
            <Link to='/extraServices'>
                خدمات إضافية
            </Link>
            <Link to='#' className='instagram'>
                واتس آب 
            </Link>
            
        </div>
    </div>
  )
}

export default Home