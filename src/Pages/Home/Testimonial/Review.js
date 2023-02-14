import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{review.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, eligendi magnam repudiandae incidunt excepturi reprehenderit nihil, facilis ut repellat doloremque eveniet quia iusto hic neque officiis omnis aut. Quas, voluptate!</p>
                    <div className="flex items-center gap-6 mt-4">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-orange-700 ring-offset-base-100 ring-offset-2">
                                <img src={review.img} />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl'>{review.name}</h4>
                            <p>{review.location}</p>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Review;