import React, { useState } from "react";
import { Slider, News_slider, Department_slider } from "../components/Slider";
import Image_Background from "../components/Image_Background";
import Vision_Mission from "../components/Vision_Mission";
import Recruiters from "../components/Recruiters";
import { Link } from "react-router-dom";
import galleryImg1 from "../images/college-images/one.jpg";
import galleryImg2 from "../images/college-images/two.jpg";
import galleryImg3 from "../images/college-images/three.jpg";
import galleryImg4 from "../images/college-images/four.jpg";
import galleryImg5 from "../images/college-images/five.jpg";
import galleryImg6 from "../images/college-images/six.jpg";
import galleryImg7 from "../images/college-images/seven.jpg";
import galleryImg8 from "../images/college-images/eight.jpg";
import galleryImg9 from "../images/college-images/nine.jpg";

import news from "../images/news/7May2022.jpeg";

// Importing image
import principal from "../images/principal.png";
import ImageViewer from "../components/ImageViewer";
const notices = [
  {
    url: "https:/gpsakoli.ac.in/public/api/assets/STUDENT_CORNER_PDFs/Admission_Process/FEAdmission_22_23.pdf",
    msg: "Admission Process 2024 2025",
  },
  { url: "#", msg: "Admission Process Started 2023-24(Marathi)" },
  { url: "#", msg: "Admission Process Started 2023-24(Marathi)" },
  { url: "#", msg: "Admission Process Started 2023-24(Marathi)" },
  { url: "#", msg: "Admission Process Started 2023-24(Marathi)" },
];
//Change Images from here
const galleryImages = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
];

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

export default function Home() {
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageViewer = (index) => {
    setCurrentImageIndex(index);
    setShowImageViewer(true);
  };

  const closeImageViewer = () => {
    setShowImageViewer(false);
  };
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <Slider />
      <div className="home-container">
        <div className="clg-about">
          <div className="about-card w-full p-3 border-card">
            <span className="small">About</span>
            <h1 className="font-semibold">
              Welcome To{" "}
              <span className="heading-red">
                Government Polytechnic, Sakoli
              </span>{" "}
            </h1>
            <p>
              The Government Polytechnic ,Sakoli , was founded on July, 1914 .
              At its commencement the school had 16 students on roll. The
              institution has given to Engineering College presently known as
              V.N.I.T. Sakoli, as well as Govt. Medical College (GMC), Sakoli{" "}
              <Link
                to="about-institute/about-institute"
                className="heading-red"
              >
                more....
              </Link>
            </p>
          </div>
          <div className="notice-card text-center">
            <div className="notice-heading my-4 flex flex-col items-center">
              <span className="underline"></span>
              <h1>Notice Board</h1>
            </div>
            <div className="notices-container">
              <div className="notice-inner-container">
                {notices.map((notice) => (
                  <a target="_blank" href={notice.url} className="notice">
                    {notice.msg}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image_Background />
        <div className="principal-message-container">
          <div className="principal-message-card p-1 reveal">
            <div className="principal-profile flex items-center">
              <img src={principal} alt="" width={"150px"} height={"150px"} />
              <div className="principal-name mx-1">
                <div>Mr. S P Lambhade</div>
                <span>
                  An Hon'ble Principal of Government Polytechnic Sakoli
                </span>
              </div>
            </div>
            <p className="text-justify mt-8 text-base">
              We believe that students are the architects of future; hence their
              boundless energies need to be channelized in the right direction.
              We, as an educational institute, do our best efforts to provide
              that right direction to students. Annual Sports & Cultural
              Festival; setting of new state of art labs; Students e-enabled
              education/ performance evaluation initiatives and well meaning
              students industrial trainings are a few of them. The Training and
              Placement Cell/ED Cell/Alumni Cell of the institute work
              tirelessly towards attainment of the common goal of ensuring
              employment for all students in various industries and helping
              budding entrepreneurs in establishing successful businesses. I
              wish that that the Institute will continue to leave its mark in
              the society by shaping the future of the youth of our country and
              transforming their potential into successful careers.
            </p>
          </div>
          <div className="news-paper-card border-card reveal">
            <h1 className="text-center font-bold">
              GP Sakoli In <span className="heading-red">News</span>
            </h1>
            <div className="news-container">
              <Link to="/gps-in-news">
                <img src={news} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-bottom-container mt-10 pt-9">
        <Vision_Mission
          vision={
            "To be an institute of national repute creating technocrats to serve the society."
          }
          mission={[
            "To set up state of the art infrastructure, laboratories, library and supporting services.",
            "To achieve academic excellence in teaching and learning through continuous development using latest technologies and resources.",
            "To inculcate technical and entrepreneurial skills, moral and ethical values in students.",
            "To build strategic networking with alumni, industries and academic institutions.",
          ]}
        />
        <Department_slider />
        <div className="home-po-gallery-container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="home-po-container">
            <h1 className="relative heading-top-left-line">
              Program <span className="heading-red">Outcome</span>
            </h1>
            <div className="program-outcome-content reveal">
              <ol>
                <li>
                  Basic and Discipline specific knowledge: Apply knowledge of
                  basic mathematics, science and engineering fundamentals and
                  engineering specialization to solve the engineering problems.
                </li>
                <li>
                  Problem analysis: Identify and analyse well-defined
                  engineering problems using codified standard methods.
                </li>
                <li>
                  Design/ development of solutions: Design solutions for
                  well-defined technical problems and assist with the design of
                  systems components or processes to meet specified needs.
                </li>
                <li>
                  Engineering Tools, Experimentation and Testing: Apply modern
                  engineering tools and appropriate technique to conduct
                  standard tests and measurements.
                </li>
                <li>
                  Engineering practices for society, sustainability and
                  environment: Apply appropriate technology in context of
                  society, sustainability, environment and ethical practices.
                </li>
                <li>
                  Project Management: Use engineering management principles
                  individually, as a team member or a leader to manage projects
                  and effectively communicate about well-defined engineering
                  activities.
                </li>
                <li>
                  Life-long learning: Ability to analyse individual needs and
                  engage in updating in the context of technological changes.
                </li>
              </ol>
            </div>
          </div>
          <div className="gallery-container">
            <h1 className="relative heading-top-left-line">
              Photo <span className="heading-red">Gallery</span>
            </h1>
            <div class="container mx-auto reveal">
              <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {galleryImages.map((element, index) => (
                  <img
                    className="galleryImg"
                    width={250}
                    height={150}
                    src={element}
                    onClick={() => openImageViewer(index)}
                  />
                ))}
                {showImageViewer && (
                  <ImageViewer
                    images={galleryImages}
                    onClose={closeImageViewer}
                    currentIndex={currentImageIndex}
                    onNext={goToNextImage}
                    onPrev={goToPrevImage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <Recruiters />
      </div>
    </>
  );
}
