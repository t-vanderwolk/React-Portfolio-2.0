import React from 'react'

export default function Skills() {
  return (
  <>
   <h1 className='header'>My Skills</h1>
   <div className='skill-list'>
  

    <ul className='skills'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Handlebars</li>
        <li>React</li>
        <li>Vue</li>
        <li>C#</li>
        <li>.Net</li>
        <li>Node</li>
        <li>Express</li>
        <li>SQL</li>
        <li>No-SQL</li>
        <li>AWS</li>
        <li>Heroku</li>
        <li>git</li>
        <li>GitHub</li>
        <li>OOP</li>
        <li>Redux</li>
        <li>JWT</li>
        <li>Vuex</li>
    </ul>
    {/* <img id='bugs' src={require("../pics/99bugs.png")} alt="99-bugs" /> */}
    <div className='certs'>
   {/* <img id='coding' src={require("../pics/coding.jpg")} alt="joke" /> */}
   <img id='html' src={require("../pics/HTMLCertificate.jpg")} alt="99-bugs" />
   <img id='js' src={require("../pics/JSCertificate.jpg")} alt="99-bugs" />
   </div>

   </div>
   {/* <div>
   <img id='bugs' src={require("../pics/HTMLCertificate.jpg")} alt="99-bugs" />
   <img id='bugs' src={require("../pics/JSCertificate.jpg")} alt="99-bugs" />

   </div> */}
  </>
  )
}
