import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const Appointmentbanner = ({ Dateselect, setDateselect }) => {
    // const [Dateselect, setDateselect] = useState(new Date())
    const disabled = {
        before: Dateselect
    }
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-48">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker

                            disabled={disabled}
                            mode='single'
                            selected={Dateselect}
                            onSelect={setDateselect}

                        ></DayPicker>



                    </div>
                </div>
            </div>

        </header>
    );
};

export default Appointmentbanner;