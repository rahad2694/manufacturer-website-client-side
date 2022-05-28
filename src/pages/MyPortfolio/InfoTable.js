import React from 'react';

const InfoTable = () => {
    return (
        <div>
            <div className="flex flex-col border-2 rounded-lg w-2/4 mx-auto my-10">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                            <span className="input input-bordered input-secondary w-full max-w-xs">Stack:</span>
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                            <span className="input input-bordered input-secondary w-full max-w-xs">MERN Stack</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span className="input input-bordered input-success w-full max-w-xs">Location:</span>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span className="input input-bordered input-success w-full max-w-xs">Bangladesh</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span className="input input-bordered input-warning w-full max-w-xs">GitHub:</span>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <a href='https://github.com/rahad2694' className="input input-bordered input-warning w-full max-w-xs">Link</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span className="input input-bordered input-info w-full max-w-xs">LinkedIn:</span>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <a href='https://www.linkedin.com/in/saiful-islam-rahad/' className="input input-bordered input-info w-full max-w-xs">Link</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span className="input input-bordered input-error w-full max-w-xs">Email:</span>
                                        </td>
                                        <td className="text-sm font-medium text-gray-900 px-6 py-4">
                                            <span className="input input-bordered input-error w-full max-w-xs">saiful.rahad26@gmail.com</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoTable;