import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section className='mt-64' style={{ background: `url(${appointment})` }} data-aos="fade-right">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="lg:w-1/2 hidden lg:block md:block rounded-lg  -mt-32" />
                    <div style={{ padding: '24px' }}>
                        <p className='text-orange-700 text-lg font-bold'>Appointment</p>
                        <h4 className="text-4xl  font-bold text-white">Make an appointment Today</h4>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-grad">Appointment</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Appointment;