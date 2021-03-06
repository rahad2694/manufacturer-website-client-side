import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectTable = () => {
    return (
        <div className="overflow-x-auto mx-12 my-10">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <td>Project Name</td>
                        {/* <td className='hidden lg:flex'>Type</td> */}
                        <td className='hidden lg:flex'>Description</td>
                        <td>Link</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>VitaPure</td>
                        <td className='hidden lg:flex text-green-500'>Warehouse Management System</td>
                        <td className='text-wrap hidden lg:flex'>
                            <ul>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> Performing CRUD Operation with the help of Mongo DB and Node JS.</li>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> Preventing Unauthorized access using protected route and Json web token.</li>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> Added informative Blogs about JS vs Node, SQL vs NoSQL, and Mongo dB.</li>
                            </ul>
                        </td>
                        <td>
                            <a className='hover:text-red-500 text-blue-500' href="https://vitapure-wms.web.app/">Live Site</a> <br />
                            <a className='hover:text-red-500 text-blue-500' href="https://github.com/rahad2694/warehouse-management-client-side">GitHub</a> <br />
                            <a className='hover:text-red-500 text-blue-500' href="https://github.com/rahad2694/warehouse-management-server-side">Server-side</a>
                        </td>
                    </tr>
                    <tr>
                        <td>BD Cycle<br/>Repair Shop  </td>
                        <td className='hidden lg:flex text-green-500'>A Company Site with React</td>
                        <td className='text-wrap hidden lg:flex'>
                            <ul>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> Application of React-Router to navigate to routes without page reload.</li>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> Using Re-Charts Library to show Graphical Performance of the Company.</li>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> Using Accordion and Modal and blogging about Context API, Semantic Tag.</li>
                            </ul>
                        </td>
                        <td>
                            <a className='hover:text-red-500 text-blue-500' href="https://rahad-bd-cycle-repair.netlify.app/">Live Site</a> <br />
                            <a className='hover:text-red-500 text-blue-500' href="https://github.com/rahad2694/product-analysis-website">GitHub Repo</a>
                        </td>
                    </tr>
                    <tr>
                        <td>To-Do Manager  </td>
                        <td className='hidden lg:flex text-green-500'>A Simple To-Do App</td>
                        <td className='text-wrap hidden lg:flex'>
                            <ul>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> Creating user with credentials and Implementing Firebase Authentication.</li>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> Using Protected route and navigating user to the intended page.</li>
                                <li className='text-sm w-3/4'><FontAwesomeIcon icon={faFileCircleCheck}></FontAwesomeIcon> User wise independent CRUD operation and with strike-through button.</li>
                            </ul>
                        </td>
                        <td>
                            <a className='hover:text-red-500 text-blue-500' href="https://simple-to-do-app-ac1be.web.app/">Live Site</a> <br />
                            <a className='hover:text-red-500 text-blue-500' href="https://github.com/rahad2694/simple-to-do-app">GitHub</a> <br />
                            <a className='hover:text-red-500 text-blue-500' href="https://github.com/rahad2694/simple-to-do-app-server">Server-side</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProjectTable;