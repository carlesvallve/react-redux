require('./style.scss');
import React, { Component } from 'react'


const BannerBottom = () => {

  return(
      <div className='banner-bottom'>

        <div className='banner-bottom-features'>
          <ul className='banner-bottom-featurelist'>
            <li><span>{window.content.banner.items.item1[window.lang]}</span></li>
            <li><span>{window.content.banner.items.item2[window.lang]}</span></li>
            <li><span>{window.content.banner.items.item3[window.lang]}</span></li>
            <li><span>{window.content.banner.items.item4[window.lang]}</span></li>
          </ul>
        </div>

        <div className='banner-bottom-signup'>
          <a
            className='banner-bottom-btn-signup btn-summer'
            href='https://www.r18.com/my/register/'
          >
            <span>{window.content.banner.btn_signup[window.lang]}</span>
          </a>
        </div>

        <div className='banner-bottom-text-signup'>{window.content.banner.text_signup[window.lang]}</div>

      </div>
  )
}

export default BannerBottom
