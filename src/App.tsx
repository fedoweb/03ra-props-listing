import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data/etsy.json';
import { Listing } from './components/Listing';
import { type ListingItemProps } from './components/ListingItem';

function App() {
  const inputData: ListingItemProps[] = data
    .filter(item => item.state === 'active')
    .map(item => ({
      listing_id: item.listing_id,
      url: item.url,
      MainImage: item.MainImage,
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity
    }));

  return (
    <>
      <Listing items={inputData} />
    </>
  )
}

export default App
