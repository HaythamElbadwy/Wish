import React, { useEffect, useState } from 'react'
import styles from './TermsCondition.module.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import whatsapp from '../../assets/Image/whatsappimg.jpeg';

export default function TermsCondition() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
      <div class={`${styles.term_conditions_parent}`}>
        <div class={`${styles.term_conditions}`}>
          <h1>Terms and Conditions</h1>

        </div>
        <main class={`${styles.content}`}>
          <section>
            <h2>Interpretation and Definitions</h2>
            <h3>Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
              The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
            </p>

            <h3>Definitions</h3>
            <ul>
              <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</li>
              <li><strong>Country</strong> refers to: Schweiz.</li>
              <li><strong>Device</strong> means any device that can access the Service, such as a computer, a cellphone, or a digital tablet.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Terms and Conditions</strong> (also referred to as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          <section>
            <h2>Acknowledgment</h2>
            <p>
              These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2>Additional Policies and Agreements</h2>
            <p>
              By using our services, you also agree to the following policies, which are an extension of the present agreement:
            </p>
            <ul>
              <li>Privacy Policy</li>
            </ul>
          </section>

          <section>
            <h2>Termination</h2>
            <p>
              We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including
              without limitation if You breach these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision
              of this Terms shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything
              through the Service.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms and Conditions</h2>
            <p>
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material,
              We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, You can contact us by Email:
              <a href="mailto:masadenmark@gmail.com" className='text-blue-500 no-underline hover:underline ml-1'>masadenmark@gmail.com</a>
            </p>
          </section>
        </main>
        <FloatingWhatsApp phoneNumber="+1234567890"
          accountName="WishTV"
          avatar={whatsapp}
          statusMessage="Typically replies within 1 hour"
          chatMessage="Hello! How can we help you?"
          allowEsc
          allowClickAway
          className='text-black w-[18rem]'
          placeholder='Send Us Your Proplem'>
        </FloatingWhatsApp>
      </div></>
  )
}
