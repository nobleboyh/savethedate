import React from 'react'

const LocationCard = ({ eventTitle, eventTime, eventLocation, eventDescription, eventGMapsLink }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{eventTitle}</div>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Time:</span> {eventTime}
        </p>
        <p className="text-gray-700 text-base mb-4 min-h-24">
          {eventDescription}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Location:</span> {eventLocation}
        </p>
        <div className="w-full h-64">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src={eventGMapsLink}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default LocationCard