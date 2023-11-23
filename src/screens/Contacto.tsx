const Contacto = () => {
    const email = "< email />"
    const linkedin = "< linkedin />"
    const github = "< github />"

    return (
        <section className="flex flex-col justify-center h-full px-4 mx-4 text-3xl">
            <p className="text-app-primary text-7xl font-medium mb-8">Contacto</p>
            <p className="text-app-secondary underline underline-offset-8 my-2 font-medium">{email}</p>
            <a className="text-white flex flex-row gap-3 py-2" href="duvan456@outlook.com">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                    <path d="M 21.541016 4.0957031 C 21.277323 4.0910623 21.009427 4.1178181 20.740234 4.1777344 L 20.740234 4.1757812 L 7.5234375 7.1132812 C 5.4728994 7.5691225 4 9.4069339 4 11.507812 L 4 36.492188 C 4 38.593573 5.4735774 40.431028 7.5234375 40.886719 L 20.740234 43.824219 L 20.740234 43.822266 C 22.893773 44.301643 25 42.611755 25 40.40625 L 25 7.59375 C 25 5.663933 23.386864 4.1281887 21.541016 4.0957031 z M 28 11.050781 L 28 22.189453 L 31.509766 24.669922 L 44.990234 15.369141 C 44.900234 12.969141 42.92 11.050781 40.5 11.050781 L 28 11.050781 z M 14.5 16.5 C 17.584 16.5 20 20.014 20 24.5 C 20 28.986 17.584 32.5 14.5 32.5 C 11.416 32.5 9 28.986 9 24.5 C 9 20.014 11.416 16.5 14.5 16.5 z M 45 19.009766 L 32.349609 27.730469 C 32.099609 27.910469 31.8 28 31.5 28 C 31.2 28 30.890859 27.910703 30.630859 27.720703 L 28 25.859375 L 28 38.050781 L 40.5 38.050781 C 42.98 38.050781 45 36.030781 45 33.550781 L 45 19.009766 z M 14.5 19.5 C 13.32 19.5 12 21.638 12 24.5 C 12 27.362 13.32 29.5 14.5 29.5 C 15.68 29.5 17 27.362 17 24.5 C 17 21.638 15.68 19.5 14.5 19.5 z"></path>
                </svg>
                duvan456@outlook.com
            </a>
            <hr className="border-t-2 border-app-secondary"/>
            <p className="text-app-secondary underline underline-offset-8 my-2 font-medium pt-6">{linkedin}</p>
            <a className="text-white flex flex-row gap-3 py-2" href="https://www.linkedin.com/in/duvan-ceron-2a320a277/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
                https://www.linkedin.com/in/duvan-ceron-2a320a277/
            </a>
            <hr className="border-t-2 border-app-secondary pb-6"/>
            <p className="text-app-secondary underline underline-offset-8 my-2 font-medium">{github}</p>
            <a className="text-white flex flex-row gap-3 py-2" href="https://github.com/duvan456">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                https://github.com/duvan456
            </a>
            <hr className="border-t-2 border-app-secondary"/>
        </section>
    );
};

export default Contacto;