import React from 'react';

const Confirmationmodal = ({ title, message }) => {
    return (
        <>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor="confirmation-modal" className="btn">Yay!</label>
                        <button className='btn btn-outline'>Delete</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Confirmationmodal;