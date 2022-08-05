import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <h3>Neeraj Kathayat</h3>
        <div className="footericon">
        <a
            href="https://www.linkedin.com/in/neeraj-kathayat-b293a6201"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/neerajkathayat006/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/NeerajKathayat"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p>&#169; 2022 copyright all right reserved</p>
      </div>
    </div>
  )
}
 