import React from 'react';

const Plans = () => {
  const images = [
    "https://www.archistar.ai/wp-content/uploads/2021/11/211108_DSG-323_Blog_what-is-commercial-re-dev_1200x630.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGyC3-lH2Pmh2yPcse4L64Q_mWEoXqxDJBg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbf0NUElDoRv0GuHhZlQW7GHDx-BOY-N2GQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmSX8SdbZA0UdBCp01u2xhW1pUSWdoP_Zpg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWdmCP8Wpf9lvySlgbXVNZmFBdYjx1qgnAw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMa0MuFStm2N3NjoAp35rFraCdIoGhdh1DQ&s",
  ];

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col justify-start py-12 px-4 md:px-20">

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white text-center mb-12">
        Floor Plans
      </h1>

      {/* Scrolling image gallery */}
      <div className="w-full overflow-hidden relative">
        <div className="w-full md:w-[90%] mx-auto overflow-hidden rounded-3xl">
          <div className="flex gap-6 md:gap-12 animate-scroll">
            {images.concat(images).map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-60 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]"
              >
                <img
                  src={src}
                  alt={`Floor plan ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl shadow-lg blur-sm transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Plans;
