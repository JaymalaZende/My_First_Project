import React from 'react';
import { useNavigate } from 'react-router-dom';

function InsurancePolicy() {
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-4">
            <h1 className="text-3xl font-bold my-4 text-center">Insurance Policy</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.freepik.com/free-vector/gradient-logo-template-world-health-day-awareness_23-2151256990.jpg?w=740&t=st=1715860834~exp=1715861434~hmac=8765384469fdd8d0e63d53a50974dabddf4ff35796211b5e072246037e8a7fae"
                        alt="Card Image"
                        className="w-full max-w-md h-auto object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">Health</h2>
                    <p className="text-gray-600 mt-2">
                        This is a sample card description. You can add more content here.
                    </p>
                    <button onClick={() => navigate("/Health")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        View More
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.freepik.com/premium-vector/auto-car-logo-design-with-concept-sports-car-vehicle-icon-silhouettevector-illustration-design-template_6415-8199.jpg?w=740"
                        alt="Card Image"
                        className="w-full max-w-md h-auto object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">Car Insurance</h2>
                    <p className="text-gray-600 mt-2">
                        This is a sample card description. You can add more content here.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => navigate("/CarInsurance")}>
                        Learn More
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.freepik.com/free-vector/hand-drawn-ozone-therapy-logo_23-2149855742.jpg?t=st=1715861106~exp=1715864706~hmac=198234d4d776b6731b9659ebc3ac2e93ab342fb689ec0ba43576616dd451a6c2&w=740"
                        alt="Card Image"
                        className="w-full max-w-md h-auto object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">Term Life</h2>
                    <p className="text-gray-600 mt-2">
                        This is a sample card description. You can add more content here.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => navigate("/Termlife")}>
                        Learn More
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.freepik.com/free-vector/home-health-care-logo-design-template_23-2150893420.jpg?t=st=1715577753~exp=1715581353~hmac=ee3fbd067fe79a6e5e94b63d8ec0dec77e9c01baacf212a3c9a77afc67050143&w=740"
                        alt="Card Image"
                        className="w-full max-w-md h-auto object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">Home Insurance</h2>
                    <p className="text-gray-600 mt-2">
                        This is a sample card description. You can add more content here.
                    </p>
                    <button onClick={() => navigate("/PolicyPage")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InsurancePolicy;
