import React from 'react';
import { useNavigate } from 'react-router-dom';

function CarManagementApp() {
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-4">
            <h1 className="text-3xl font-bold my-4 text-center">Car Management</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.freepik.com/free-psd/abstract-web-logo-typographical-transparent-psd_460848-17735.jpg?w=740&t=st=1715577690~exp=1715578290~hmac=1b5a72d327d7ae15b6ae983342280cb8562c6ec509a2ded376e12eb2fb64b3bd"
                        alt="Card Image"
                        className="w-full max-w-md h-auto object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">Services</h2>
                    <p className="text-gray-600 mt-2">
                        This is a sample card description. You can add more content here.
                    </p>
                    <button onClick={() => navigate("/Service")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        View More
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.freepik.com/free-vector/gradient-logo-template-with-abstract-shape_23-2148212042.jpg?w=740&t=st=1715577832~exp=1715578432~hmac=c6c12156fe3e8c4522ab987a52cfca8fcddebbce7b010210d63f4d305d939793"
                        alt="Card Image"
                        className="w-full max-w-md h-auto object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">Expenses</h2>
                    <p className="text-gray-600 mt-2">
                        This is a sample card description. You can add more content here.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => navigate("/Expenses")}>
                        Learn More
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.freepik.com/free-vector/graduation-white-background_24908-61004.jpg?t=st=1715577018~exp=1715580618~hmac=0ded2332919b44738c372ba2745a1b27750e3c96fae39abab6113d16c48c1fe9&w=740"
                        alt="Card Image"
                        className="w-full max-w-md h-auto object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">Licenses</h2>
                    <p className="text-gray-600 mt-2">
                        This is a sample card description. You can add more content here.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => navigate("/LicensesForm")}>
                        Learn More
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.freepik.com/free-vector/home-health-care-logo-design-template_23-2150893420.jpg?t=st=1715577753~exp=1715581353~hmac=ee3fbd067fe79a6e5e94b63d8ec0dec77e9c01baacf212a3c9a77afc67050143&w=740"
                        alt="Card Image"
                        className="w-full max-w-md h-auto object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">Insurance</h2>
                    <p className="text-gray-600 mt-2">
                        This is a sample card description. You can add more content here.
                    </p>
                    <button onClick={() => navigate("/Insurance")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CarManagementApp;
