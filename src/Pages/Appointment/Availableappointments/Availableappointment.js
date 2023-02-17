import format from 'date-fns/format';
import React, { useEffect, useState } from 'react';
import Appointmentoptions from './Appointmentoptions';



const Availableappointment = ({ Dateselect, setDateselect }) => {
    const [appointmentoptions, setappointmentoptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setappointmentoptions(data))
    }, [])
    return (
        <section className='my-16'>

            <p className='text-center text-orange-700 font-bold'>Available Appointments on {format(Dateselect, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentoptions.map(appointment => <Appointmentoptions key={appointment._id} Dateselect={Dateselect} appointmentoptions={appointment} setTreatment={setTreatment} treatment={treatment}></Appointmentoptions>)
                }

            </div>

        </section>
    );
};

export default Availableappointment;