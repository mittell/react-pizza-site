import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/Navbar';
import { GlobalStyle } from './globalStyles';

function App() {
	return (
		<Router>
			<GlobalStyle />
			{/* <NavBar /> */}
			<Hero />
		</Router>
	);
}

export default App;
