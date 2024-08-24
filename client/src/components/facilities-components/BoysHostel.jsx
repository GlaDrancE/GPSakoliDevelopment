import {useState} from "react";
import React from "react";
import galleryImg1 from "../../images/hostel/Entrance.jpeg";
import galleryImg2 from "../../images/hostel/Mess.jpeg";
import galleryImg3 from "../../images/hostel/ground1.jpeg";
import galleryImg4 from "../../images/hostel/tt.jpeg";
import ImageViewer from "../ImageViewer";
const galleryImages = [galleryImg1, galleryImg2, galleryImg3, galleryImg4];
export default function BoysHostel() {
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
			<h1 className="heading">Boys Hostel</h1>
			<div className="instruction-container">
				<h2 className="sub-heading">Instructions</h2>
				<ul>
					<li>
						Admission is given on the basis of merit list as per
						Government rule.
					</li>
					<li>
						Student should read the rules before signing the
						application form (A copy of rules is attached with the
						application form).
					</li>
					<li>Rules are displayed in the hostel.</li>
					<li>Complaint Box/Register are kept in Hostel.</li>
					<li>
						Any cleanliness matter should be brought to the notice
						of the Rector.
					</li>
					<li>Inspection is done by Hostel Committee regularly.</li>
					<li>
						Application form with passport size photograph has to be
						submitted to the Rector after confirmation of admission.
					</li>
					<li>
						Students should submit full address and contact number
						of local Guardian and Parents.
					</li>
					<li>
						Room clearance form has to be filled while check out
						from hostel.
					</li>
					<li>
						Admission in the hostel will be continued as per
						eligibility of previous year result.
					</li>
					<li>
						Capacity of hostel is 160. and it has Mess,TV Room,
						Cricket Ground, Table tennis, Solar Heater, and CCTV for
						monitoring students activities inside hostel premises.
					</li>
					<li>
						For more details contact Mr. K.N. Potode, Sr. Lecturer,
						Electrical Dept. Mob: 9404932755.
					</li>
				</ul>
			</div>
			<hr className="my-6" />
			<div class="container mx-auto reveal">
				<h1 className="sub-heading">Hostel Images</h1>
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
		</>
	);
}
