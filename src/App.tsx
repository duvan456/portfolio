import { Route, Routes, NavLink } from 'react-router-dom'
import Inicio from './screens/Inicio'
import Educacion from './screens/Educacion'
import Proyectos from './screens/Proyectos'
import Habilidades from './screens/Habilidades'
import Contacto from './screens/Contacto'
import NotFound from './screens/NotFound'

function App() {
  return (
    <main className='w-screen h-screen bg-black font-rajdhani flex flex-row'>
      <section className='flex gap-16 text-8xl font-medium justify-center items-center basis-2/12 font-rajdhani text-app-primary border-2 border-app-secondary'>
        <section className='flex flex-col -space-y-6'>
          <p className='block'>F</p>
          <p className='block'>U</p>
          <p className='block'>L</p>
          <p className='block'>L</p>
          <p className='block text-black'>.</p>
          <p className='block text-white'>S</p>
          <p className='block text-white'>T</p>
          <p className='block text-white'>A</p>
          <p className='block text-white'>C</p>
          <p className='block text-white'>K</p>
        </section>
        <section className='flex flex-col -space-y-6'>
          <p className='block text-white'>D</p>
          <p className='block text-white'>E</p>
          <p className='block text-white'>V</p>
          <p className='block'>E</p>
          <p className='block'>L</p>
          <p className='block'>O</p>
          <p className='block'>P</p>
          <p className='block'>E</p>
          <p className='block'>R</p>
        </section>
      </section>
      <section className='flex basis-3/12 overflow-hidden'>
        <img src='src\assets\fondo.gif' className='h-full object-cover' />
      </section>
      <section className='flex flex-col basis-7/12 border-2 border-app-secondary'>
        <section className='flex flex-row w-full h-[90px] text-white justify-center items-center text-center text-3xl'>
          <NavLink to='/' className='basis-1/5'>
            INICIO
          </NavLink>
          <NavLink to='/educacion' className='basis-1/5'>
            <p className='basis-1/5'>EDUCACION</p>
          </NavLink>
          <NavLink to='/proyectos' className='basis-1/5'>
            <p className='basis-1/5'>PROYECTOS</p>
          </NavLink>
          <NavLink to='/habilidades' className='basis-1/5'>
            <p className='basis-1/5'>HABILIDADES</p>
          </NavLink>
          <NavLink to='/contacto' className='basis-1/5'>
            <p className='basis-1/5'>CONTACTO</p>
          </NavLink>
        </section>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/educacion' element={<Educacion />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/habilidades' element={<Habilidades />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
