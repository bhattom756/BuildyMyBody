import React, { useState } from "react";

const Carousel = () => {
	const [carouselItems, setCarouselItems] = useState([
		{
			src: "/img/Banner_1.jpg",
			alt: "First slide",
			active: true,
		},
		{
			src: "/img/discount-banner2.jpg",
			alt: "Second slide",
			active: false,
		},
		{
			src: "/img/discount-banner3.jpg",
			alt: "Third slide",
			active: false,
		},
	]);

	return (
		<section style={{ background: 'black' }}>
			<div
				id="carouselExampleControls3"
				className="carousel slide container"
				data-ride="carousel"

			>
				<div className="carousel-inner " >
					{carouselItems.map((item, index) => (
						<div
							key={index}
							className={`carousel-item ${item.active ? "active" : ""}`}
						>
							<img className="d-block w-100 carousel-discount-img rounded" src={item.src} alt={item.alt} />
						</div>
					))}
				</div>

				{/* </div> */}
			</div>
		</section>
	);
};

export default Carousel;
