"use client";

import React, { useState } from 'react';

export default function Registration() {
    const [formData, setFormData] = useState({
        studentName: '',
        fatherName: '',
        class: '',
        age: '',
        cnic: '',
        dateOfBirth: '',
        testTime: '',
        experience: '',
        email: '',
        gender: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
            <fieldset className="p-4">
                <h2 className="text-xl font-bold mb-4">Registration Form For IT Course</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div key={key} className="mb-4">
                            <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                            {key === 'gender' ? (
                                <select
                                    id={key}
                                    name={key}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                    onChange={handleChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            ) : (
                                <input
                                    type={key === 'email' ? 'email' : key === 'age' || key === 'dateOfBirth' ? 'date' : 'text'}
                                    id={key}
                                    name={key}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}