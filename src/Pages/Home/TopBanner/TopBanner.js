import React from "react";

const TopBanner = () => {
    return (
        <div>
            <div id="carouselExampleCrossfade"
  class="carousel slide carousel-fade relative h-screen"
  data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        <img
                            src="https://i.ibb.co/ZXQzZyR/top-free-things-to-do-in-paris-france-tips-travel-guide-itinerary-europe.jpg"
                            class="block w-full object-cover h-screen"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-3xl">France</h5>
                            <p>Let's Explore the beauty of Paris</p>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://i.ibb.co/4MDyMxc/free-things-to-do-in-paris-france-europe-itinerary-museum-louvre-musee.jpg"
                            class="block w-full object-cover h-screen"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">France</h5>
                            <p>Let's explore the culture of Paris town.</p>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://i.ibb.co/L6yMJRd/seine-river-bank-cruise-paris-eiffel-tower-france-europe-bastille-day.jpg"
                            class="block w-full object-cover h-screen"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">France</h5>
                            <p>Let's Explore the sea's in Paris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner ;