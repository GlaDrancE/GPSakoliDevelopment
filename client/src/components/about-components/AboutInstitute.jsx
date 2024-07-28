import React from "react";
import Vision_Mission from "../Vision_Mission";
export default function DeptAbout() {
  return (
    <>
      <div className="institute-desc text-justify p-2">
        <p>
          Government Polytechnic Sakoli is a technical institute located in
          Sendurwafa, Maharashtra, India. Established in 1983, it offers diploma
          programs in various engineering fields.
        </p>
      </div>
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
    </>
  );
}
