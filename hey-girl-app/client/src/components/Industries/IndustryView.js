import React from 'react';
import Industry from './Industry';

export default function IndustryView(props){
  const industry = props.industries.find(ind=> (
    ind.name === props.match.params.industryname
  ))
  return(
    <div>
            {industry && <Industry
                key={industry.id}
                name={industry.name}
                industryId={industry.id}

            />}
    </div>
  )
}
