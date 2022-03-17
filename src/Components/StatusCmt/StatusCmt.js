import React from "react";
import './status.scss'

export const StatusCmt = ({statusProps}) => {

  const statusStyleMap = {
    Processing: 'Processing',
    Success: 'Success',
    Failed: 'Failed'
  }

  return (
    <div className={statusStyleMap[statusProps]}>
      <span>&#8226;</span>
      {statusProps}
    </div>
  )
}