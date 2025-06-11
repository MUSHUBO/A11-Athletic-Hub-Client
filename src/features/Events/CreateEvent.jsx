import React from 'react';
import axios from 'axios';

const CreateEvent = () => {
    const handleAddEvent = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        // save event to the database
        axios.post('http://localhost:3000/events', data)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                alert(error);
            })
    }

    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center'><span className='text-emerald-500'>Create</span> Event</h1>
            <p className='text-gray-600 text-center mt-2 mb-10'>Here is create in you beautiful event and showing you event in the world</p>

            <form onSubmit={handleAddEvent}>
                <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
                    <fieldset className="border border-gray-300 rounded-lg p-4">
                        <legend className="text-lg font-semibold text-emerald-600 px-2">Event Details</legend>

                        <div className="mt-4 flex flex-col space-y-4">
                            {/* name */}
                            <div>
                                <label htmlFor="eventName" className="block mb-1 font-medium text-gray-700">Event Name</label>
                                <input
                                    type="text"
                                    id="eventName"
                                    name="eventName"
                                    required
                                    placeholder="Enter event name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>

                            {/* Type */}
                            <div>
                                <label htmlFor="eventType" className="block mb-1 font-medium text-gray-700">Event Type</label>
                                <select
                                    id="eventType"
                                    name="eventType"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select event type</option>
                                    <option value="Swimming">Swimming</option>
                                    <option value="Sprinting">Sprinting</option>
                                    <option value="Long Jump">Long Jump</option>
                                    <option value="High Jump">High Jump</option>
                                    <option value="Hurdle Race">Hurdle Race</option>
                                </select>
                            </div>

                            {/* date */}
                            <div>
                                <label htmlFor="eventDate" className="block mb-1 font-medium text-gray-700">Event Date</label>
                                <input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="border border-gray-300 rounded-lg p-4">
                        <legend className="text-lg font-semibold text-emerald-600 px-2">Description & Image</legend>

                        <div className="mt-4 flex flex-col space-y-4">
                            {/* description */}
                            <div>
                                <label htmlFor="description" className="block mb-1 font-medium text-gray-700">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    required
                                    placeholder="Write a detailed description"
                                    className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>

                            {/* img url */}
                            <div>
                                <label htmlFor="image" className="block mb-1 font-medium text-gray-700">Event Image URL</label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    required
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>
                        </div>
                    </fieldset>


                    {/* submitted button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
                    >
                        Submit Event
                    </button>
                </div>

            </form>

        </div>
    );
};

export default CreateEvent;