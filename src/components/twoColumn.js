import * as React from 'react'

import DescGrid from './descGrid'
import ProseWrapper from './proseWrapper'
import LinkButtonRow from './linkButtonRow'


const TwoColumn = ({ children, vars, centerRightCol }) => {
  return (
    <div>
      {/* Top 2-Column Section */}
      <div className={"max-w-2xl mx-auto grid grid-cols-1 gap-x-8 lg:max-w-7xl lg:grid-cols-2 " + (centerRightCol ? "items-center" : "items-start")}>
        
        {/* Right Column (Media) */}
        <div className="peer empty:hidden">{children}</div>

        {/* Left Column (Details) */}
        <div className="col-start-1 row-start-1 peer-empty:col-span-full lg:peer-empty:px-36">
          <ProseWrapper>
            <div className="text-4xl font-bold text-gray-200">{vars.title}</div>
            <p>{vars.summary}</p>
            <DescGrid descriptions={vars.descriptions}/>
            <div className="divider lg:hidden" />
          </ProseWrapper>
        </div>
      </div>

      { vars.links
        ? <>
            <div className="divider py-4" />
            <LinkButtonRow links={vars.links} />
          </>
        : <></> 
      }

      <div className="divider py-4" />

    </div>
  )
}

export default TwoColumn