import React from "react";

import { motion, useInView } from "framer-motion";
import "./ExtraService.css";
import { FaStar } from "react-icons/fa";
import Hero from "../../components/Hero/Hero";
import SeoComponnent from "../../components/SeoComponnent/SeoComponnent";

const ExtraService = () => {
  const services = [
    {
      price: "3,000 درهم",
      service: "فيديو عرض تشويقي ينعرض قبل زفة العروس",
    },
    {
      price: "1,000 درهم",
      service: "تفطية الزواج بالجوال تغطية احترافية خاص للعروس واستلامه بنفس اليوم",
    },

  ];

  const tableRef = React.useRef(null);
  const isTableInView = useInView(tableRef, { once: true, amount: 0.2 });


  const tableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };





  return (
    <>
      <SeoComponnent
        title="آسيا البركاتي /  خدمات اضافية "
        keyword="  فيديو عرض تشويقي  ,   تفطية الزواج بالجوال تغطية احترافية  "
        description=" A specialized page displays additional services that can be added to the packages."
        type="website"
      />

      <Hero pageName='خدمات إضافية' />
      <div className="ExtraService" id="additions">
        <div className="section_header">
          <h1 className="title_header"> الخدمات الإضافية</h1>
          <h3 className="sub_title"> خدمات إضافية من الممكن إضافتها للباقات</h3>
        </div>
        <div className="camera_icon">
          <div className="left_line"></div>
          <FaStar />
          <div className="right_line"></div>
        </div>
        <div className="table-container" ref={tableRef}>
          <motion.table
            variants={tableVariants}
            initial="hidden"
            animate={isTableInView ? "visible" : "hidden"}
          >
            <thead>
              <tr>
                <th>الخدمات</th>
                <th>الأسعار</th>
              </tr>
            </thead>
            <motion.tbody>
              {services.map((item, index) => (
                <motion.tr key={index} variants={rowVariants}>
                  <td>{item.service}</td>
                  <td className="extra_service_price">{item.price}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </motion.table>
        </div>

      </div>
    </>
  );
};

export default ExtraService;
