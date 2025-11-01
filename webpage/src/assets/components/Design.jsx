import React from 'react'

const Design = () => {

  const clipPaths = [
    // Top-left: Cut off bottom-right corner
    '[clip-path:polygon(0%_0%,_100%_0%,_100%_80%,_20%_100%,_0%_100%)]', 

    // Top-right: Cut off bottom-left corner and top-right corner
    '[clip-path:polygon(10%_0%,_100%_0%,_100%_90%,_0%_100%)]', 

    // Bottom-left: Cut off top-right corner
    '[clip-path:polygon(0%_10%,_90%_0%,_100%_100%,_0%_100%)]', 

    // Bottom-right: Cut off a different section (like a beveled corner)
    '[clip-path:polygon(0%_0%,_100%_0%,_100%_80%,_80%_100%,_0%_100%)]', 
  ];

  const images = [
    { src: 'https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHViYWklMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000', alt: 'Building 1' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgABjTTaSMW75j5Xp3gVKfTrObjlipBb4ZIQ&s', alt: 'Building 2' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKQCBNKJkAeuXLN4nzVTS70cFHYJUNkGj7Q&s', alt: 'Building 3' },
    { src: 'https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/106445.30.jpg', alt: 'Building 4' },
    // Add more images up to 10
  ];


  return (
    <div className='h-screen bg-gray-900 text-white min-h-screen px-6 md:px-20 py-16 md:py-32'>
      
      <h1 className='text-4xl md:text-6xl font-bold mb-30 text-center leading-tight'>Designed around The 'Classic Select'</h1>

 
<div className="grid grid-cols-2 gap-9 max-w-5xl mx-auto">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`
            w-full h-64 
            overflow-hidden 
            ${clipPaths[index % clipPaths.length]} // Select a clip-path
          `}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

    </div>
  )
}

export default Design
