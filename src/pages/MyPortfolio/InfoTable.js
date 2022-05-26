import React from 'react';

const   InfoTable = () => {
    return (
        <div>

            <div class="flex flex-col border-2 rounded-lg w-2/4 mx-auto my-10">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            <span class="input input-bordered input-secondary w-full max-w-xs">Stack:</span>
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            <span class="input input-bordered input-secondary w-full max-w-xs">MERN Stack</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span class="input input-bordered input-success w-full max-w-xs">Location:</span>
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span class="input input-bordered input-success w-full max-w-xs">Bangladesh</span>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span class="input input-bordered input-warning w-full max-w-xs">GitHub:</span>
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <a href='https://github.com/rahad2694' class="input input-bordered input-warning w-full max-w-xs">Link</a>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span class="input input-bordered input-info w-full max-w-xs">LinkedIn:</span>
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <a href='https://www.linkedin.com/in/saiful-islam-rahad/' class="input input-bordered input-info w-full max-w-xs">Link</a>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span class="input input-bordered input-error w-full max-w-xs">Email:</span>
                                        </td>
                                        <td class="text-sm font-medium text-gray-900 px-6 py-4">
                                            <span class="input input-bordered input-error w-full max-w-xs">saiful.rahad26@gmail.com</span>
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