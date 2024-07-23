import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Product from './components/Product';
import Testimonials from './components/Testimonial';
import './scss/app.scss';

function App() {
	return (
		<div className="App">
			<Header/>
			<Hero/>
			<About/>
			<Product/>
			<Testimonials/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;
