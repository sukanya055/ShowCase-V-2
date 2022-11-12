import React from 'react';

const DeleteModal = ({setOpenModal}) => {
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure you want to delete!</h3>
                    <p className="py-4">If you delete your account your account will be permanently delete.</p>
                    <div className='text-center '>
                        <button className='btn bg-[#ff0000be] text-white mt-4'>Delete</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DeleteModal;