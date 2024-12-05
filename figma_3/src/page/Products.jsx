import React from 'react'
import Producte_header from '../conpanents/Producte_header1/Producte_header'
import Producte_Food from '../conpanents/Producte_Food/Producte_Food'
import Producte_needs from '../conpanents/Producte_needs/Producte_needs'
import Producte_desgin from '../conpanents/Producte_desgin/Producte_desgin'
import Producte_News from '../conpanents/Producte_News/Producte_news'
export default function Products() {
  return (
    <div className='Products'>
      <Producte_header />
      <Producte_Food />
      <Producte_needs />
      <Producte_desgin />
      <Producte_News />
    </div>
  )
}
