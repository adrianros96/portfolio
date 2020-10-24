const icons = {
    linkedin:
        "<svg class='social__link__icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'/></svg>",
    facebook:
        "<svg class='social__link__icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'/></svg>",
    github:
        "<svg class='social__link__icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/></svg>",
};

const Footer = () => {
    const template = `
    <section id="footer">
            <div class="footer container">
                <div class="brand">
                    <h1><span>A</span>drian <span>R</span>osales</h1>
                </div>
                <h2>Web Developer</h2>
                <div class="social-icon">
                    <div class="social-item">
                        <a href=""><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNTEuMDYyNSIgeTE9IjY2LjgwNTg4IiB4Mj0iNTEuMDYyNSIgeTI9IjEzMS43OTc2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xXzQ0MDE5X2dyMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzBkZmZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzBhZmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUyLjA4OTEzIiB5MT0iNDEuNDQ5MzEiIHgyPSI1Mi4wODkxMyIgeTI9IjYyLjcyODk0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTJfNDQwMTlfZ3IyIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3MGRmZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3MGFmZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTAwLjQ3NDg4IiB5MT0iMzcuOTYwOTQiIHgyPSIxMDAuNDc0ODgiIHkyPSIxMzMuMDk4NDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItM180NDAxOV9ncjMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwZGZmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzcwYWZmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI4NiIgeTE9IjE3LjQ2ODc1IiB4Mj0iODYiIHkyPSIxNTQuNTMxMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNF80NDAxOV9ncjQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwYzZmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNzJmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48ZyBpZD0ib3JpZ2luYWwtaWNvbiI+PHBhdGggZD0iTTU5LjEyNSwxMjl2LTU5LjEyNWgtMTYuMTI1djU5LjEyNXoiIGZpbGw9InVybCgjY29sb3ItMV80NDAxOV9ncjEpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBkPSJNNTIuMDI0NjMsNjEuODEyNWM2Ljc1MSwwIDEwLjk1NDI1LC0zLjk2MTM4IDEwLjk1NDI1LC05LjU1MTM3Yy0wLjEyNjMxLC01LjcxMzYzIC00LjIwMzI1LC05LjgwNjY5IC0xMC44MjUyNSwtOS44MDY2OWMtNi42MjQ2OSwwIC0xMC45NTQyNSwzLjk2NDA2IC0xMC45NTQyNSw5LjY3NzY5YzAsNS41OSA0LjIwMDU2LDkuNjgwMzcgMTAuNjk4OTQsOS42ODAzN2gwLjEyNjMxeiIgZmlsbD0idXJsKCNjb2xvci0yXzQ0MDE5X2dyMikiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGQ9Ik03Mi40MTczOCwxMjloMTguOTU3NjJ2LTMyLjQ4OTE5YzAsLTEuNzQxNSAwLjMyNzg4LC0zLjQ4MDMxIDAuODQxMTksLTQuNzI0NjNjMS4zOTc1LC0zLjQ4MDMxIDUuMDQ0NDQsLTcuMDgxNTYgMTAuMzkyNTYsLTcuMDgxNTZjNy4wMDYzMSwwIDEwLjI2ODk0LDUuMzQyNzUgMTAuMjY4OTQsMTMuMTcxNDR2MzEuMTIzOTRoMTYuMTI1di0zMy4zNTcyNWMwLC0xNy44OTA2OSAtOC4yOTA5NCwtMjUuNTI1ODcgLTIxLjAzMjM4LC0yNS41MjU4N2MtMTAuNDQzNjMsMCAtMTMuNzcwNzUsNS4xMzMxMyAtMTYuMzE4NSwxMC41MDgxM2gtMC4yNzY4MXYtMTAuNzVoLTE4Ljk1NzYzYzAuMjU1MzEsNS4zNzUgLTAuNDcwMzEsNTkuMTI1IC0wLjQ3MDMxLDU5LjEyNXoiIGZpbGw9InVybCgjY29sb3ItM180NDAxOV9ncjMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBkPSJNMTM0LjM3NSwxNTMuMTg3NWgtOTYuNzVjLTEwLjM3MTA2LDAgLTE4LjgxMjUsLTguNDQxNDQgLTE4LjgxMjUsLTE4LjgxMjV2LTk2Ljc1YzAsLTEwLjM3MTA2IDguNDQxNDQsLTE4LjgxMjUgMTguODEyNSwtMTguODEyNWg5Ni43NWMxMC4zNzEwNiwwIDE4LjgxMjUsOC40NDE0NCAxOC44MTI1LDE4LjgxMjV2OTYuNzVjMCwxMC4zNzEwNiAtOC40NDE0NCwxOC44MTI1IC0xOC44MTI1LDE4LjgxMjV6TTM3LjYyNSwyNC4xODc1Yy03LjQwOTQ0LDAgLTEzLjQzNzUsNi4wMjgwNiAtMTMuNDM3NSwxMy40Mzc1djk2Ljc1YzAsNy40MDk0NCA2LjAyODA2LDEzLjQzNzUgMTMuNDM3NSwxMy40Mzc1aDk2Ljc1YzcuNDA5NDQsMCAxMy40Mzc1LC02LjAyODA2IDEzLjQzNzUsLTEzLjQzNzV2LTk2Ljc1YzAsLTcuNDA5NDQgLTYuMDI4MDYsLTEzLjQzNzUgLTEzLjQzNzUsLTEzLjQzNzV6IiBmaWxsPSJ1cmwoI2NvbG9yLTRfNDQwMTlfZ3I0KSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/></a>
                    </div>
                    <div class="social-item">
                        <a href=""><img src="https://img.icons8.com/cute-clipart/64/000000/facebook.png"/></a>
                    </div>
                    <div class="social-item">
                        <a href=""><img src="data:image/png;base64,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"></a>
                    </div>
                </div>
                <p>Copyright 2020 Adrian. All rights reserved</p>
            </div>
        </section>
  `;

    return template;
};

export default Footer;