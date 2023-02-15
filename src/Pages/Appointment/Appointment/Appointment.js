import React, { useState } from 'react';
import Appointmentbanner from '../Appointmentbanner/Appointmentbanner';
import Availableappointment from '../Availableappointments/Availableappointment';

const Appointment = () => {
    const [Dateselect, setDateselect] = useState(new Date())
    return (
        <div>
            <Appointmentbanner
                Dateselect={Dateselect}
                setDateselect={setDateselect}></Appointmentbanner>
            <Availableappointment
                Dateselect={Dateselect}
                setDateselect={setDateselect}

            ></Availableappointment>

        </div>
    );
};

export default Appointment;