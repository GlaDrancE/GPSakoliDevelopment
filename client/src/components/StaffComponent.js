import React from 'react'
export default function StaffComponent(props) {
  return (
    <div>
      <div className="lg:max-w-sm md:max-w-md mt-8 staffComp">
        <div className="relative overflow-hidden">
          {/* <!-- Half-covered image --> */}
          <div className="h-12 from-gray-200 to-transparent absolute top-0 left-0 right-0"></div>
          <div className="w-full h-64 bg-black">
            <img src={`https://gpsakoli.ac.in/` + props.staffimages.image} alt="Image" className=" h-full object-contain mx-auto" />
          </div>
          {/* <!-- Card content --> */}
          <div className="bg-white rounded-lg shadow-lg relative">
            <div className='bg-red-100'>
              <h2 className="text-2xl font-bold text-center staffResigntion">{props.staffimages.name}</h2>
              <h2 className="text-l text-center font-semibold staffName text-red-700">{props.staffimages.designation}</h2>
            </div>
            <ul className='p-2 staffDetails'>
              <li>Qualification : {props.staffimages.qualification}</li>
              <li>Experience : {props.staffimages.TeachingExperience} Years</li>
              <li>Contact No. : {props.staffimages.contact}</li>
              <li>Email : {props.staffimages.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
