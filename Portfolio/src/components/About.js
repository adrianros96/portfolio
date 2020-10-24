
const About = () => {
    const template = `
    <section id="about">
            <div class="about container">
                <div class="col-left">
                   <div class="about-img">
                       <img src="Profilbild.jpeg" alt="">
                   </div> 
                </div>
                <div class="col-right">
                    <h1 class="section-title">About <span>me</span></h1>
                    <h2>Web Developer</h2>
                    <p>I'm a Junior developer with 3+ years coding experience. 
                        Currently studying computer science at Linnaeus University. 
                        My biggest goal is to constantly develop personally and of course as a developer.
                         My focus is on frontend as well as backend development, which results in me seeing 
                         myself as a very flexible developer with a desire to constantly seek new information and expand my knowledge in the profession.
                    </p>
                    <a href="#contact" class="cta">Contact me</a>
                </div>
            </div>
        </section>   
  `;
    return template;
};

export default About;
