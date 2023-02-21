import { format } from 'date-fns';
import React, { useContext } from 'react';
import './Appointment.css';
import ReactDOM from 'react-dom';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { AuthContext } from '../../../Contexts/Authprovider';

const Appointmentoptions = ({ appointmentoptions, setTreatment, treatment, Dateselect }) => {
    const { name, slots } = appointmentoptions

    const { user } = useContext(AuthContext)

    // const Clickmodal = () => {
    //     console.log('clicked', name)
    // }

    // const checkname = (e) => {
    //     // const form = e.target;
    //     const name = e.target.name.value;
    //     var regExp = /^[a-zA-Z-/.\' ']{3,30}$/
    //     if (regExp.test(name)) {
    //         document.getElementById('NameError').innerText('')
    //         return true;
    //     }
    //     else {
    //         document.getElementById('NameError').innerText('enter 3 to 30 words')
    //         return false;
    //     }
    // }

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
            treatment: name,
            patient: patientname,
            slot,
            email,
            phone,
        }

        console.log(booking)
        setTreatment(null)

    }
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body mt-10">
                    <h2 className="text-xl font-bold text-center text-orange-700">{name}</h2>
                    <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    <div className="card-actions justify-center">
                        <label className="btn appointment" disabled={slots.length === 0} onClick={() => setTreatment(appointmentoptions)} htmlFor="my-modal-3">Book Appointment</label>
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
                                    <span id="NameError" style={{ color: 'red' }}></span>
                                    <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Type your email" className="input input-bordered w-full max-w-xs" />
                                    <input name='phone' type="text" defaultValue={'+88'} placeholder="Type your number" className="input input-bordered w-full max-w-xs" />
                                    {/* <IntlTelInput
                                        className="input input-bordered w-full max-w-xs"
                                        preferredCountries={['bd']}
                                    // onPhoneNumberChange={onChange()}
                                    // onPhoneNumberBlur={onBlur()}
                                    /> */}
                                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointmentoptions;