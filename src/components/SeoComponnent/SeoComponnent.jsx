import React from 'react'
import { Helmet } from 'react-helmet-async'

const SeoComponnent = ({ title, description, type , keyword }) => {
  return (
    <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keyword} />
            { /* End standard metadata tags */}



            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */}
        </Helmet>
  )
}

export default SeoComponnent