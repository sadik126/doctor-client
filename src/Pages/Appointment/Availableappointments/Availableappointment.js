import { useQuery } from '@tanstack/react-query';
import format from 'date-fns/format';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Appointmentoptions from './Appointmentoptions';
import Bookingmodal from './Bookingmodal';



const Availableappointment = ({ Dateselect, setDateselect }) => {
    // const [appointmentoptions, setappointmentoptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(Dateselect, 'PP')

    const { data: appointmentoptions = [], isLoading, refetch } = useQuery({
        queryKey: ['appointments', date],
        queryFn: () => fetch(`http://localhost:5080/appointments?date=${date}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch('http://localhost:5080/appointments')
    //         .then(res => res.json())
    //         .then(data => setappointmentoptions(data))
    // }, [])
    return (
        <section className='my-16'>

            <p className='text-center text-orange-700 font-bold'>Available Appointments on {format(Dateselect, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentoptions.map(appointment => <Appointmentoptions key={appointment._id} refetch={refetch} Dateselect={Dateselect} appointmentoptions={appointment} setTreatment={setTreatment} treatment={treatment}></Appointmentoptions>)
                }

            </div>

            {
                treatment &&
                <Bookingmodal
                    Dateselect={Dateselect}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></Bookingmodal>
            }

        </section>
    );
};

export default Availableappointment;