import React from 'react'
import './Comentarios.css'
import { BsStar } from 'react-icons/bs'

const Comentarios = () => {
    return (
        <div className="container mt-5 mb-5">

            <div className="row g-2">
                <div className="col-md-4">
                    <div className="card2 p-3 text-center px-4">
                        <div className="user-image">
                            <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" width="80" alt='xd' />
                        </div>
                        <div className="user-content">

                            <h5 className="mb-0">Lionel Messi</h5>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="ratings">
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>
                        </div>

                    </div>
                </div>

                <div className="col-md-4">

                    <div className="card2 p-3 text-center px-4">

                        <div className="user-image">

                            <img src="https://i.imgur.com/w2CKRB9.jpg" className="rounded-circle" width="80" alt='xd' />

                        </div>

                        <div className="user-content">

                            <h5 className="mb-0">Cristiano Ronaldo</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>

                        <div className="ratings">
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card2 p-3 text-center px-4">

                        <div className="user-image">

                            <img src="https://i.imgur.com/ACeArwY.jpg" className="rounded-circle" width="80" alt='xd' />

                        </div>

                        <div className="user-content">

                            <h5 className="mb-0">Otro mas</h5>
                            <span>Software Architect</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>

                        <div className="ratings">
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>
                            <i className="fa fa-star"><BsStar /></i>

                        </div>

                    </div>

                </div>


            </div>

        </div>


    )
}

export default Comentarios