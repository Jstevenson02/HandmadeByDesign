import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Handemade By Design',
  description: 'Handmade craft jewerly, made to order.',
  keywords: 'jewelery, handmade, artist, unique, craft',
}

export default Meta
