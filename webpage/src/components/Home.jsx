import React from 'react'
import Navbar from './Navbar'
import Design from './Design'
import Highlights from './Highlights'
import Hero from './Hero'
import About from './About'
import Plans from './Plans'


const Home = () => {




  const clipPaths = [
    '[clip-path:polygon(0%_0%,_100%_0%,_100%_80%,_20%_100%,_0%_100%)]', 
    '[clip-path:polygon(10%_0%,_100%_0%,_100%_90%,_0%_100%)]', 
    '[clip-path:polygon(0%_10%,_90%_0%,_100%_100%,_0%_100%)]', 
    '[clip-path:polygon(0%_0%,_100%_0%,_100%_80%,_80%_100%,_0%_100%)]', 
  ];

  const images = [
    { src: 'https://images.unsplash.com/photo-1524234599372-a5bd0194758d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHViYWklMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000', alt: 'Building 1' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgABjTTaSMW75j5Xp3gVKfTrObjlipBb4ZIQ&s', alt: 'Building 2' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKQCBNKJkAeuXLN4nzVTS70cFHYJUNkGj7Q&s', alt: 'Building 3' },
    { src: 'https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/106445.30.jpg', alt: 'Building 4' },
  ];





    const imagess = [
    "https://www.archistar.ai/wp-content/uploads/2021/11/211108_DSG-323_Blog_what-is-commercial-re-dev_1200x630.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGyC3-lH2Pmh2yPcse4L64Q_mWEoXqxDJBg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbf0NUElDoRv0GuHhZlQW7GHDx-BOY-N2GQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmSX8SdbZA0UdBCp01u2xhW1pUSWdoP_Zpg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWdmCP8Wpf9lvySlgbXVNZmFBdYjx1qgnAw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMa0MuFStm2N3NjoAp35rFraCdIoGhdh1DQ&s",
  ];


  return (
    <div>
      
      <section
      className="h-screen bg-cover bg-center relative bg-fixed"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/677425503944c4eb93bd17ad/6898fa26dd1bc004aac50a16_jrc-palladio-hero.webp')",
      }}
    >
     

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg text-gray-200">
          Welcome to Our Website
        </h1>

        <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
          Discover inspiring stories, innovative ideas, and extraordinary speakers who are shaping the future.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum quasi fugit dolor nobis quibusdam.
        </p>

        <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-transform duration-300">
          Explore More
        </button>
      </div>
    </section>



















       <section className="bg-black text-white min-h-screen px-6 md:px-20 py-20 md:py-32 z-10 rounded-t-3xl shadow-2xl -mt-10 relative overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-30 text-center leading-tight">
        JRC Palladio – Greco Roman Luxury Villas in Sarjapur
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* Left Text Section */}
        <div className="text-lg md:text-2xl max-w-2xl space-y-8 text-gray-300 text-justify">
          <p>
            JRC Palladio is a luxury 4 BHK villa project in Sarjapur, thoughtfully inspired by
            Greco-Roman architecture and the timeless grace of the Renaissance era. These classical
            homes in Bangalore are crafted for discerning homeowners who appreciate heritage,
            symmetry, and high design. With grand facades, double-height ceilings, and meticulously
            detailed interiors, each residence is an architectural landmark in its own right.
          </p>

          <p>
            Nestled within a 2,50,000 sqft low-density community, Palladio offers spacious villa
            plans, private courtyards, and wide internal roads. With no UDS and full plot ownership,
            residents truly own the plot they live on — a rare offering in the city. The project
            features a 25,000 sqft grand clubhouse with resort-style amenities like a swimming pool,
            spa, indoor sports zones, fitness center, guest suites, and more, elevating the
            experience of everyday living.
          </p>
        </div>

        {/* Right Image Section */}
        <img
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          src="https://www.constructionweekonline.in/cloud/2025/10/07/Indian-real-estate-redefined-through-experiential-living.jpg"
          alt="Luxury Villa"
        />
      </div>
    </section>










       <section className="bg-gray-700 text-white min-h-screen px-6 md:px-20 py-16 md:py-32">
      {/* Section Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
        Project & Architecture Highlights
      </h1>

      {/* Highlight 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20">
        <img
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          src="https://www.bankrate.com/2020/10/02105002/What_are_real_estate_comps.jpg"
          alt="Architecture highlight"
        />
        <p className="text-lg md:text-xl leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, soluta fugiat illo quas
          voluptatum impedit ratione corrupti minus quidem atque reiciendis vel libero eum ea ex
          neque illum culpa expedita? Minus magni debitis aliquam, nobis, autem iste accusantium
          architecto tenetur odio incidunt est ad soluta voluptas, ut cupiditate sapiente eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi corrupti ad pariatur fuga aliquid esse optio maiores nam officia doloribus voluptate vitae ipsam culpa eaque consequatur eos ut omnis, praesentium ratione odit sapiente quam recusandae. Quia quas cupiditate explicabo tenetur. Debitis eaque quos adipisci unde sunt eligendi rem, odit aspernatur! Neque animi veniam nemo, dolorum accusamus, eius corporis dolore ea impedit consectetur quas provident iste maiores deserunt! Dolores voluptatibus, nesciunt architecto eius ratione numquam corporis? Quae veniam ipsum nostrum dicta, repudiandae consectetur nihil aut sed cumque eaque! Corrupti, est! Distinctio, quos. Consequuntur corrupti amet architecto velit repellat dolores? Illum.
        </p>
      </div>

      {/* Highlight 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
        <img
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop"
          alt="Modern design highlight"
        />
        <p className="text-lg md:text-xl leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, soluta fugiat illo quas
          voluptatum impedit ratione corrupti minus quidem atque reiciendis vel libero eum ea ex
          neque illum culpa expedita? Minus magni debitis aliquam, nobis, autem iste accusantium
          architecto tenetur odio incidunt est ad soluta voluptas, ut cupiditate sapiente eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, repudiandae. Doloribus eveniet ex animi, porro modi vitae neque laboriosam qui explicabo officiis unde nulla adipisci aliquam inventore odio suscipit rem a quia voluptates mollitia! Voluptate ipsa architecto nemo earum blanditiis alias exercitationem voluptatum distinctio esse veniam neque excepturi quos natus autem odio odit, voluptas dolore possimus eaque tenetur error. Quasi aspernatur, esse aliquam distinctio, tempora error, dicta iure laborum dolore accusantium dolorem. Aliquid doloribus voluptatibus illum qui, quo eius, temporibus vitae placeat delectus dolorum ipsa sequi! Aut officiis at quae quam blanditiis dicta qui ut eos atque magnam perspiciatis voluptatem reprehenderit ipsum, eum voluptatibus suscipit nemo praesentium provident nesciunt quasi aliquid quas odio numquam laudantium. Dolor nesciunt doloribus optio nam quasi expedita! Ex voluptate error, dolorum non possimus atque tenetur modi blanditiis porro, excepturi, rem totam? Tempore molestiae harum neque, consequuntur nam minima facere voluptatum. Blanditiis omnis sint fuga necessitatibus.
        </p>
      </div>
    </section>




















      <section className="bg-gray-900 text-white px-4 md:px-20 py-16">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-center leading-tight">
        Designed around The 'Classic Select'
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-9 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`w-full aspect-[4/3] overflow-hidden ${clipPaths[index % clipPaths.length]}`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>











  <section className="min-h-screen bg-gray-600 flex flex-col justify-start py-12 px-4 md:px-20">

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white text-center mb-12">
        Floor Plans
      </h1>

      {/* Scrolling image gallery */}
      <div className="w-full overflow-hidden relative">
        <div className="w-full md:w-[90%] mx-auto overflow-hidden  ">
          <div className="flex gap-6 md:gap-12 animate-scroll">
            {imagess.concat(imagess).map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-60 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]"
              >
                <img
                  src={src}
                  alt={`Floor plan ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl shadow-lg blur-xs transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>

    </div>
  )
}

export default Home
