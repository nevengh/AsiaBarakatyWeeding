import './VIP.css'
import { motion } from "framer-motion";
import { FaCamera, FaVideo } from "react-icons/fa";
const VIP = () => {
   // Animation variants for different sections
   const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="TenHours"
      id="Vip_hour"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={sectionVariants}
    >
      <div className="section_header">
        <h1 className="title_header">باقة الVIP</h1>
        <h3 className="sub_title">للتصوير السينمائي</h3>
      </div>

      <motion.div
        className="photography"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={sectionVariants}
      >
        <div className="camera_icon">
          <motion.div
            className="left_line"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
          <motion.div variants={iconVariants}>
            <FaCamera />
          </motion.div>
          <motion.div
            className="right_line"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
        </div>
        <motion.div
          className="photography_list"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={sectionVariants}
        >
          
          <ul className="choices_list">
            <li>مدة التصوير 10 ساعات</li>
              <h3>محتويات الباقة</h3>
              <p className='contain_package_text'>فوتو + فيديو</p>
              <h3>تصوير الفوتو يشمل  :</h3>
              <li> تصوير زواج النساء بعدد لا محدود من الصور</li>
            <li>  استلام 3 ألبومات ايطالية فاخرة من اختيار العروس</li>
            <li>البوم مقاس 30*80 يشمل على 100 صورة للعرسان شامله التفاصيل مع المعالجة</li>
            <li>البوم مقاس A4 بانوراما يشمل طباعة 20 صورة للأصدقاء مع المعالجة</li>
            
           
              <li>لوحة خشبية للعرسان مقاس A3</li>
              <li>تصوير فوتو لزواج الرجال مع استلام الصور عبر الرابط</li>
              <li>استلام فلاش بكامل اللقطات الملتقطة</li>
              <li>استلام صورة على لوحة خشبية</li>
            
          </ul>
          <p className="no_limit_text">(عدد لا محدود من الصور )</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="cinema"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={sectionVariants}
      >
        <div className="camera_icon">
          <motion.div
            className="left_line"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
          <motion.div variants={iconVariants}>
            <FaVideo />
          </motion.div>
          <motion.div
            className="right_line"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
        </div>
        <motion.div
          className="photography_list"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={sectionVariants}
        >
          <h3>الفيديو يشمل</h3>
          
          <ul className="choices_list">
            <li>تقطيع الكيكة</li>
            <li>تصوير زواج النساء والرجال</li>
            <li>تصوير تفاصيل المكان</li>
            <li>تصوير تفاصيل العروسه-تجهيزات العروسه</li>
            <li>لقطات عفوية ولقاءات مع الاهل والأصدقاء</li>
            <li>زفة اولى *بري زفه* زفة العروسة-زفة العريس</li>
            <li>عرض تشويقي للعروس على شاشة بروجيكتر ينعرض للضيوف قبل زفة العروسة</li>
            <li>فيديو كرين لكامل الزواج</li>
            
            <li>تصوير زواج الرجال(فيديو ارضي-فيديو كرين لكامل الزواج)</li>
                {/* <h3>مع استلام عدد فيديوهات</h3> */}
            
                <li>استلام فيديو أساسي لزواج النساء</li>
                <li>استلام فيديو هايلات لزواج النساء</li>
                <li>استلام فيديو كرين كامل لزواج النساء</li>
                <li>استلام فيديو اساسي لزواج الرجال</li>
                <li>استلام فيديو كرين كامل لزواج الرجال</li>
                <li>استلام فيديو العرض التشويقي للعروس</li>
            
            
          </ul>
        </motion.div>
      </motion.div>
       {/* <p className="Price">سعر الباقة:23,300 درهم</p> */}
    </motion.div>
  );
}

export default VIP;