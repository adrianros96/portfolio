

const Skill = () => {
    const template = `
    <section id="skills">
    <div class="skills container">
        <div class="skill-top">
            <h1 class="section-title">Sk<span>i</span>lls</h1>
            <p></p>
        </div>
        <div class="skill-bottom">
            <div class="skill-item">
                <div class="icon">
                   <img src="data:image/png;base64,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">
                </div>
                <h2>Web Design</h2>
                <p>Im self taught in HTML & CSS. When designing a website I focus also on the responsive design. I want to make sure that the website fits all the devices to make it accessible for everyone.<br><br></p>
            </div>
            <div class="skill-item">
                <div class="icon">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD5ElEQVR4nO2aXWgcVRTHf2czSQua4qvbWKigKSwmgtWCXxAEH2IDlip+1KxY2Y1V+6AP1lIrk1g/ngKCxSYUJTF9EC21fkWQ2oe2SlOKIVJoKL6Y0L5rfUga5/gwG9zZbuZjc3eysfcHA3vvzLn3f8+cc4a5O2CxWCwWi8VisdyQSJyLNrysPSK8DtwL3FRfScvmb2BCYfCPg/Jt1MWRDrh9l74nsNeItLRR3v39kLwVdkmoAzb1aY/C18A8wn4cxqY/kstGRRqm/VXNco1eYABoEaHn4qHoSKhKrqAnc0XVXJ/uMaoyBXJFfbOk/UTYdU7oSWUzCk6GUYDck9ri3MI7KL3ArQb1muAyymcLf/L2hS9kfi2MLHi8j1+3liTcAR43A5w/LFcA1rYywD+8YUyyWbLAHqcVBfaeH5Yr9+xUgNYwoygHVLZ7ATLCA798Kj8vR61ptuzUB/E4BeQpFe1K/dXIhJ101D/K2llHodEWD3D2Ezld0ptd7KvUX42kERBg6KieQbg/0Kn0920XN4Zm40TprWqznAHXLVQsHtxnnpL+6Gnrg3kHaHh73bWyhuA+tmPlFg/ReqvahJ6MioD50g/BfeiF6ovf+qx2q8cQ0BYtJ8CspxTHP5fxuAbpp4AfAW5n39J3vmmhpsVTshkCNsQ1SN8B8/Rv3B0e9o7nL/7olxLrxWuR7U+oArclsUm9BmzcHV3t4+ShKbvUa0AcKm12bNNQWUeO+ZFiYq66p0Acah2jMRxQQ0hFjTFyPF4t+N+mQD3tVkUKvNIdXgMOfm9rQKpzpV4DPvzB1oC62TVkCjR5zAq07XskPPevw59rJolJLXqTbogkDk1HKTZ7zCzaxj2aPWaaoZhwrsR66x4BAz/JOAleaJZDQ6ZAmlgHNOJjME0a8jGYJqmlwMdbEj7S0uJGT4FKjKdAYSLZttZKYzwFVhtx9Afu6JG7tTtDzbu4SzEHjE5P8pKLxHKpi2baOxlG6AVaDGqZFaH49K//bbUHIqBFjS8eYA1QyHVwmin/b/Yoch08B7yI+ZrTJhrcag9EwLG7/Oq+7Tdzuf5Vh+ZVGanFVoTnH5+SWE6LQ7X1BV6GHI+rjgfH2zVbaVwrk1OMOR6HHY85x/PzMsYx1+QxPDnFmCkd33Tq+tLYf5X3B1LAUc6hdCHkgQ9MTOwiHhcoAAUT49WKM0ceAZRzgf7yRrPHoEIX0P/jJkWV0UenG/ujqChO3KnrNUNewUUBYbD8/HW5frJdD6DsS01hmggHuqZlf7CrCqfu0K2ivKZwH/jfCa1irgpMeMLgw5fku5UWY7FYLBaLxWKxNAj/Ar8JmUIDiKHzAAAAAElFTkSuQmCC">
                </div>
                <h2>Web Development</h2>
                <p>During my studies I have learned to develop Web applications were I have developed on the client and server side. During the development phase, I have used git for version control to ensure that my work wont disappear.
            </div>
            <div class="skill-item">
                <div class="icon">
                    <img src="https://img.icons8.com/nolan/64/source-code.png"/>
                </div>
                <h2>Front-end Development</h2>
                <p>
                    The techniques that I master are: HTML, CSS, Javascript, Bootstrap & Flutter.
                    <br><br>
                   Currently learning React.js
                   <br>
                   <br>
                </p>
            </div>
            <div class="skill-item">
                <div class="icon">
                    <img src="https://img.icons8.com/nolan/64/thin-client.png"/>
                </div>
                <h2>Back-end Development</h2>
                <p>
                    I have good knowledge about the techniques/languages below: <br>Express.js, Node.js, PHP, MongoDB, Firebase & MySQL<br><br><br>
                </p>
            </div>
        </div>
    </div>
</section>
  `;
    return template;
};

export default Skill;
