import React from "react";
import {useParams} from "react-router-dom";
// import Image_Background from "../components/Image_Background";
import Vision_Mission from "../Vision_Mission";
// import Recruiters from "../components/Recruiters";
export default function DeptAbout() {
	const {branch} = useParams();
	const DeptAboutData = {
		computer: {
			description: `Computer Engineering is core branch among other
		branches. Computer engineering continually push the
		capability and applicability of computer in every
		industry and every facet of modern life. it embeds
		computers in other machines and system, build network to
		transfer data and develop way to make computer faster,
		smaller and more capable. The pass outs have
		opportunities to work as Customer support Engineer,
		Programmer, Maintenance Engineer and hardware Engineer
		in various sector or companies like IBM, TCS, WIPRO,
		persistent software, tech. Mahindra, Infosys etc.
		Students can also start their own career in small
		software development firms or Hardware Maintenance
		firms.`,
			vision: `To produce competent Computer Engineers for development of the society.`,
			mission: [
				`To impart excellent technical knowledge through modern infrastructure and laboratories.`,
				`To promote innovative thinking in the minds of budding engineers.`,
				`To develop the students competent to face the challenges incorporating technical and entrepreneurship skills.`,
				`To inculcate moral and ethical values.`,
			],
			poes: [
				`PEO1: Provide socially responsible, environment friendly solutions to Computer engineering related broad-based problems adapting professional ethics.`,
				`PEO2: Adapt state-of-the-art computer engineering broad-based technologies to work in multi-disciplinary work environments.`,
				`PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.`,
			],
			psos: [
				`
					PSO1: Computer Software and Hardware Usage: Use state-of-the-art technologies for operation and application of computer software and hardware.`,
				`PSO2: Computer Engineering Maintenance: Maintain computer engineering realted software and hardware systems.`,
			],
			pos: [
				`PO1:Basic and Discipline Specific Knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.`,
				`PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.`,
				`PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.`,
				`PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.`,
				`PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.`,
				`PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.`,
				`PO7: Life-long learning: Ability to analyses individual needs and engage in updating in the context of technological change.`,
			],
		},
		civil: {
			description: `The department activities embraces planning, design construction and management. The faculties are highly qualified, experienced, dedicated and dynamic. As per MSBTE norms, the department is enriched with well-equipped laboratories and software to enhance the knowledge of students to produce engineers competent and capable of serving the nation in the world of globalization. The department is pioneer in providing services to the other departments, like testing of soil and construction material, consultancies and technical audit of civil engineering works which helps for internal revenue generation to the government.`,
			vision: `To produce competent Civil Engineers for development of the society.`,
			mission: [
				`To impart excellent technical knowledge through modern infrastructure and laboratories.`,
				`To promote innovative thinking in the minds of budding engineers.`,
				`To develop the students competent to face the challenges incorporating technical and entrepreneurship skills.`,
				`To inculcate moral and ethical values.`,
			],
			poes: [
				`PEO1: Provide socially responsible, environment friendly solutions to Civil engineering related broad-based problems adapting professional ethics.`,
				`PEO2: Adapt state-of-the-art Civil engineering broad-based technologies to work in multidisciplinary work environments.`,
				`PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.`,
			],
			psos: [
				`PSO1: Construction Planning and Designing: Perform optimal civil engineering construction, planning and designing activities of desired quality at optimal cost.`,
				`PSO1: Construction Execution and Maintenance: Execute civil engineering construction and maintenance using relevant materials and equipment.`,
			],
			pos: [
				`PO1:Basic and Discipline Specific Knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.`,
				`PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.`,
				`PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.`,
				`PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.`,
				`PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.`,
				`PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.`,
				`PO7: Life-long learning: Ability to analyses individual needs and engage in updating in the context of technological change.`,
			],
		},
		mechanical: {
			description: `Establishment in 1990, this department has experienced faculty and well equipped Laboratories with investment totaling around 1.1 crores. The department has delivered consistently good result in board examination with regular campus placement in well-known industries. Good liaison with industries is maintained to provide adequate industry exposure to students through industrial visit and expert talks. Extracurricular activities and involvement in sports is emphasized to develop all round personality of the students. Faculty from the department is actively involved in technical consultancy services.`,
			vision: `To produce competent Mechanical Engineers for development of the society.`,
			mission: [
				`To impart excellent technical knowledge through modern infrastructure and laboratories.`,
				`
			To promote innovative thinking in the minds of budding engineers.`,
				`
			To develop the students competent to face the challenges incorporating technical and entrepreneurship skills.`,
				`
			To inculcate moral and ethical values.`,
			],
			poes: [
				`PEO1: Provide socially responsible, environment friendly solutions to Mechanical engineering related broad-based problems adapting professional ethics.`,
				`PEO2: Adapt state-of-the-art Mechanical engineering broad-based technologies to work in multi-disciplinary work environments.`,
				`PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.`,
			],
			psos: [
				`PSO1: Modern Software Usage: Use latest Mechanical engineering related softwares for simple design, drafting, manufacturing, maintenance and documentation of mechanical engineering components and processes.`,
				`PSO2: Equipment and Instruments: Maintain equipment and instruments related to Mechanical Engineering.`,
				`PSO3: Mechanical Engineering Processes: Manage Mechanical engineering processes by selecting and scheduling relevant equipment, substrates, quality control techniques, and operational parameters.`,
			],
			pos: [
				`PO1:Basic and Discipline Specific Knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.`,
				`PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.`,
				`PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.`,
				`PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.`,
				`PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.`,
				`PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.`,
				`PO7: Life-long learning: Ability to analyses individual needs and engage in updating in the context of technological change.`,
			],
		},
		electrical: {
			description: `The department has taken development as a continuous process and assured this through its vision and missions. The department has blend of senior, young and dynamic faculty.All these laboratories are well equipped with Digital and Analog measuring instruments, modern equipment’s and AC / DC electrical machines.`,
			vision: `To produce competent Electrical Engineers for development of the society`,
			mission: [
				`To impart excellent technical knowledge and skills through modern Infrastructure & laboratories`,
				`
			To promote innovative thinking in the minds of budding engineers`,
				`
			To develop the student competent to face the challenges incorporating technical & entrepreneurship skills`,
				`
			To inculcate moral and ethical values`,
			],
			poes: [
				`PEO1: Provide socially responsible, environment friendly solutions to Electrical engineering related broad-based problems adapting professional ethics.`,
				`PEO2: Adapt state-of-the-art Electrical engineering broad-based technologies to work in multi-disciplinary work environments.`,
				`PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.`,
			],
			psos: [
				`PSO1: Electrical Equipment: Maintain various types of rotating and static electrical equipment.`,
				`PSO2: Electric Power Systems: Maintain different types of electrical power systems`,
			],
			pos: [
				`PO1:Basic and Discipline Specific Knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.`,
				`PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.`,
				`PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.`,
				`PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.`,
				`PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.`,
				`PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.`,
				`PO7: Life-long learning: Ability to analyses individual needs and engage in updating in the context of technological change.`,
			],
		},
		electronics: {
			description: `The department has taken development as a continuous process and assured this through its vision and missions. The department has qualified, committed, versatile, resourceful and dynamic faculty. Also it has Good liaison with industries, Board of Technical Education & Higher offices. To cope up with the curriculum of MSBTE, all laboratories are well equipped with Fiber Optic, Digital & Mobile Communication, Control system and PLCs, Embedded System etc. trainerKits and software’s . Also EML-Electronic Min Lab concept is introduced for enhancing skills. EML provides flexibility in performing practical’s at any-time and any-where`,
			vision: `To develop ethical and competent technical professionals by providing sound knowledge, skills and human values to cater the need of stakeholders.`,
			mission: [
				`To grow and raise the professional, intellectual, social and personal abilities of the students.`,
				`To keep pace with state of art technology & time.`,
				`To provide training to Faculty and staff.`,
				`To build liaison with stakeholder.`,
				`To update infrastructure and facilities.`,
			],
			poes: [
				`PEO1: Provide socially responsible, environment friendly solutions to Electronics and Telecommunication Engineering related broad-based problems adapting professional ethics.`,
				`PEO2: Adapt state-of-the-art Electronics and Telecommunication Engineering broad-based technologies to work in multi-disciplinary work environments.`,
				`PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.`,
			],
			psos: [
				`PSO1: Electronics and Telecommunication Systems: Maintain various types of Electronics and Telecommunication systems.`,
				`PSO2: EDA Tools Usage: Use EDA tools to develop simple Electronics and Telecommunication engineering related circuits`,
			],
			pos: [
				`PO1:Basic and Discipline Specific Knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.`,
				`PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.`,
				`PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.`,
				`PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.`,
				`PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.`,
				`PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.`,
				`PO7: Life-long learning: Ability to analyses individual needs and engage in updating in the context of technological change.`,
			],
		},
		workshop: {
			description: `The Central Workshop of the Institute is the Central facility which provides training to diploma students and also assists them in the fabrication of their projects and experimental setups. It also provides maintenance services to various departments of Institute in its day to day working. Workshop also includes central store which perform all purchase and write off related activities of dead stock as well as consumable material for various departments of Institute. Workshop Superintendent is the store officer by virtue of post.
			The set-up of the Central Workshop is divided in shops namely Machine Shop, Fitting Shop, Carpentry Shop, Black Smithy Shop, Plumbing and Sheet Metal Shop and Welding Shop. All shops of the central workshop are well equipped for training purpose according to new modern technology. In the era of rapid industrialization particularly in the engineering field, requirements of specialized tools, Lathe, Shaper, Planar, CNC (Computer Numerical Control) Machines & other precision Machines are indispensable. Simultaneously demand for high quality toolmakers are also growing rapidly.
			On behalf of our Staffs members, I welcome you for an exciting learning journey.The Central workshop was started in the year 1983 and has made remarkable achievements during this journey.From students’ corner, workshop plays an important role to develop new technical skills and knowledge in the field of new and emerging machines as well as to nurture tomorrow’s industrial technicians. We inform them, the importance of machines (includes proper tooling) and its usefulness in industry. Our practical exposure to machines covers almost all aspects of today’s industries requirements.										
			Central Workshop of an Institute is considered as the forehand platform providing the real industrial environment for the students. Students are engaged in workshop from their first semester, performing practical's with different materials, tools and machines. Students are exposed to get real-time hands-on practice and experience at various sections like Welding shop, Wood working and pattern making, CNC shop, Machine shop, Turning shop, Black-smithy shop, Sheet metal and Plumbing shop, Moulding shop and fitting shop.Diploma engineers are expected to possess various hands on skills in operation of various tools and machines in Industry. A comprehensive Curriculum of workshop practices is framed by MSBTE (Maharashtra State Board of Technical Education, Mumbai) for all diploma engineering streams so as to inculcate operational and maintenance attitude towards Industrial working culture. Workshop department, along with curricular activities provides a platform to perform in house students work related to micro-project, final year projects, Industrial sponsored projects etc. CNC shop is equipped with state-of-the-art CNC Lathe and 4 Axis robotic arm where students perform various program-based machining operations`,
			vision: `To be a centre of skill Development.`,
			mission: [
				`M1. To Provide quality Education , training, and innovative engineering solutions.`,
				`
			M2. To Provide platform to the learner towards attaining skills of manufacturing sector.`,
				`
			M3. To undertake skill enhancement training programmes for students.`,
				`
			M4. To impart Social and professional ethics.`,
			],
			poes: [
				`PEO1: Produce quality and skilled manpower through practical training`,
				`PEO2: To establish a Skill development centre in manufacturing Sector`,
				`PEO3: To establish a production centre of utility articles for institute`,
				`PEO4: To facilitate other Faculty / Department to play their rightful role in line with the mission and vision of the institute`,
				`PEO5: To generate internal Revenue to supplement government funding to the Institute`,
			],
			psos: [
				`PSO1: Electronics and Telecommunication Systems: Maintain various types of Electronics and Telecommunication systems.`,
				`PSO2: EDA Tools Usage: Use EDA tools to develop simple Electronics and Telecommunication engineering related circuits`,
			],
			pos: [
				`PO1:Basic and Discipline Specific Knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.`,
				`PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.`,
				`PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.`,
				`PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.`,
				`PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.`,
				`PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.`,
				`PO7: Life-long learning: Ability to analyses individual needs and engage in updating in the context of technological change.`,
			],
		},
	};
	return (
		<>
			<div className="about-department-container text-justify p-2">
				<h1>
					About <span className="heading-red">Department</span>
				</h1>
				{branch === "computer" && DeptAboutData.computer.description}
				{branch === "civil" && DeptAboutData.civil.description}
				{branch === "mechanical" &&
					DeptAboutData.mechanical.description}
				{branch === "electrical" &&
					DeptAboutData.electrical.description}
				{branch === "electronics" &&
					DeptAboutData.electronics.description}
				{branch === "workshop" && DeptAboutData.workshop.description}
			</div>
			{branch === "computer" && (
				<Vision_Mission
					vision={DeptAboutData.computer.vision}
					mission={DeptAboutData.computer.mission}
				/>
			)}
			{branch === "civil" && (
				<Vision_Mission
					vision={DeptAboutData.civil.vision}
					mission={DeptAboutData.civil.mission}
				/>
			)}
			{branch === "mechanical" && (
				<Vision_Mission
					vision={DeptAboutData.mechanical.vision}
					mission={DeptAboutData.mechanical.mission}
				/>
			)}
			{branch === "electrical" && (
				<Vision_Mission
					vision={DeptAboutData.electrical.vision}
					mission={DeptAboutData.electrical.mission}
				/>
			)}
			{branch === "electronics" && (
				<Vision_Mission
					vision={DeptAboutData.electronics.vision}
					mission={DeptAboutData.electronics.mission}
				/>
			)}
			{branch === "workshop" && (
				<Vision_Mission
					vision={DeptAboutData.workshop.vision}
					mission={DeptAboutData.workshop.mission}
				/>
			)}
			<div className="dept-peos-block my-16">
				<h1 className="heading-top-left-line">PEOs</h1>
				<ul>
					{branch === "computer" &&
						DeptAboutData.computer.poes.map((poe) => (
							<li className="list-disc">{poe}</li>
						))}
					{branch === "civil" &&
						DeptAboutData.civil.poes.map((poe) => (
							<li className="list-disc">{poe}</li>
						))}
					{branch === "mechanical" &&
						DeptAboutData.mechanical.poes.map((poe) => (
							<li className="list-disc">{poe}</li>
						))}
					{branch === "electrical" &&
						DeptAboutData.electrical.poes.map((poe) => (
							<li className="list-disc">{poe}</li>
						))}
					{branch === "electronics" &&
						DeptAboutData.electronics.poes.map((poe) => (
							<li className="list-disc">{poe}</li>
						))}
					{branch === "workshop" &&
						DeptAboutData.workshop.poes.map((poe) => (
							<li className="list-disc">{poe}</li>
						))}
				</ul>
			</div>
			<div className="dept-psos-pos-block grid lg:grid-cols-2 gap-8">
				<div className="psos-block">
					<h1 className="heading-top-left-line">PSOs</h1>
					<ul className="text-justify">
						{branch === "computer" &&
							DeptAboutData.computer.psos.map((pso) => (
								<li className="list-disc">{pso}</li>
							))}
						{branch === "civil" &&
							DeptAboutData.civil.psos.map((pso) => (
								<li className="list-disc">{pso}</li>
							))}
						{branch === "mechanical" &&
							DeptAboutData.mechanical.psos.map((pso) => (
								<li className="list-disc">{pso}</li>
							))}
						{branch === "electrical" &&
							DeptAboutData.electrical.psos.map((pso) => (
								<li className="list-disc">{pso}</li>
							))}
						{branch === "electronics" &&
							DeptAboutData.electronics.psos.map((pso) => (
								<li className="list-disc">{pso}</li>
							))}
						{branch === "workshop" &&
							DeptAboutData.workshop.psos.map((pso) => (
								<li className="list-disc">{pso}</li>
							))}
					</ul>
				</div>
				<div className="pos-block">
					<h1>POs</h1>
					<ul className="text-justify">
						{branch === "computer" &&
							DeptAboutData.computer.pos.map((po) => (
								<li className="list-disc">{po}</li>
							))}
						{branch === "civil" &&
							DeptAboutData.civil.pos.map((po) => (
								<li className="list-disc">{po}</li>
							))}
						{branch === "mechanical" &&
							DeptAboutData.mechanical.pos.map((po) => (
								<li className="list-disc">{po}</li>
							))}
						{branch === "electrical" &&
							DeptAboutData.electrical.pos.map((po) => (
								<li className="list-disc">{po}</li>
							))}
						{branch === "electronics" &&
							DeptAboutData.electronics.pos.map((po) => (
								<li className="list-disc">{po}</li>
							))}
						{branch === "workshop" &&
							DeptAboutData.workshop.pos.map((po) => (
								<li className="list-disc">{po}</li>
							))}
					</ul>
				</div>
			</div>
		</>
	);
}
