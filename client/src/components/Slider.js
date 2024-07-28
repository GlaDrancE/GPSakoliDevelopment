import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from './Header';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination, EffectCreative, EffectCoverflow } from 'swiper/modules';

// All slider Images
import image1 from '../images/welcome.jpg'
import image2 from '../images/c1.jpg'
import image3 from '../images/c2.jpg'
import image5 from '../images/c4.png'
import image6 from '../images/c5.jpg'
import image7 from '../images/c6.jpg'
import image8 from '../images/c7.jpg'
import image9 from '../images/c8.jpg'



// All News Images
import news1 from '../images/news/7May2022.jpeg'
import news2 from '../images/news/15sep_22_engday.jpeg'
import news3 from '../images/news/Induction_Program_21sep22.jpeg'
import news4 from '../images/news/Jaldharohar_18Sep22.jpeg'
import news5 from '../images/news/tiranga_12aug22.jpeg'




// All Department Images
import dept1 from '../images/computer.jpg'
import dept2 from '../images/electronics.jpg'
import dept3 from '../images/electrical.jpg'
import dept4 from '../images/mechanical.jpg'
import dept5 from '../images/civil.jpg'

// Polygon background images
import polygon_1 from '../images/Polygon-1.png'
import polygon_2 from '../images/Polygon-2.png'
import polygon_3 from '../images/Polygon-3.png'



// Hamburger Icon
// import hamburger from '../images/icons/hamburger.png'
const images = [
  {
    src: image1, alt: 'First Image', msg: 'Welcome to Government Polytechnic Sakoli'
  },
  { src: image2, alt: 'Second Image', msg: 'Tree Plantation' },
  { src: image3, alt: 'Third Image', msg: '' },
  // { src: image4, alt: 'Fourth Image', msg: '' },
  { src: image5, alt: 'Fifth Image', msg: '' },
  { src: image6, alt: 'Sixth Image', msg: '' },
  { src: image7, alt: 'Seventh Image', msg: 'Industrial Visit At Clicknet' },
  { src: image8, alt: 'Eight Image', msg: '' },
  { src: image9, alt: 'Ninth Image', msg: 'Fire Safty Training By Expert' },
]


const newses = [
  { src: news1, alt: '7 May 2022', year: 2022 },
  { src: news2, alt: '15 Sep 2022', year: 2022 },
  { src: news3, alt: 'Introduction Program 21 Sep 2022', year: 2022 },
  { src: news4, alt: 'Jaldhraohar 18 Sep 2022', year: 2022 },
  { src: news5, alt: 'Tiranga 12 Aug 2022', year: 2022 },
]



const departments = [
  { src: dept1, alt: 'Comupter Engineering', link: '/dept/computer/about-department' },
  { src: dept2, alt: 'Electronics Engineering', link: '/dept/electronics/about-department' },
  { src: dept3, alt: 'Electrical Engineering', link: '/dept/electrical/about-department' },
  { src: dept4, alt: 'Mechanical Engineering', link: '/dept/mechanical/about-department' },
  { src: dept5, alt: 'Civil Engineering', link: '/dept/civil/about-department' }
]




export function Slider() {
  return (
    <>

      <div className='main-slider'>
        <Header />
        <Swiper
          // cssMode={true}
          spaceBetween={60}
          navigation={true}
          loop={true}
          effect={'fade'}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} width={'100%'} />
              <div className='Slider-content text-white'>
                <div className="slide-title text-center w-full">
                  <h1 className='slide-left'>{image.msg}</h1>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}




export function News_slider() {
  return (
    <>

      <Swiper
        grabCursor={true}
        effect={'fade'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {
          newses.map((news) => (
            <SwiperSlide>
              <img src={news.src} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}



export function Department_slider() {
  return (
    <>

      <div className="department-slider-container relative my-16">
        <img className='polygon' src={polygon_1} alt="" />
        <img className='polygon' src={polygon_2} alt="" />
        <img className='polygon' src={polygon_3} alt="" />
        <div className="department-slider-inner-container lg:p-10 md:p-7">
          <div className="dept-heading text-center">
            <h1 className='relative heading-top-center-line'>Available <span className="text-red-700">Branch</span></h1>
            <div className="small" style={{ color: 'black', fontWeight: 300 }}>DIPLOMA COURSES</div>
          </div>
          <div className="dept-slider-container">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {departments.map((e, index) => (
                <SwiperSlide key={index}>
                  <Link to={e.link} className='departmentImages'>
                    <img src={e.src} />
                    <div className="dept-images-cover">{e.alt}</div>
                  </Link>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
        </div>
      </div>

    </>
  )
}