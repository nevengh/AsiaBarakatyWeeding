
import Hero from '../../components/Hero/Hero'
import './AboutUS.css'

const AboutUS = () => {
  return (
    <div className='aboutus'>
      <Hero pageName='من نحن'/>
      <div className="hero_text">
        <p>
        شركة متخصصة في تصوير الزواجات والمناسبات بخبرة أكثر من 10 سنوات نحن لا
        نلتقط لقطات مجرّدة بل نصنع من كُل لحظة جميلة لقطة مليئة بالمشاعر لتعيش
        معكم للأبد 
        </p>
      </div>
    </div>
  )
}

export default AboutUS