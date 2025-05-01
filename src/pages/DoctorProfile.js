import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DoctorProfile.css";
import { FaWhatsapp } from "react-icons/fa";
import KarthikTestimonials from "../components/KarthikTestimonials";
import AnithaTestimonials from "../components/AnithaTestimonials";

import manoj from "../assets/profile2.png";
import anitha from "../assets/profile1.png";

const doctors = {
  "dr-manoj-karthik": {
    name: "Dr. Manoj Karthik S",
    qualification: "MBBS, MS (Gen Surg), FMAS, PGDHE",
    designation: "Senior General, Laparoscopic and Endoscopic Surgeon",
    experience: "22+ Years of Experience",
    regNumber: "674933",
    languages: ["English", "Kannada", "Hindi", "Tamil"],
    image: manoj,
    appointmentLink: "https://www.eka.care/doctor/dr-manoj-karthik-general-surgeon-bengaluru/calendar?cid=674933ac16f48e001dd639b6",
    phoneNumber: "+919108108980",
    about: `Dr. Manoj Karthik S brings over two decades of surgical expertise, specializing in both laparoscopic and open procedures. Renowned for his precision, ethical practice, and patient-centered approach, he has successfully performed thousands of surgeries with a focus on safety and faster recovery.`,
    expertise: [
      "Laparoscopic surgeries (gallbladder, appendix, hernia)",
      "Anorectal procedures (piles, fissure, fistula)",
      "Thyroid and breast surgeries",
      "Gastrointestinal surgeries",
      "Surgical emergencies"
    ],
    conditions: [
      "Gallstones, appendicitis, hernias, hemorrhoids, fissures, fistulas, thyroid nodules, breast lumps and so many more — often linked to modern lifestyle factors such as poor diet, inactivity, and stress, Dr. Manoj is highly regarded for his clinical judgment, clear communication, and commitment to quality care"
    ]
  },
  "dr-anitha-a-manoj": {
    name: "Dr. Anitha A Manoj",
    qualification: "MBBS, MS (OBG), FMAS & FRM",
    designation: "Senior Consultant Obstetrician, Gynaecologist, and Fertility Specialist",
    experience: "16+ Years of Experience",
    regNumber: "69779",
    languages: ["Kannada", "English", "Hindi", "Tamil", "Telugu"],
    image: anitha,
    appointmentLink: "https://www.eka.care/doctor/dr-anitha-a-manoj-obstetrics-and-gynecologist-bengaluru/calendar?cid=674933ac16f48e001dd639b6",
    phoneNumber: "+919108108980",
    about: `Dr. Anitha A Manoj is a highly regarded specialist in women’s health, with over 16 years of experience in obstetrics, gynecology, and fertility care. Her practice is rooted in empathy, clinical excellence, and a deep commitment to supporting women through every phase of life—from adolescence to motherhood and beyond.`,
    expertise: [
      "Infertility evaluation and treatment",
      "High-risk pregnancy care",
      "PCOS, fibroids, and endometriosis",
      "Menstrual and hormonal disorders",
      "Laparoscopic gynecologic surgeries"
    ],
    conditions: [
      "Infertility, PCOS, fibroids, endometriosis, irregular menstruation, pregnancy complications, and menopausal concerns—often influenced by today’s lifestyle stressors and health habits. Dr. Anitha’s holistic and individualized care has empowered countless women to overcome challenges and embrace healthier, fuller lives"
    ]
  }
};

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors[doctorId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  return (
    <div className="doctor-profile">
      <div className="go-back-container">
        <button onClick={() => navigate(-1)} className="go-back-button">← Go Back</button>
      </div>

      <div className="profile-header">
        <img src={doctor.image} alt={doctor.name} className="profile-image" />
        <h2>{doctor.name}</h2>
        <p className="qualification">{doctor.qualification}</p>
        <p className="designation">{doctor.designation}</p>
        <p className="experience">{doctor.experience}</p>
        <p className="languages"><strong>Languages Known:</strong> {doctor.languages.join(", ")}</p>
        <div className="action-buttons">
  <a href={`tel:${doctor.phoneNumber}`} className="call-button">Call {doctor.phoneNumber}</a>

  <a
    href={`https://wa.me/${doctor.phoneNumber.replace('+', '')}?text=Hi%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
    title="Chat on WhatsApp"
  >
    <FaWhatsapp style={{ marginRight: "8px" }} />
    WhatsApp
  </a>

  <a href={doctor.appointmentLink} target="_blank" rel="noopener noreferrer" className="book-button">Book Now</a>
</div>
      </div>

      <div className="about-doctor">
        <h3><strong>About {doctor.name}</strong></h3>
        <p className="about-intro">{doctor.about}</p>

        <div className="expertise-section">
          <h4>Areas of Expertise</h4>
          <ul className="expertise-list">
            {doctor.expertise.map((item, index) => (
              <li key={index}><span>🩺</span> {item}</li>
            ))}
          </ul>
        </div>

        <div className="expertise-section">
          <h4>📋 Common Conditions Managed</h4>
          <ul className="expertise-list">
            {doctor.conditions.map((condition, index) => (
              <li key={index}><i className="fas fa-angle-right"></i> {condition}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conditionally rendering Testimonials based on doctorId */}
      <div className="testimonials-section">
        {/* <h3>Patient Testimonials</h3> */}
        {doctorId === "dr-manoj-karthik" && <KarthikTestimonials />}
        {doctorId === "dr-anitha-a-manoj" && <AnithaTestimonials />}
      </div>
    </div>
  );
};

export default DoctorProfile;
