import React from 'react';
import Appointmentbanner from '../Appointmentbanner/Appointmentbanner';
import Availableappointment from '../Availableappointments/Availableappointment';

const Appointment = () => {
    return (
        <div>
            <Appointmentbanner></Appointmentbanner>
            <Availableappointment></Availableappointment>

        </div>
    );
};

export default Appointment;