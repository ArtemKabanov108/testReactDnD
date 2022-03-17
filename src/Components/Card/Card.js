import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import avatar from '../../images/avatar/userRelica.jpg'
import {StatusCmt} from "../StatusCmt/StatusCmt";
import './card.scss'

export const CardTask = ({userName, paymentSum, statusTask}) => {
  return (
    <div className='alternativeCard'>
      <Card>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label className='labelStyle' image={avatar} />
              <Feed.Content>
                <Feed.Summary>
                  Payment to {userName}
                </Feed.Summary>
                <Feed.Date content={`$${paymentSum || 100} USD`}/>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <StatusCmt
            statusProps={statusTask}
          />
        </Card.Content>
      </Card>
    </div>

  )
}