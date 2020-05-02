import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StyleContextProvider from './contexts/StyleContext';
import BusinessAuth from './components/auth/BusinessAuth';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<StyleContextProvider>
						<Route exact path='/' component={Home} />
						<Route path='/login/salesplug' component={BusinessAuth} />
					</StyleContextProvider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
