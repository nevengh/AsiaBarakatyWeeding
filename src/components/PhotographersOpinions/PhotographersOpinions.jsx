import React, { useState } from 'react'
import OpinionUser from '../../components/Opinion/OpinionUser';
import { Carousel } from 'react-bootstrap'
import Image1 from './../../assets/opinions/5929001107596624560.jpg'
import Image2 from './../../assets/opinions/5929001107596624563.jpg'
import Image3 from './../../assets/opinions/5929001107596624564.jpg'
import Image4 from './../../assets/opinions/5929001107596624565.jpg'
import Image5 from './../../assets/opinions/5929001107596624566.jpg'
import Image6 from './../../assets/opinions/5929001107596624567.jpg'
import Image7 from './../../assets/opinions/5929001107596624568.jpg'
import Image8 from './../../assets/opinions/5929001107596624569.jpg'
import Image9 from './../../assets/opinions/5929001107596624570.jpg'
import Image10 from './../../assets/opinions/5929001107596624571.jpg'
import Image11 from './../../assets/opinions/5929001107596624572.jpg'
import Image12 from './../../assets/opinions/5929001107596624581.jpg'
import Image13 from './../../assets/opinions/5929001107596624582.jpg'
import Image14 from './../../assets/opinions/5929001107596624583.jpg'
import Image15 from './../../assets/opinions/5929001107596624584.jpg'
import Image16 from './../../assets/opinions/5929001107596624585.jpg'
import Image17 from './../../assets/opinions/5929001107596624586.jpg'
import Image18 from './../../assets/opinions/5929001107596624587.jpg'
import Image19 from './../../assets/opinions/5929001107596624588.jpg'
import Image20 from './../../assets/opinions/5929001107596624573.jpg'
import Image21 from './../../assets/opinions/5929001107596624574.jpg'
import Image22 from './../../assets/opinions/5929001107596624575.jpg'
import Image23 from './../../assets/opinions/5929001107596624576.jpg'
import Image24 from './../../assets/opinions/5929001107596624578.jpg'
import Image25 from './../../assets/opinions/5929001107596624579.jpg'
import Image26 from './../../assets/opinions/5929001107596624580.jpg'
import Image27 from './../../assets/opinions/5929001107596624581.jpg'

const PhotographersOpinions = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='HJ_AllOpinions'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image1} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image2} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image3} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image4} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image5} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image6} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image7} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image8} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image9} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image10} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image11} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image12} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image13} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image14} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image15} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image16} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image17} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image18} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image19} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image20} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image21} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image22} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image23} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image24} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image25} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image26} />
                </Carousel.Item>

                <Carousel.Item className='HJ_Opinion'>
                    <OpinionUser ImageOpinion={Image27} />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default PhotographersOpinions