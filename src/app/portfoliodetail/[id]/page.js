'use client'
import  React  from 'react'
import PortfolioDetail  from  '../../page/portfolio-detail'
import { DataArray } from '@/app/data'



const  Portfolio  =(props)=>{
  console.log("the id is: ", props.params.id)

  return(
    <React.Fragment>
      <PortfolioDetail
      data={DataArray[props.params.id]}
      id={props.params.id}
      DataArray={DataArray}
      />
    </React.Fragment>
  )
  
}
export default Portfolio