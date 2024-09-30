import React from 'react'
import LocationCard from '../components/LocationCard'
import CountdownTimer from '../components/CountdownTimer'

const WeddingLocation = () => {
  return (
    <section className="w-screen md:h-screen  py-10  bg-gradient-to-r from-yellow-400 to-orange-400">
    <div className="w-full text-center mb-10">
        <h2 className="text-4xl font-bold text-white mb-4">Countdown to Our Big Day</h2>
        <CountdownTimer targetDate="2024-10-05T11:00:00" />
    </div>     
    <section className=' flex justify-center items-center'>
        <div className='flex gap-10 flex-col md:flex-row'>
            <LocationCard 
                eventTitle="Bridal party"
                eventTime="04-10-2024 4:00 PM - 9:00 PM"
                eventLocation="Dia village cultural house, Thanh Oai, Ha Noi"
                eventDescription="Celebrate with us over food, drinks, and dancing."
                eventGMapsLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3748914837697!2d105.76226561116266!3d20.89723169220208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31344d38d1705f01%3A0xa43be08362c167ca!2zTmjDoCBWxINuIEjDs2EgVGjDtG4gxJDDrGE!5e0!3m2!1sen!2s!4v1727685511699!5m2!1sen!2s"
            />
            <LocationCard 
                eventTitle="Wedding ceremony"
                eventTime="05-10-2024 11:00 AM - 1:00 PM"
                eventLocation="Van Hoa Restaurant - 98 Thai Thinh, Dong Da, Ha Noi"
                eventDescription="Join us for our beautiful wedding ceremony as we exchange vows and celebrate our love. We look forward to sharing this special moment with you."
                eventGMapsLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6245232761707!2d105.81901331116505!3d21.00768308842072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac824d9b4797%3A0xb3f80263fd535c9e!2zVHJ1bmcgdMOibSBUaeG7h2MgJiBT4buxIGtp4buHbiBW4bqhbiBIb2EgVGjDoWkgVGjhu4tuaA!5e0!3m2!1sen!2s!4v1727685747848!5m2!1sen!2s"
            />
        </div>
    </section>
    </section>
  )
}

export default WeddingLocation