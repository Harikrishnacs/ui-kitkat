import React from 'react'

const Career = () => {
    return (
        <section className='career'>
            <div className="career_banner">
                <h1>career Us</h1>
            </div>
            <section className='career-detail' >
                <div className="career-main" >
                    <p>At Kitkat Software Technologies , employees are our major assets. We believe in an open and informal relationship between employees and management. We attract the best and the brightest consultants.In addition to our handsome salary compensation, we offer excellent benefits and reimbursement of training costs. We also have a very generous employee referral program.Kitkat Software Technologies is looking for individuals with outstanding skills in software and business development. We offer careers in technology and business disciplines. Our clients know us for our leadership, determination, professionalism and commitment to quality. If you are interested in employment opportunities with Panelcoder Technologies, please e-mail us. We will be more than happy to help you.</p>
                </div>
                <div className="software_img">

                    <img src="https://www.kitkatsoftwaretechnologies.com/images/php.png" alt="" />
                    <img src="https://www.kitkatsoftwaretechnologies.com/images/angular.png" alt="" />
                    <img src="https://www.kitkatsoftwaretechnologies.com/images/nodejs.png" alt="" />
                    <img src="https://res.cloudinary.com/denokpulg/image/upload/v1660030214/th__1_-removebg-preview_jc1ydt.png" alt="" />
                </div>
            </section>
            <section className="hiring-sec">
                <div className="loc-develop">
                    <div className="loc">
                        <h1>Coimbatore Location</h1>
                        <h4>Currently Hiring For : </h4>
                        <p> Freshers & 1+ Years Experience</p>

                    </div>

                    <div className="develop">
                        <li>Java Developers</li>
                        <li>PHP Developers</li>
                        <li>Angular JS</li>
                        <li>Node JS</li>
                    </div>
                </div>

                <div className="resume_data">
                    <h1>Upload Resume</h1>
                    <form className="resume">
                        <label htmlFor="">Name :</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Email :</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Upload Resume :</label>
                        <input type="file" name="" id="" />
                        <button className='update'>
                            submit
                        </button>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default Career