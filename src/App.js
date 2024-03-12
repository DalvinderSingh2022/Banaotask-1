import React, { createContext, useEffect, useReducer, useState } from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import PostSection from './components/PostSection';
import EditButton from './components/EditButton';

export const ScreenContext = createContext();
const reducer = (state) => !state;

const App = () => {
  const [joined, dispatch] = useReducer(reducer, false);
  const [islargescreen, setIslargescreen] = useState(true);

  useEffect(() => {
    const reSize = () => {
      setIslargescreen(window.innerWidth > 820);
    }
    reSize();
    window.addEventListener("resize", reSize);

    return () => window.removeEventListener("resize", reSize);
  }, []);

  return (
    <ScreenContext.Provider value={{ islargescreen, joined, dispatch }}>
      <main>
        <Navbar />
        <aside className='flex'>
          <HeroSection />
        </aside>
        <article>
          <section className='flex' >
            <FilterSection />
          </section>
          <PostSection />
        </article>
        {!islargescreen && <EditButton />}
      </main>
    </ScreenContext.Provider>
  )
}

export default App;