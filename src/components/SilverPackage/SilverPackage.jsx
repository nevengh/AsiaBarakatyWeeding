import "./SilverPackage.css";
import { motion } from "framer-motion";
import { FaCamera, FaVideo } from "react-icons/fa";
const SilverPackage = () => {
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
      className="SixHourOffer"
      id="silver_hour"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={sectionVariants}
    >
      <div className="section_header">
        <h1 className="title_header">الباقة الفضية</h1>
        <h3 className="sub_title">للملكة أو الحنة</h3>
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
            <li>مدة التصوير 4 ساعات</li>
            <h3>محتويات الباقة</h3>
            <p className="contain_package_text">فوتو + فيديو</p>
            <h3>تصوير الفوتو يشمل </h3>
            <li>استلام البومين فاخرين من خامات ايطالية من اختيار العروس</li>
            <li>
              البوم مقاس 10*10 يشمل 40 صورة للعرسان شامل التفاصيل مع المعالجة
            </li>
            <li>البوم مقاس A5 يشمل طباعة 15 صورة للأهل مع لمعالجة</li>

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

          <ul className="choices_list">
          <h3>الفيديو يشمل :</h3>
            <li>الزفه,التلبيس</li>
            {/* <li>التلبيس</li> */}
            <li>تقطيع الكيكه</li>
            <li>تفاصيل العروسة</li>
            <li>عقد القران إن وجد</li>
            <li>استلام فيديو اساسي</li>
            <li>استلام فيديو هايلايت</li>
            <li>تصوير تفاصيل المكان</li>
          </ul>
        </motion.div>
      </motion.div>
      {/* <p className="Price">سعر الباقة:5,400 درهم</p> */}
    </motion.div>
  );
};

export default SilverPackage;
