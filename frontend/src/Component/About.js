import React from 'react'
import './NavBar.css'
import img from '../images/about.png'
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <section class="row mb-5">
  <div class="col-md-4 aboutstart">
    <img src={img}></img>
  </div>
  <div class="col-md-8 aboutcontent">
    <span>
      <p>
        Never Stop Learning is an online platform that offers courses, specializations, and even degree programs from universities and institutions worldwide. It covers a vast array of subjects ranging from computer science and data science to humanities, business, and even personal development.
      </p>
      <p>
        Courses on Never Stop Learning typically consist of video lectures, quizzes, assignments, and sometimes peer-reviewed assessments. Many courses offer certificates upon completion, which can be useful for professional development or bolstering your resume.
      </p>
      <p>
        Specializations on Never Stop Learning are a series of courses designed to help you master a specific skill or subject area. They often culminate in a capstone project where you can apply what you've learned in a real-world scenario.
      </p>
    </span>
  </div>
</section>
<section class='justify-content-around d-flex'>
<div class='review'>
  <h1>150+ Courses</h1>
  <p>This platform offers a wide range of courses<br/>covering various subjects and topics.</p>
</div>

<div class='review'>
  <h1>50+ Professionals</h1>
  <p>Our team consists of experienced<br/>and skilled professionals ready to assist you.</p>
</div>

<div class='review'>
  <h1>100M+ Users</h1>
  <p>Join our community of over<br/>100 million satisfied users!</p>
</div>

</section>
    </div>
  )
}

export default About