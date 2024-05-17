import React from 'react'
import './NavBar.css'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
import a3 from '../images/a3.jpg'
import a4 from '../images/a4.jpg'
import a5 from '../images/a5.jpg'
import a6 from '../images/a6.jpg'
import a7 from '../images/a7.png'
import a8 from '../images/a8.jpg'
import a9 from '../images/a9.png'
export default function Services() {
  return (
    <div className="container">
  <div className="row justify-content-around">
    <div class="card col-3 mb-3">
      <img src={a1} />
      <div class="container">
        <h4><b>HTML</b></h4> 
        <p>
HTML courses provide comprehensive instruction in the language that underpins the internet, from basic principles to advanced techniques. Students learn to structure content, create layouts, and incorporate multimedia elements, gaining the skills needed to build modern, responsive websites.  </p> 
      </div>
    </div>
    <div class="card col-3 mx-1 mb-3">
      <img src={a2} />
      <div class="container">
        <h4><b>CSS</b></h4> 
        <p>
A CSS course immerses learners in the art of styling web content, from basic formatting to advanced layout techniques. Participants explore the intricacies of selectors, properties, and cascading rules to design visually stunning and responsive websites.</p> 
      </div>
    </div>
    <div class="card col-3 mb-3">
      <img src={a3} />
      <div class="container">
        <h4><b>JAVA SCRIPT</b></h4> 
        <p>
A JavaScript course provides a comprehensive exploration of the language that powers interactivity on the web, from basic syntax to advanced concepts. Participants delve into topics such as variables, functions, and control flow, gaining a solid foundation for building dynamic and responsive web applications.</p> 
      </div>
    </div>
    <div class="card col-3 mx-1 mb-3">
      <img src={a4} />
      <div class="container">
        <h4><b>COMMUNICATION</b></h4> 
        <p>
A Communication course offers a comprehensive study of effective interpersonal and professional communication skills, vital in various personal and professional contexts. Students explore techniques for active listening, conflict resolution, and persuasive speaking to enhance their ability to convey ideas convincingly.</p> 
      </div>
    </div>
    <div class="card col-3 mb-3">
      <img src={a5} />
      <div class="container">
        <h4><b>PHYSICS</b></h4> 
        <p>
A Physics course offers an in-depth exploration of the fundamental principles governing the behavior of matter and energy in the universe. Students delve into topics such as classical mechanics, electromagnetism, thermodynamics, and quantum physics, gaining a comprehensive understanding of the physical world.</p> 
      </div>
    </div>
    <div class="card col-3 mx-1 mb-3">
      <img src={a6} />
      <div class="container">
        <h4><b>DIGITAL MARKETING</b></h4> 
        <p>
A Digital Marketing course offers a comprehensive exploration of strategies and tools for promoting products and services in the digital realm. Participants delve into areas such as search engine optimization (SEO), social media marketing, email marketing, and content creation to effectively reach and engage target audiences.</p> 
      </div>
    </div>
    <div class="card col-3 mb-3">
      <img src={a7} />
      <div class="container">
        <h4><b>APTITUDE</b></h4> 
        <p>
An aptitude course focuses on honing essential skills necessary for success in various academic and professional pursuits. Through a combination of theoretical concepts and practical exercises, students develop strategies for approaching different types of aptitude tests and assessments with confidence.</p> 
      </div>
    </div>
    <div class="card col-3 mx-1 mb-3">
      <img src={a8} />
      <div class="container">
        <h4><b>GRAPICS DESIGN</b></h4> 
        <p>
A Graphics Design course immerses students in the principles and tools of visual communication and creativity. Graphics Design courses often cover branding, digital illustration, user experience (UX) design, and print production, preparing learners for diverse career paths in advertising, publishing, web design, and more.</p> 
      </div>
    </div>
    <div class="card col-3 mx-1 mb-3">
      <img src={a9} />
      <div class="container">
        <h4><b>AWS</b></h4> 
        <p>
An AWS course provides comprehensive training on Amazon Web Services, the leading cloud computing platform. Participants learn to leverage AWS services for building, deploying, and managing scalable and secure applications.  </p> 
      </div>
    </div>
  </div>
</div>

  )
}