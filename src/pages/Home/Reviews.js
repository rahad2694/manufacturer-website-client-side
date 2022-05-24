import React from 'react';

const Reviews = () => {
    return (
        <div className='my-12'>
            <h1 className='text-3xl font-bold mt-3 mb-10 italic mx-auto text-gray-700 max-w-4xl'>What Our Customers Say?</h1>
            <div id="carouselExampleCaptions" class="carousel slide relative carousel-dark" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full text-center">
                        <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
                            "They are maintaining their quality from long since. Thus they have made themselves a Brand!"
                        </p>
                        <div class="rating mt-2">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                        </div>
                        <div class="mt-4 mb-3 flex justify-center">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                class="rounded-full w-24 h-24 shadow-lg"
                                alt="Customer Review"
                            />
                        </div>
                        <p class="text-gray-600 font-semibold">- Anna Morian</p>
                    </div>
                    <div class="carousel-item relative float-left w-full text-center">
                        <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
                            "Tools from Allumin Aparatus are world class. They deserve to be declared the best in the market!"
                        </p>
                        <div class="rating mt-2">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-200" disabled/>
                        </div>
                        <div class="mt-4 mb-3 flex justify-center">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                                class="rounded-full w-24 h-24 shadow-lg"
                                alt="Customer Review"
                            />
                        </div>
                        <p class="text-gray-600 font-semibold">- Teresa May</p>
                    </div>
                    <div class="carousel-item relative float-left w-full text-center">
                        <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
                            "Every time I think of quality Tools and Apparatus, I surely think of <strong>Allumin Aparatus</strong>!"
                        </p>
                        <div class="rating mt-2">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-200" disabled/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-200" disabled/>
                        </div>
                        <div class="mt-4 mb-3 flex justify-center">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                class="rounded-full w-24 h-24 shadow-lg"
                                alt="Customer Review"
                            />
                        </div>
                        <p class="text-gray-600 font-semibold">- Kate Allise</p>
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Reviews;