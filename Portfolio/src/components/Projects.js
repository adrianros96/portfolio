const Projects = () => {
    const template = `
    <section id="projects">
                <div class="projects container">
                    <div class="projects-header">
                        <h1 class="section-title">Recent <span>Projects</span></h1>
                    </div>
                    <div class="all-projects">
                        <div class="project-item even">
                            <div class="project-info">
                                <h1>Kakelhuset Sverige AB</h1>
                                <h2>Wordpress, HTML, CSS & Javascript</h2>
                                <p>
                                </p>
                                <a href="https://kakelhusetkarlskrona.se/" target="_blank" type="button" class="cta">Website</a>
                            </div>
                            <div class="project-img">
                                <img src="Kakelhuset.jpg" alt="img">
                            </div>
                        </div>
                        <div class="project-item odd">
                            <div class="project-info">
                                <h1>Todo application</h1>
                                <h2>PHP, MySQL, HTML & CSS</h2>
                                <p>
                                    Users can register an account and posts todos.	&nbsp;  &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                                <div class="project-btn">
                                <a href=# type="button" class="cta">Source code</a>
                                </div>
                            </div>
                            <div class="project-img">
                                <img src="todoapp.jpg" alt="img">
                            </div>
                        </div>
                        <div class="project-item even">
                            <div class="project-info">
                                <h1>Portfolio Site</h1>
                                <h2>HTML, Javascript & CSS</h2>
                                <p>
                                    Created this portfolio site with Javascript components. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                                <a href="https://github.com/adrianros96/portfolio/tree/master/Portfolio"  target="_blank" type="button" class="cta">Source code</a>
                            </div>
                            <div class="project-img">
                                <img src="portfoliosite.png" alt="img">
                            </div>
                        </div>
                        <div class="project-item odd">
                            <div class="project-info">
                                <h1>Quiz app</h1>
                                <h2>Javascript, RESTful API, HTML & CCS</h2>
                                <p>
                                Quiz app written in Javascript. The client side is fetching questions from a RESTful API. 
                                </p>
                                <a href="https://github.com/adrianros96/Quiz-app" target="_blank" type="button" class="cta">Source code</a>
                            </div>
                            <div class="project-img">
                                <img src="Quizapp.png" alt="img">
                            </div>
                        </div>
                        <div class="project-item even">
                            <div class="project-info">
                                <h1>Snippet App</h1>
                                <h2>Javascript, MongoDB, Handlebars, Express.js, Node.js & Bootstrap</h2>
                                <p>
                                </p>
                                <a href="https://github.com/adrianros96/Snippet-app" target="_blank" type="button" class="cta">Source code</a>
                            </div>
                            <div class="project-img">
                                <img src="Snippetapp.png" alt="img">
                            </div>
                        </div>
                        <div class="project-item odd">
                            <div class="project-info">
                                <h1>Web Desktop App</h1>
                                <h2>Javascript, WebSocket, Webpack, RESTful API, HTML & CSS</h2>
                                <p>
                                </p>
                                <a href="https://github.com/adrianros96/Web-desktop-app" target="_blank" type="button" class="cta">Source code</a>
                            </div>
                            <div class="project-img">
                                <img src="Webdesktop.png" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  `;

    return template;
};

export default Projects;