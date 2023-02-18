import {
  CardLink,

 Card,
 CardBody,
 CardText,

 CardTitle,
 CardSubtitle,

  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';


  import React from 'react'
  
  function Projects() {
    return (
     <>
        <h1 className='header'>My Projects</h1>
        
        
        <div className='cards'> 
        <Card
  style={{
    width: '18rem',
    backgroundColor:'#EEBCE9'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Project 1
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     Code Refactor
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require("../pics/project-1.png")}
    width="100%"
  />
  <CardBody>
    <CardText>
    **Refactoring** existing code (improving it without changing what it does) to meet a certain set of standards or to implement a new technology is a common task for front-end and junior developers. For this particular homework assignment, a marketing agency has hired you to refactor an existing site to make it more accessible. 
    </CardText>
    <CardLink href="https://t-vanderwolk.github.io/Refactor_code_01/">
      Live Link
    </CardLink>
    <CardLink href="https://github.com/t-vanderwolk/Refactor_code_01">
      View Code
    </CardLink>
  </CardBody>
</Card>


<Card
  style={{
    width: '18rem',
    backgroundColor:'#EEBCE9'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
     Project 2
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Portfolio Website
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require("../pics/project-2.png")}

    width="100%"
  />
  <CardBody>
    <CardText>
    A portfolio of work can showcase your skills and talents to employers looking to fill a part-time or full-time position. An effective portfolio highlights your strongest work as well as the thought processes behind it. Students who have portfolios with deployed web applications (meaning they are live on the web) are typically very successful in their career search after the boot camp. This last point cannot be stressed enough: having several deployed projects is a minimum requirement to receive an initial interview at many companies. 
    </CardText>
    <CardLink href="https://t-vanderwolk.github.io/professional_portfolio/">
      Live Link
    </CardLink>
    <CardLink href="https://github.com/t-vanderwolk/professional_portfolio">
      View Code
    </CardLink>
    <a href='../READMElink/READMEportfolio.md'>README</a>
  </CardBody>
</Card>

<Card
  style={{
    width: '18rem',
    backgroundColor:'#EEBCE9'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
     Project 3
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    Password Generator
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require("../pics/project-3.png")}

    width="100%"
  />
  <CardBody>
    <CardText>
    Modify starter code to create an application that enables employees to generate random passwords based on criteria that they have selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.
    </CardText>
    <CardLink href="https://t-vanderwolk.github.io/password_gen_project/">
      Live Link
    </CardLink>
    <CardLink href="https://github.com/t-vanderwolk/password_gen_project">
      View Code
    </CardLink>
  </CardBody>
</Card>

<Card
  style={{
    width: '18rem',
    backgroundColor:'#EEBCE9'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
     Project 4
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Work Scheduler
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require("../pics/project-4.png")}

    width="100%"
  />
  <CardBody>
    <CardText>
    Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.    </CardText>
    <CardLink href="https://t-vanderwolk.github.io/Work-Day-Scheduler/">
      Live Link
    </CardLink>
    <CardLink href="https://github.com/t-vanderwolk/Work-Day-Scheduler">
      View Code
    </CardLink>
  </CardBody>
</Card>

<Card
  style={{
    width: '18rem',
    backgroundColor:'#EEBCE9'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Project 5
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Weather Dashboard
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require("../pics/project-5.png")}

    width="100%"
  />
  <CardBody>
    <CardText>
    Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.    </CardText>
    <CardLink href="https://t-vanderwolk.github.io/weather-dashboard-06/">
      Live Link
    </CardLink>
    <CardLink href="https://github.com/t-vanderwolk/weather-dashboard-06">
      View Code 
    </CardLink>
  </CardBody>
</Card>

<Card
  style={{
    width: '18rem',
    backgroundColor:'#EEBCE9'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
     Project 6
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Code Quiz
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={require("../pics/project-6.png")}
    width="100%"
  />
  <CardBody>
    <CardText>
    To help familiarize you with these tests and allow you to use the skills covered in this unit, this weeks homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 
    </CardText>
    <CardLink href="https://t-vanderwolk.github.io/code-quiz/">
      Live Link
    </CardLink>
    <CardLink href="https://github.com/t-vanderwolk/code-quiz">
      View Code
    </CardLink>
  
  </CardBody>
</Card>






      </div>
      </>
    )
  }
  export default Projects;
  

