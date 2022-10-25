import React, { useState } from 'react';

const PostVideo = ({ openModal, setOpenModal }) => {

    const [video, setVideo] = useState('')
    const [formData, setFormData] = useState({})

    const videoHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            setVideo(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }


    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-[800px]">
                    <h5 className='text-center my-10 text-2xl font-bold'>Post Your Video</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className='text-center mb-8 '>
                                <input onChange={videoHandler} className='hidden' type="file" id="video" />
                                <label className='btn bg-[#858A89] rounded-full px-9 py-2 capitalize text-white' htmlFor="video">Choose Video</label>
                            </div >
                            {
                                video && <div className='flex justify-center mb-7'>
                                    <video
                                        className=''
                                        src={video}
                                        autoPlay={true}
                                        muted={true}
                                        width='220px'
                                        height={'140px'}
                                        loop={true}
                                    ></video>
                                </div>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input
                                    value={formData.companyName}
                                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                                    type="text"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    type="email" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Brand(with Model)</span>
                                </label>
                                <input
                                    value={formData.productBrand}
                                    onChange={e => setFormData({ ...formData, productBrand: e.target.value })}
                                    type="text" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Type</span>
                                </label>
                                <input
                                    value={formData.productType}
                                    onChange={e => setFormData({ ...formData, productType: e.target.value })}
                                    type="text" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    className="select select-bordered w-full " >
                                    <option value="shirt">shirt</option>
                                    <option value="shoes">shoes</option>
                                    <option value="pants">pants</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product price</span>
                                </label>
                                <input
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                                    type="number" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    className="textarea textarea-bordered" required></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Post</button>
                            </div>
                        </form>
                    </div>

                    <div className="modal-action ">
                        <label onClick={() => setOpenModal(null)} htmlFor="my-modal-6 " className="btn bg-red-500 text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PostVideo;