import React from "react";
import portfolio_details from "../../pdfs/portfolio-details/portfolioDistribution-2021-22.pdf";
export default function PortfolioDetails() {
	return (
		<>
			<h1 className="sub-heading">Portfolio Details</h1>
			<iframe
				src={portfolio_details}
				frameborder="1"
				className="w-full h-full"></iframe>
		</>
	);
}
