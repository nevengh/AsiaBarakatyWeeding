
import { FaFile } from 'react-icons/fa'
import './ImportantInfo.css'
import { motion, useInView } from "framer-motion";
import React from 'react';


const ImportantInfo = () => {
    const listRef = React.useRef(null);
    const isListInView = useInView(listRef, { once: true, amount: 0.2 });
    const listVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.2
          }
        }
      };
      
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  return (
    <div className='Important_info'>
        {/* ملاحظات مهمة للعميل */}
      <div className="important_info">
        <div className="section_header">
          <h1 className="title_header">ملاحظات مهمة للعميل</h1>
        </div>
        <div className="camera_icon">
          <div className="left_line"></div>
          <FaFile />
          <div className="right_line"></div>
        </div>
        
        <div className="photography_list" ref={listRef}>
          <motion.ul 
            className="choices_list"
            variants={listVariants}
            initial="hidden"
            animate={isListInView ? "visible" : "hidden"}
          >
            <motion.li variants={listItemVariants}>- لتأكيد الحجز يتم تحويل عربون بقيمة 1000 درهم</motion.li>
            <motion.li variants={listItemVariants}>- العربون غير قابل لللإسترجاع لأي ظرف كان ولكن من الممكن تبديل اليوم بيوم مناسب خلال سنة واحدة على حسب توفر التاريخ</motion.li>
            <motion.li variants={listItemVariants}>- يسلم المبلغ المتبقي (تحويل بنكي) قبل المناسبة ب 24 ساعة</motion.li>
            <motion.li variants={listItemVariants}>- ساعات التصوير متواصلة يتم تحديدة من قببل العروس</motion.li>
            <motion.li variants={listItemVariants}>- عند الرغبة بإضافة ساعات إضافية قيمة كل ساعة إضافية 500 درهم</motion.li>
            <motion.li variants={listItemVariants}>- التصوير خارج دبي إضافة مبلغ 500 درهم لجميع الإمارات ما عدا المنطقة الغربية إضافة 900 درهم</motion.li>
            <motion.li variants={listItemVariants}>- يتم ارسال جميع الصور عبر غوغل درايف لاختيار الصور المراد طباعتها من قبل العروس بعد المناسبةخلال 10 أيام</motion.li>
            <motion.li variants={listItemVariants}>- يتم تسليم الألبومات والفيديو معا خلال مده أقصاها 2-3أشهر بعد اختيار الصور وإرسالها</motion.li>
            <motion.li variants={listItemVariants}>- يتم اختيار لون الألبوم والخامات من قبل العروس</motion.li>
            <motion.li variants={listItemVariants}>- طباعة الألبومات يتم داخل المعمل الخاص بنا وتحت إشراف المصورة آسيا وطاقم نسائي 100%</motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

export default ImportantInfo