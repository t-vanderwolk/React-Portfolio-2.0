import React from 'react'

export default function About() {
  return (
    <>
  
        <h1 className='header'>About Me</h1>
       <div className='self-pic'>
        <h1 id='design'>Design</h1>
   <img className='selfie' src={require("../pics/DF035C73-8864-44A0-8BD7-85A16FED7B94_1_105_c.jpeg")} alt="self-pic" />
   <h1 id='code'>Code</h1>
   </div>
   <div className='info'>
    <p className='about-me'>
Hello World! <br></br>

My name is Taylor VanderWolk. <br></br>
I am a Full-Stack Software Developer based in Phoenix, AZ.<br></br>

When given a task, I don't know how long it will take me, how many different approaches I may have to take, or if I  even have the necessary skills yet.  
However, I do know is there's a solution to every problem. its just a matter of drive, creativity and collaboration to find the solution.
Let's connect!<br></br>

My objective is to obtain a position as a full stack developer in an environment that pushes me to grow. I want to be part of a team and collaborate with other developers on front end website architecture, designing user interactions on web pages, developing back end website applications,
creating servers and databases for functionality.<br></br>

Also, ensuring cross-platforms optimization for mobile phones, designing and developing APIs, and meeting both technical and consumer needs.
<br></br></p>
</div>
</>
    

  )
}
