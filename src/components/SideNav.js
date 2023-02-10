import React from 'react';
import styles from '../app.module.css'

const SideNav = () => {
  return (
    <div>
      <div className="text">
            <div className="text bg-slate-700 w-0 md:w-full text-white h-screen border-r-2 px-48 pt-28">
                  <ul className="text">
                        <li className="text-3xl py-10">
                              <a href="##" className="text">
                                    Home
                              </a>
                        </li>
                        <li className={`${styles.active} ${styles.head}`}>
                              <a href="##" className="text">
                                    About
                              </a>
                        </li>
                        <li className="text-3xl py-10">
                              <a href="##" className="text">
                                    Contact
                              </a>
                        </li>
                        <li className="text-3xl py-10">
                              <a href="##" className="text">
                                    Faq
                              </a>
                        </li>
                  </ul>
            </div>
      </div>
    </div>
  )
}

export default SideNav