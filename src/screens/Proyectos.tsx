import Carousel from "../components/Carousel";
import '../index.css'

const Proyectos = () => {

    const carouselItems = [
        <div className="flex flex-col justify-between bg-app-secondary bg-opacity-20 border border-app-secondary w-38 h-64 text-white text-sm p-2">
            <p className="text-xl text-app-secondary pb-2">Aquí iría el nombre del proyecto</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <p className="text-app-special self-end pt-2">Link del repositorio</p>
        </div>,
        <div className="flex flex-col justify-between bg-app-secondary bg-opacity-20 border border-app-secondary w-38 h-64 text-white text-sm p-2">
            <p className="text-xl text-app-secondary pb-2">Alguna vez hice un hola mundo, cuenta?</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <p className="text-app-special self-end pt-2">Link del repositorio</p>
        </div>,
        <div className="flex flex-col justify-between bg-app-secondary bg-opacity-20 border border-app-secondary w-38 h-64 text-white text-sm p-2">
            <p className="text-xl text-app-secondary pb-2">La típica calculadora</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <p className="text-app-special self-end pt-2">Link del repositorio</p>
        </div>,
        <div className="flex flex-col justify-between bg-app-secondary bg-opacity-20 border border-app-secondary w-38 h-64 text-white text-sm p-2">
            <p className="text-xl text-app-secondary pb-2">Aquí iría el nombre del proyecto</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <p className="text-app-special self-end pt-2">Link del repositorio</p>
        </div>,
        <div className="flex flex-col justify-between bg-app-secondary bg-opacity-20 border border-app-secondary w-38 h-64 text-white text-sm p-2">
            <p className="text-xl text-app-secondary pb-2">Alguna vez hice un hola mundo, cuenta?</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <p className="text-app-special self-end pt-2">Link del repositorio</p>
        </div>,
        <div className="flex flex-col justify-between bg-app-secondary bg-opacity-20 border border-app-secondary w-38 h-64 text-white text-sm p-2">
            <p className="text-xl text-app-secondary pb-2">La típica calculadora</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <p className="text-app-special self-end pt-2">Link del repositorio</p>
        </div>
    ];

    return (
        <section className="flex flex-col justify-center items-center h-full px-4 mx-4 text-3xl">
            <p className="text-app-primary text-7xl self-start font-medium">Proyectos</p>
            <p className='block text-black'>.</p>
            <section className="container items-center justify-center max-w-3xl">
                <Carousel items={carouselItems} />
            </section>
            <section className="flex flex-row self-center mt-16 gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="35" height="35" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <a href="https://github.com/duvan456" className="text-white">GitHub</a>
            </section>
        </section>
    );
};

export default Proyectos;