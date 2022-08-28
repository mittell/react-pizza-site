import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import { GlobalStyle } from './globalStyles';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<NavBar />
		</Router>
	);
}

export default App;
