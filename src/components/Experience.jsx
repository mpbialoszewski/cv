import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
         {/* - */}
         <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>June 2021 - Febuary 2022</h3>
            <h4>Data Integration Developer </h4>
            <h5>OpenCorporates LTD, London (Remote) </h5>
          <ul>
            <li>Ongoing developer and data analyst tasks</li>
            <li>Working on automating processes</li>
            <li>Delivering required data for customers through SFTP and dealing with client queries</li>
            <li>Working on SSH for processing files and running scraper/ API bots</li>
            <li>Identifying issues for bot runs based on logs and proposing possible solutions to fix them</li>
            <li>Creating and editing API Accounts on demand</li>
            <li>Ongoing moderating content of main page www.opencorporates.com through Rails console</li>
            <li><i>Stack: Ruby 2.2.2, 2.6.3, Ruby on Rails 4/5, SSH, Unix, NumPy, Pandas, Python 3</i></li>
            <li>Software used: Jira, Confluence, Google Docs, Docker, Postman, Sequel Pro, Visual Studio
Code, IntelliJ Idea Ultimate</li>
            </ul>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>June 2020 - June 2021</h3>
            <h4>Ruby on Rails Developer (Industry Placement)</h4>
            <h5>Superbyte, Shrewsbury, UK</h5>
            <ul>
              <li>On-going developer tasks with implementing new features</li>
              <li>Version control and creating pull requests for review of changes</li>
              <li>Releasing new product through Google Cloud console</li>
              <li>Stack: Ruby/ Ruby on Rails, React, Docker, Kubernetes, Git</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Febuary 2020- June 2020</h3>
            <h4>Demonstrator</h4>
            <h5>Aberystwyth University, Aberystwyth, Wales</h5>
          <ul>
            <li>Helping students understanding tasks they were facing during workshops</li>
            <li>Resolving issues for students</li>
            <li>Signing-off assignments of students for hands-in</li>
            <li>Testing solutions that student implemented if they are in line with requirements</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>January 2019-December 2019</h3>
            <h4>Project Manager</h4>
            <h5>FP Global Limited, Hong Kong (Remote)</h5>
            <ul>
              <li>On-going administrative tasks – organizing HR calendar and tasks for developer and SEO copywriters</li>
              <li>Organizing and conducting daily stand-ups as well as weekly sum up meetings where successes and failures in work-flow were discussed</li>
              <li>Recruiting and employing new developers</li>
              <li>Collecting reports of on-going progress in a project from developers through SlackBots(StandUply);</li>
              <li>Conducting code review through CodeCommit console in Amazon Web Service;</li>
              <li>Technological stack: Laravel 6.0, Php 7.4++, Vue.js, ES6</li>
              <li> Software used: Google Hangouts, Google Docs, Trello, Slack, Monday.com, Amazon Web
              Services, PHPStorm, Visual Studio Code, WebStorm, GIT.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
