const Header = () => {
    const template = `
    <section id="header">
            <div class="header container">
                <div class="nav-bar">
                    <div class="brand">
                        <a href="#hero"><h1><span>A</span>drian <span>R</span>osales</h1></a>
                    </div>
                    <div class="nav-list">
                        <div class="hamburger"><div class="bar"></div></div>
                        <ul>
                            <li><a href="#hero" data-after="Home">Home</a></li>
                            <li><a href="#skills" data-after="Skills">Skills</a></li>
                            <li><a href="#projects" data-after="Projects">Projects</a></li>
                            <li><a href="#about" data-after="About">About</a></li>
                            <li><a href="#contact" data-after="Contact">Contact</a></li>
                        </ul>
                    <div>
                </div>
            </div>
        </section>
  `;

    return template;
};

export default Header;