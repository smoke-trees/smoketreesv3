import React from 'react'
import './product.scss'
import { Navbar } from "../../components";
import ProductSectionOne from './product-section-one';
import ProductSectionTwo from './product-section-two';
import MoreProjects from '../../components/more-projects/more-projects';

export const Product = () => {
  return (
    <div>
      <Navbar />
      <div>
        <ProductSectionOne />
        <ProductSectionTwo />
        <MoreProjects noHead img1='//unsplash.it/577/801' img2='//unsplash.it/577/1040' img3='//unsplash.it/577/580' img4='//unsplash.it/577/379' />
      </div>
    </div>
  )
}

