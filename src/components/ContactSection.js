import React from 'react';
import './ContactSection.css';
import {useForm} from 'react-hook-form';

function ContactSection() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
      console.log(data);
    }

  return (
    <>
      <div className="contact-container">
        <div className="contact">
          <h1 className="contact-name">GET IN TOUCH</h1>
          <div className="section-line"></div>
          <p className="section-description">
            Lorem ipsum dolor sit amet, conseteur sadipscing elitr amet
          </p>
          <div className="contact-info">
            <div className="address-section">
              <div className="address">
                <h1 className="address-title">address</h1>
                <p className="address-description">
                  312, 7th Ave, New York, United States of America
                </p>
              </div>
              <div className="address">
                <h1 className="address-title">hotline(24x7)</h1>
                <p className="address-description">
                  +65 0052 300, +65 88251 210 +88 01723 511 340
                </p>
              </div>
              <div className="address">
                <h1 className="address-title">e-mail</h1>
                <p className="address-description">
                  shapedtheme@gmail.com khalilkode@gmail.com
                </p>
              </div>
            </div>
            <div className="contact-form">
              <div className="login" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="input" name="name" placeholder="Your Name" ref={register} />
                <input type="text" className="input" name="email" placeholder="Your Email" ref={register} />
              </div>
              <div className="subject">
                <input
                  type="text"
                  name="subject"
                  className="input"
                  placeholder="Your Subject"
                  ref={register}
                />
              </div>
              <div className="msg">
                <textarea className="area" placeholder="Write Your Message" />
              </div>
              <div className="btn-description">
              <button type="submit" className="sub-btn">Send Message</button>
                <p className="address-notice">
                  * We’ll contact you as soon as possible. We don’t reply on
                  Monday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
