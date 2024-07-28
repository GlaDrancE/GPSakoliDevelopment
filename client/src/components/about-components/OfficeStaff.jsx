import React from "react";
import img from "../../images/supporting-staff-images/computer/dhabale.jpeg";
export default function OfficeStaff() {
	return (
		<>
			<h1 className="sub-heading heading-top-left-line">Office Staff</h1>
			<table border="1px">
				<thead>
					<tr>
						<td>Sr. No.</td>
						<td>Photo</td>
						<td>Name Of Working Staff</td>
						<td>Mobile Number</td>
						<td>Details Of Work</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							<img src={img} width={100} height={100} alt="" />
						</td>
						<td>
							Shri. Narsingh Chetram Basena (Office
							Superintendent)
						</td>
						<td>9503269674</td>
						<td>
							Supervising and controlling the operations of all
							the workplaces, checking the ash book and line
							transactions on time and solving the problems
							encountered at the workplaces. Supervising the work
							on all hte workshops.
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>
							<img src={img} width={100} height={100} alt="" />
						</td>
						<td>
							Shri. Narsingh Chetram Basena (Office
							Superintendent)
						</td>
						<td>9503269674</td>
						<td>
							Supervising and controlling the operations of all
							the workplaces, checking the ash book and line
							transactions on time and solving the problems
							encountered at the workplaces. Supervising the work
							on all hte workshops.
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>
							<img src={img} width={100} height={100} alt="" />
						</td>
						<td>
							Shri. Narsingh Chetram Basena (Office
							Superintendent)
						</td>
						<td>9503269674</td>
						<td>
							Supervising and controlling the operations of all
							the workplaces, checking the ash book and line
							transactions on time and solving the problems
							encountered at the workplaces. Supervising the work
							on all hte workshops.
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>
							<img src={img} width={100} height={100} alt="" />
						</td>
						<td>
							Shri. Narsingh Chetram Basena (Office
							Superintendent)
						</td>
						<td>9503269674</td>
						<td>
							Supervising and controlling the operations of all
							the workplaces, checking the ash book and line
							transactions on time and solving the problems
							encountered at the workplaces. Supervising the work
							on all hte workshops.
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>
							<img src={img} width={100} height={100} alt="" />
						</td>
						<td>
							Shri. Narsingh Chetram Basena (Office
							Superintendent)
						</td>
						<td>9503269674</td>
						<td>
							Supervising and controlling the operations of all
							the workplaces, checking the ash book and line
							transactions on time and solving the problems
							encountered at the workplaces. Supervising the work
							on all hte workshops.
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
