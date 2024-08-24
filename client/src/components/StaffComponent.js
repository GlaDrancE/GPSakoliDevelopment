import React from 'react'
export default function StaffComponent(props) {
  return (
    <div >
      <div className="h-80 w-60 hover:bg-white hover:scale-110 hover:transition-transform hover:duration-300 mt-8 staffComp">
        <div className="relative overflow-hidden">
          {/* <!-- Half-covered image --> */}
          <div className="h-64 w-60 from-gray-200 to-transparent absolute top-0 left-0 right-0"></div>
          <div className="h-32  bg-black">
            <img src={`https://gpsakoli.ac.in/` + props.staffimages.image} alt="Image" className=" h-full object-contain mx-auto" />
          </div>
          {/* <!-- Card content --> */}
          <div className="h-42 bg-white rounded-lg shadow-lg relative">
            <div className='bg-red-100'>
              <h2 className="text-sm font-bold text-center staffResigntion">{props.staffimages.name}</h2>
              <h2 className="text-sm text-center font-semibold staffName text-red-700">{props.staffimages.designation}</h2>
            </div>
            <ul className='text-sm  font-bold p-2'>
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
