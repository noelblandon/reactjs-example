
import Home from './Home';
import About from './About';
import Contact from './Contact';



const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () =>  <Home />,
      main: () =>  <Home />
    },
    {
      path: "/about",
      sidebar: () => <About />,
      main: () => <About />
    },
    {
      path: "/contact",
      sidebar: () => <Contact />,
      main: () => <Contact />
    }
  ];


  export default routes;