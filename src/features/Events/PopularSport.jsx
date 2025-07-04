import React from 'react';

const PopularSport = ({ popular }) => {
    // console.log(popular);
    const { name, image, description, rank, bg } = popular;

    return (
        <div className={`rounded-3xl shadow-xl text-white ${bg} transform hover:scale-105 transition-all duration-300`} >
            <div className="p-10 h-80 flex flex-col justify-between items-start text-left">
                <div className="flex items-center justify-between w-full">
                    <div className="bg-white text-red-600 px-3 py-1 text-sm font-bold rounded-full shadow-md">
                        Rank #{rank}
                    </div>
                    <img
                        src={image} alt={name}
                        className="w-16 h-16 object-contain text-6xl drop-shadow-lg"
                    />
                </div>

                <div>
                    <h3 className="text-3xl font-extrabold tracking-wide">{name}</h3>
                    <p className="mt-2 text-white/90 text-base italic">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularSport;