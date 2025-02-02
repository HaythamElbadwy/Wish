import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { Lang } from '../../Lang.js';

export default function Footer() {

  let [count, setCount] = useState(0);
  const selectedLanguage = localStorage.getItem("lang") || 'en';
  const langValue = Lang[selectedLanguage];
  useEffect(() => { }, [])
  return (
    <>
      <footer className="bg-black text-white py-8 px-6">
        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="max-w-md">
              aboutDesc
            </p>
          </div>
          <div className={styles.technicalSupport}>
            <h2 className="text-xl font-bold mb-4">PoliciesConditions</h2>
            <ul className="space-y-2">
              <li><NavLink to={"termsCondition"} className="hover:underline">TermsConditions</NavLink></li>
              <li><NavLink to={"privacyPolicy"} className="hover:underline">PrivacyPolicy</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>footer</p>
        </div>
      </footer>
    </>
  )
}
