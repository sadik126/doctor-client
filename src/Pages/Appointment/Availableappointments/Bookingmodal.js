import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/Authprovider';

const Bookingmodal = ({ setTreatment, treatment, Dateselect, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(Dateselect, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = (e) => {
        e.preventDefault()
        // console.log("clicked")
        const form = e.target;
        const patientname = form.name.value;

        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;



        const booking = {
            appointmentDate: format(Dateselect, 'PP'),
            treatment: treatmentName,
            patient: patientname,
            slot,
            price,
            email,
            phone,
        }

        fetch('https://doctor-server-site.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking confirmed')
                    refetch()
                }

                else {
                    toast.error(data.message)

                }

            })

        console.log(booking)


    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-orange-700">{treatment?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-9 mt-10 justify-items-center'>
                        <input type="text" placeholder="Type here" disabled value={format(Dateselect, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {/* <option>Who shot first?</option> */}
                            {
                                treatment?.slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Type your name" className="input input-bordered w-full max-w-xs" />
                        {/* <span id="NameError" style={{ color: 'red' }}></span> */}
                        {/* <p>Price: ${treatment?.price}</p> */}
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Type your email" className="input input-bordered w-full max-w-xs" />

                        <input name='phone' type="text" defaultValue={'+88'} placeholder="Type your number" className="input input-bordered w-full max-w-xs" />
                        {/* <IntlTelInput
                                        className="input input-bordered w-full max-w-xs"
                                        preferredCountries={['bd']}
                                    // onPhoneNumberChange={onChange()}
                                    // onPhoneNumberBlur={onBlur()}
                                    /> */}
                        <label htmlFor="my-modal-3"><input className='btn btn-accent w-full' type="submit" value="Submit" /></label>

                    </form>
                </div>
            </div>

        </>
    );
};

export default Bookingmodal;