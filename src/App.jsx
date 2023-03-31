import './styles/css/main.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
    </div>
  )
}

export default App