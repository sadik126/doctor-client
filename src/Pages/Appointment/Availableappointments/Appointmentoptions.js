import { format } from 'date-fns';
import React, { useContext } from 'react';
import './Appointment.css';
import ReactDOM from 'react-dom';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { AuthContext } from '../../../Contexts/Authprovider';
import toast from 'react-hot-toast';

const Appointmentoptions = ({ appointmentoptions, setTreatment }) => {
    const { name, slots, price } = appointmentoptions




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


    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body mt-10">
                    <h2 className="text-xl font-bold text-center text-orange-700">{name}</h2>
                    <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    <p className='text-center'><small>Price: $<span className='text-green-700'>{price}</span> </small></p>
                    <div className="card-actions justify-center">
                        <label className="btn appointment" disabled={slots.length === 0} onClick={() => setTreatment(appointmentoptions)} htmlFor="my-modal-3">Book Appointment</label>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointmentoptions;