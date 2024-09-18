import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import OpinionUser from '../../components/Opinion/OpinionUser';

import Image1 from './../../assets/opinionsBrides/IMG-20240916-WA0002.jpg'
import Image2 from './../../assets/opinionsBrides/IMG-20240916-WA0003.jpg'
import Image3 from './../../assets/opinionsBrides/IMG-20240916-WA0004.jpg'
import Image4 from './../../assets/opinionsBrides/IMG-20240916-WA0005.jpg'
import Image5 from './../../assets/opinionsBrides/IMG-20240916-WA0006.jpg'
import Image6 from './../../assets/opinionsBrides/IMG-20240916-WA0008.jpg'
import Image7 from './../../assets/opinionsBrides/IMG-20240916-WA0009.jpg'
import Image8 from './../../assets/opinionsBrides/IMG-20240916-WA0010.jpg'
import Image9 from './../../assets/opinionsBrides/IMG-20240916-WA0011.jpg'
import Image10 from './../../assets/opinionsBrides/IMG-20240916-WA0012.jpg'
import Image11 from './../../assets/opinionsBrides/IMG-20240916-WA0013.jpg'
import Image12 from './../../assets/opinionsBrides/IMG-20240916-WA0014.jpg'
import Image13 from './../../assets/opinionsBrides/IMG-20240916-WA0015.jpg'
import Image14 from './../../assets/opinionsBrides/IMG-20240916-WA0017.jpg'
import Image15 from './../../assets/opinionsBrides/IMG-20240916-WA0018.jpg'
import Image16 from './../../assets/opinionsBrides/IMG-20240916-WA0019.jpg'
import Image17 from './../../assets/opinionsBrides/IMG-20240916-WA0020.jpg'
import Image18 from './../../assets/opinionsBrides/IMG-20240916-WA0021.jpg'
import Image19 from './../../assets/opinionsBrides/IMG-20240916-WA0022.jpg'
import Image20 from './../../assets/opinionsBrides/IMG-20240916-WA0023.jpg'
import Image21 from './../../assets/opinionsBrides/IMG-20240916-WA0024.jpg'


const BridesOpinions = () => {
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

            </Carousel>

        </div>
    )
}

export default BridesOpinions