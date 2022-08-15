import * as React from 'react'

import DescGrid from './descGrid'
import ProseWrapper from './proseWrapper'


const TwoColumn = ({ children, vars, centerRightCol }) => {
  return (
    <div className={"max-w-2xl mx-auto grid grid-cols-1 gap-x-8 lg:max-w-7xl lg:grid-cols-2 " + (centerRightCol ? "items-center" : "items-start")}>
      <div className="col-start-2 peer empty:hidden">{children}</div>

      <div className="col-start-1 row-start-1 peer-empty:col-span-full lg:peer-empty:px-36">
        <ProseWrapper>
          <div className="text-4xl font-bold text-gray-200">{vars.title}</div>
          <p>{vars.summary}</p>
          <DescGrid descriptions={vars.descriptions}/>
        </ProseWrapper>
      </div>
    </div>
  )
}

export default TwoColumn