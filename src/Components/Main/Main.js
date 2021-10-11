import React from 'react'
import Testimonials from '../Carousel/Testimonials'
import Categories from './Categories'
import FlashSale from './FlashSale'
import Hero from './Hero'

const Main = () => {
    return (
        <main className="mt-3">
            <Hero />
            <FlashSale />
            <Categories />
            <Testimonials />
        </main>
    )
}

export default Main
