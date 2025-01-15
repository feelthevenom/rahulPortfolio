import React from "react";

const Certificates = () => {
    return (
        <section className="text-white" id="certificates">
            <h2 className="text-center text-4xl font-bold text-white mb-8  mt-20">Certificates</h2>
            <div className="container mx-auto p-4">
                <div className="p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Best Paper Award</h3>
                            <p className="text-gray-400">IEEE Conference 2024 - IIIT Kottayam</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Full Stack Web Development</h3>
                            <p className="text-gray-400">Udemy</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">PyTorch for Deep Learning</h3>
                            <p className="text-gray-400">Udemy</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">C Programming</h3>
                            <p className="text-gray-400">Infosys Springboard</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">DBMS</h3>
                            <p className="text-gray-400">NPTEL</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Android App Development</h3>
                            <p className="text-gray-400">Udemy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
