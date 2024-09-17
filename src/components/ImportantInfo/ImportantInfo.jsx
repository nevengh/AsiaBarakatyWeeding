import { FaFile } from 'react-icons/fa';
import './ImportantInfo.css';

const ImportantInfo = () => {
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

                <div className="photography_list">
                    <ul className="choices_list">
                        <li className='important_info_li'>لتأكيد الحجز يتم تحويل عربون بقيمة 1000 درهم</li>
                        <li className='important_info_li'>العربون غير قابل لللإسترجاع لأي ظرف كان ولكن من الممكن تبديل اليوم بيوم مناسب خلال سنة واحدة على حسب توفر التاريخ</li>
                        <li className='important_info_li'>يسلم المبلغ المتبقي (تحويل بنكي) قبل المناسبة ب 24 ساعة</li>
                        <li className='important_info_li'>ساعات التصوير متواصلة يتم تحديدة من قببل العروس</li>
                        <li className='important_info_li'>عند الرغبة بإضافة ساعات إضافية قيمة كل ساعة إضافية 500 درهم</li>
                        <li className='important_info_li'>التصوير خارج دبي إضافة مبلغ 500 درهم لجميع الإمارات ما عدا المنطقة الغربية إضافة 900 درهم</li>
                        <li className='important_info_li'>يتم ارسال جميع الصور عبر غوغل درايف لاختيار الصور المراد طباعتها من قبل العروس بعد المناسبة خلال 10 أيام</li>
                        <li className='important_info_li'>يتم تسليم الألبومات والفيديو معا خلال مده أقصاها 2-3 أشهر بعد اختيار الصور وإرسالها</li>
                        <li className='important_info_li'>يتم اختيار لون الألبوم والخامات من قبل العروس</li>
                        <li className='important_info_li'>طباعة الألبومات تتم داخل المعمل الخاص بنا وتحت إشراف المصورة آسيا وطاقم نسائي 100%</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ImportantInfo;
