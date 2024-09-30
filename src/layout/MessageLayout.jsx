import React, { useState } from 'react'

const MessageLayout = () => {
  const [senderName, setSenderName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the message to the server
    fetch('https://62c6804b2b03e73a58ceb8a9.mockapi.io/api/post-info/wedding-msg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ senderName, content }),
    })
      .then(response => response.json())
      .then(data => console.log('Message sent:', data))
      .catch(error => console.error('Error:', error));
    // Reset form fields
    setSenderName('')
    setContent('')
  }

  return (
    <div className="w-screen flex justify-center items-center p-5 ">
      <form onSubmit={handleSubmit} className="bg-[#f9f2e8] p-8 rounded-lg shadow-md w-3/4" style={{ fontFamily: 'Brush Script MT, cursive' }}>
        <h2 className="text-3xl mb-6 text-center">Message to Hoang & Thanh</h2>
        <div className="mb-4">
          <label htmlFor="senderName" className="block mb-2 text-xl">From:</label>
          <input
            type="text"
            id="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="w-full p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2 text-xl">Your Message:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 bg-transparent rounded focus:outline-none focus:border-gray-500"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-400 from text-white px-6 py-2 rounded-full hover:bg-red-400 transition duration-300 text-xl">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default MessageLayout