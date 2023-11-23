const Inicio = () => {
    return (
        <section className="flex flex-col justify-center h-full px-4 mx-4 text-3xl">
            <p className="text-app-primary text-7xl font-medium">Yo soy Duvan Ceron</p>
            <p className="text-black">.</p>
            <p className="text-white">Soy desarrollador full-stack y estudiante de Ingeniería de Software</p>
            <p className="text-black">.</p>
            <section>
                <a className="text-app-primary">Aquí tengo que poner como una introducción como </a>
                <a className="text-white">desarrolladorr full-stack</a>
                <a className="text-app-primary">, aparte de más cosas personales como relevantes. logros y cosas así, que destaquen de primera mano el perfil o dar una buena impresión con tan solo el primer texto del párrafo que no debería ser muy largo ni tampoco tan corto que parezca poco.</a>
            </section>
            <p className="text-black">.</p>
            <p className="text-black">.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="251" height="46" viewBox="0 0 251 46" fill="none">
                <path d="M0.039917 0.928406H250.059V45.3763H10.0674L0.039917 33.9171V0.928406Z" fill="#F8EF00"/>
                <line x1="249.346" y1="0.928467" x2="249.346" y2="45.3763" stroke="#FF003C" stroke-width="1.389"/>
                <text x="50%" y="50%" fill='black' fontFamily="Rajdhani" textAnchor="middle" dominant-baseline="middle" font-weight="bolder" font-size="25">DESCARGA MI CV</text>
            </svg>
        </section>
    );
};

export default Inicio;