import React from "react";
import { Icon } from 'semantic-ui-react'
import './article.scss'

export const ArticleCmt = ({props}) => {

  const {
    articleText,
    mainTitle,
    firstTitle,
    firstArticle,
    secondTitle,
    secondArticle,
  } = props
  console.log(articleText)
  return (
    <div className='article-container'>
      <div className='main-article'>
        <h1>
          {mainTitle}
        </h1>
        <div>
          {articleText}
        </div>
      </div>
      <div className='first-article'>
        <div>
          <Icon inverted name='mail outline' />
          <div className='article-peace'>
            <h3>
              {firstTitle}
            </h3>
            <div>
              {firstArticle}
            </div>
          </div>
        </div>
      </div>
      <div className='second-article'>
        <div>
          <Icon inverted name='edit outline' />
          <div className='article-peace'>
            <h3>
              {secondTitle}
            </h3>
            <div>
              {secondArticle}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}