import { Route, Switch } from 'react-router';
import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import Search from './pages/Search';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route strict exact path="/" component={CharactersList}></Route>
				<Route strict exact path="/search" component={Search}></Route>
				<Route strict exact path="/:id" component={Character}></Route>
			</Switch>
		</div>
	);
}

export default App;
