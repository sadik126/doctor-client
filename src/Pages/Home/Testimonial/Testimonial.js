import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'winson henry',
            review: '',
            location: 'dhaka',
            img: people1
        }
        ,
        {
            _id: 2,
            name: 'winson henry',
            review: '',
            location: 'dhaka',
            img: people2
        },
        {
            _id: 3,
            name: 'winson henry',
            review: '',
            location: 'dhaka',
            img: people3
        }

    ]
    return (
        <section className='my-28' data-aos="fade-right">
            <div className='flex justify-between'>
                <div  >
                    <h4 className='text-xl text-cyan-500 font-bold' >Testimonials</h4>
                    <h2 className='text-3xl'>whats our patients say?</h2>

                </div>
                <div>
                    <img src={quote} className="w-14  lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonial;