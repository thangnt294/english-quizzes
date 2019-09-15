import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './main-page/MainPage'
import AdminPage from './admin-page/AdminPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
	// Creating a font awesome library
	library.add(fab, fas, far)

	return (
		<div>
			<Router>
				<Route path="/" exact component={MainPage} />
				<Route path="/admin" component={AdminPage} />
			</Router>
		</div>
	)
}

export default App