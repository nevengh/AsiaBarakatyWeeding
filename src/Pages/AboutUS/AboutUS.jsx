
import Hero from '../../components/Hero/Hero'
import SeoComponnent from '../../components/SeoComponnent/SeoComponnent'
import './AboutUS.css'
const AboutUS = () => {
  return (
    <div className='aboutus'>
      <SeoComponnent
        title="آسيا البركاتي / من نحن "
        keyword="  تصوير الزواجات والمناسبات ,  لقطة مليئة بالمشاعر "
        description=" A specialized page to describe the company."
        type="website"
      />

      <Hero pageName='من نحن' />
      
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