import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StyleContextProvider from './contexts/StyleContext';
import BusinessAuth from './components/auth/BusinessAuth';
import SalesPitch from './components/main/SalesPitch';
import Inbound from './components/main/Inbound';
import AddQty from './components/main/AddQty';
import StorageAdmin from './components/main/storageAdmin/storeadminAuth';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<StyleContextProvider>
						<Route exact path='/' component={Home} />
						<Route path='/login' component={BusinessAuth} />
						<Route path='/sales-pitch' component={SalesPitch} />
						<Route exact path='/inbound/add-qty' component={AddQty} />
						<Route exact path='/inbound' component={Inbound} />
						<Route exact path='/storage-admin' component={StorageAdmin} />
					</StyleContextProvider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
