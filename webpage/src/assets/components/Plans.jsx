import React from 'react'

const Plans = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex flex-col justify-center">
      <h1 className="text-7xl font-bold text-white text-center mb-50">Floor Plans</h1>

      <div className="w-full overflow-hidden relative">
        <div className="w-[85%] mx-auto overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://www.archistar.ai/wp-content/uploads/2021/11/211108_DSG-323_Blog_what-is-commercial-re-dev_1200x630.png" alt="image 1" />
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGyC3-lH2Pmh2yPcse4L64Q_mWEoXqxDJBg&s" alt="image 2" />
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbf0NUElDoRv0GuHhZlQW7GHDx-BOY-N2GQ&s" alt="image 3" />
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmSX8SdbZA0UdBCp01u2xhW1pUSWdoP_Zpg&s" alt="image 4" />
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWdmCP8Wpf9lvySlgbXVNZmFBdYjx1qgnAw&s" alt="image 5" />
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMa0MuFStm2N3NjoAp35rFraCdIoGhdh1DQ&s" alt="image 6" />

            {/* Repeat images for seamless loop */}
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lfTeHbFvyJygVw3M7uUgXtT8ayh6JFUlYA&s" alt="image 1" />
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGyC3-lH2Pmh2yPcse4L64Q_mWEoXqxDJBg&s" alt="image 2" />
                 <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWdmCP8Wpf9lvySlgbXVNZmFBdYjx1qgnAw&s" alt="image 5" />
            <img className="h-150 w-auto rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 blur-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMa0MuFStm2N3NjoAp35rFraCdIoGhdh1DQ&s" alt="image 6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
