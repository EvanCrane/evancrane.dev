import React, { useRef } from "react";
function SkillsComponent(props) {
    const skillsRef = useRef(null);
    return (
        <section ref={skillsRef} id="skills" className="skills">
            <h1>Skills and Experiences</h1>
            <div className="line"></div>
            <h3>The Languages and Frameworks I Love</h3>
            <ul className="ul-left">
                <div className="skill-bars">
                    <li>JavaScript</li>
                    <div className="progress-box">
                        <div className="progress-wrapper">
                            <div className="progress" id="skill-JavaScript"></div>
                        </div>
                    </div>
                    <li>HTML & CSS</li>
                    <div className="progress-box">
                        <div className="progress-wrapper">
                            <div className="progress" id="skill-HTMLCSS"></div>
                        </div>
                    </div>
                    <li>React & Angular</li>
                    <div className="progress-box">
                        <div className="progress-wrapper">
                            <div className="progress" id="skill-ReactAngular"></div>
                        </div>
                    </div>
                </div>
            </ul>
            <ul className="ul-right">
                <div className="skill-bars">
                    <li>C#</li>
                    <div className="progress-box">
                        <div className="progress-wrapper">
                            <div className="progress" id="skill-CSharp"></div>
                        </div>
                    </div>
                    <li>Go</li>
                    <div className="progress-box">
                        <div className="progress-wrapper">
                            <div className="progress" id="skill-Go"></div>
                        </div>
                    </div>
                    <li>Python</li>
                    <div className="progress-box">
                        <div className="progress-wrapper">
                            <div className="progress" id="skill-Python"></div>
                        </div>
                    </div>
                </div>
            </ul>
            <br></br>
            <div className="skill-info">
                <h2>JavaScript</h2>
                <p>The best tool in my utility belt. 3+ years working with this wonderful language from just vanilla to Front-end frameworks to the backend with NodeJS</p>
                <h2>C#</h2>
                <p>4+ years desktop application development (WPF, WinForms), ASP.NET Web API development, .NET Core, MVC, and other various .NET framework development.</p>
                <h2>Web Development</h2>
                <p>3 years of experience with creating beautify and responsive UI, working with frameworks such as AngularJS, Angular, React, MVC and working with other tools such as Bootstrap4 and JQuery. This site was just vanilla HTML/CSS/JS but has been updated to React.</p>
                <h2>Databases I prefer</h2>
                <p>Work best with Microsoft SQL Server, PostgreSQL, and MySQL. Have worked with Oracle as well. </p>
                <h2>Go & Python</h2>
                <p>2+ years combined experience using these languages to write automated services, code for app and website bots, and other quick scripts that I need.</p>
            </div>
        </section>
    );
}

export default SkillsComponent;