import React from 'react';

const Blog = () => {
    return (
        <div className='mx-4 md:mx-12 lg:mx-16 my-20'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="flush-headingOne">
                        <button className="font-semibold accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How will you improve the performance of a React Application?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show"
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-4 px-5">There are many ways to improve the performance of React Application. Such as, making sure that components receive only the props that are required. It will stop over-rendering unnecessary features. Again, we can Avoid using extra tags by using React fragments. We can also Avoid bundling of all the front-end codes in a single file so that the performance of our React App can get improved.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="flush-headingTwo">
                        <button className="font-semibold accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                            aria-expanded="false" aria-controls="flush-collapseTwo">
                            What are the different ways to manage a state in a React application?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-4 px-5">There are four major states to be managed and these are:
                            <ul>
                                <li><strong>Local state:</strong> Local states are often manipulated in response using the useState hook. To show or hide a model element, to store a conditionally updated value or to store the input values of a form submission.</li>
                                <li><strong>Global state:</strong> global state is the data that we manage across multiple elements. A common example of global state is authenticated user state. We shall change the data depending on a user is logged in or not in the system, thus global state is in use.</li>
                                <li><strong>Server state:</strong> There are several pieces of states that we need to manage every time we fetch or update data from an external server, including loading and error state. Fortunately there are several tools such as React Query and SWR that make managing server state easier for us.</li>
                                <li><strong>URL state:</strong> Example of URL state is, an URL which fetches a blog post based on its params like, id which is located in the URL.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="flush-headingThree">
                        <button className="font-semibold accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                            aria-expanded="false" aria-controls="flush-collapseThree">
                            How does prototypical inheritance work?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-4 px-5">Prototypical inheritance is a feature of JS to add methods and properties in an object. In JS, every object we create has a base object called "proto". In "proto", there are some built in methods which will be available for all objects. If we call a method and if JS can't find that method in the object, it will keep searching until the "proto" object is found and if not, it will result in an error.</div>
                    </div>
                </div>
                <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="flush-headingFive">
                        <button className="font-semibold accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                            aria-expanded="false" aria-controls="flush-collapseFive">
                            You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-4 px-5 mx-auto">
                            <img src="https://i.ibb.co/Xjx6FDb/find-products-by-name.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="flush-headingSix">
                        <button className="font-semibold accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                            aria-expanded="false" aria-controls="flush-collapseSix">
                            What is a unit test? Why should write unit tests?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-4 px-5">Unit testing is a type of software testing process where the smallest testable parts of an application are tested individually and independently for proper operation. The purpose is to validate that each unit of the software code performs as expected. This ensures the targeted quality of the software. Unit Tests isolate a section of code and verify its correctness which eventually contributes to the better user experience.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;