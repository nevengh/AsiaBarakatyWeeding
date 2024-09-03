import React from 'react'
import MainImage from './../../assets/MainPhoto.webp'

const OpinionUser = ({ImageOpinion}) => {
    return (
        <div className='HJ_containerOPinion'>
            <img src={MainImage} alt="Img Carousel" className='HJ_ImgPhotographer' />
            <div className='HJ_TitleSection'>
                <h3 className='HJ_heading'>  البعض من أراء عملاءنا    </h3>
            </div>
            <div className="HJ_content">
                <img src={ImageOpinion} alt="Image1" />
            </div>

        </div>
    )
}

export default OpinionUser