import React, { useEffect, useState } from 'react'
import styles from './PrivacyPolicy.module.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import whatsapp from '../../assets/Image/whatsappimg.jpeg';

export default function PrivacyPolicy() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
      <div class={`${styles.privacyPolicy}`}>
        <h1>Privacy and Policy</h1>

        <p>This page is to illustrate visitors regarding our policies with the collection, usage, and disclosure of
          personal data. When a user decides to use our Service, this policy is automatically applied. By choosing our
          service, you agree to the collection and use of information in accordance with this policy. We use personal
          information solely for providing and improving the service. We do not share or sell any information except
          as described in this policy.</p>

        <h2>Why We Collect Information</h2>
        <p>We collect information to provide a better user experience while using our service. The requested information
          is not stored on your device or collected by us in any way.</p>

        <h2>Log Data</h2>
        <p>When using our service, in case of an error or version incompatibility, we may collect Log Data. This may
          include your device's operating system version, IP address, device name, and the date and time of the error.
        </p>

        <h2>Cookies</h2>
        <p>Cookies are small data files stored on your device. While we do not directly use cookies, third-party
          services integrated into our app may use them. You can accept or reject cookies through your browser
          settings.</p>

        <h2>Service Providers</h2>
        <p>We may employ third-party companies for the following reasons:</p>
        <ul>
          <li>To improve app functionality</li>
          <li>To assist in development and updates</li>
        </ul>
        <p>These companies have access to your data only to perform the tasks assigned to them and are obligated to keep
          it confidential.</p>

        <h2>Email Contact</h2>
        <p>If you contact us via email, the data you provide will be used to process your request. Your data will not be
          shared and will be deleted once your inquiry is resolved.</p>

        <h2>Data Security</h2>
        <p>We strive to protect your information, but no internet protocol is 100% secure. While we work to improve
          security, we cannot guarantee absolute safety.</p>

        <h2>Links to Other Sites</h2>
        <p>Our site may contain links to external websites. We are not responsible for the privacy practices or content
          of these sites. Please review their privacy policies.</p>

        <h2>Children's Privacy</h2>
        <p>Our service does not address anyone under the age of 15. We do not knowingly collect data from children under
          15. If we discover such data, it will be deleted immediately. Parents are encouraged to contact us if they
          believe their child's data has been shared.</p>

        <h2>Policy Updates</h2>
        <p>We may update our Privacy Policy from time to time. Users are advised to review this page periodically for
          changes. Updates take effect once published on this page.</p>
      </div>
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
    </>
  )
}
