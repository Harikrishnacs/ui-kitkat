import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact_banner">
        <h1>Contact</h1>
      </div>
      <section>
        <div className="contact-main">
          <h1>How can we help?</h1>
          <p>
            Thank you for your interest in Kitkat Software Technologie’s
            software development solutions and services. We are looking forward
            to working with you on your next software project. Tell us about
            your project and a senior and experienced software architect will
            provide a free estimate or professional consultation.
          </p>
          <span>
            We will be in touch with you within 24 hours to schedule a follow up
            web meeting. If you need immediate assistance, call us at the number
            below.
          </span>
        </div>
      </section>
      <section className="contact-details">
        <form className="detail-form">
          <div className="firstname">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="lastname">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="companyname">
            <input type="text" placeholder="Company Name" />
          </div>

          <div className="phonenumber">
            <input type="text" placeholder="+91 0000000000" />
          </div>
          <div className="address">
            <textarea placeholder="Company Description" />
          </div>
        </form>
        <div className="map">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=No.70/77,1st%20floor,%20Krishna%20complex,%20Kattor%20Road,Papanaickenpalayam,%20Coimbatore-641037,&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </section>
    </section>
  );
};

export default Contact;
