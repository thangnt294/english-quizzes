import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import MainPage from './main-page/MainPage'
import AdminPage from './admin-page/AdminPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export const SetAdminContext = React.createContext()
export const IsAdminContext = React.createContext()

function App() {
	// Creating a font awesome library
	library.add(fab, fas, far)
	const [isAdmin, setIsAdmin] = useState(false)

	const handleSetAdmin = () => {
		setIsAdmin(!isAdmin)
	}

	return (
		<div>
			<Router>
				<Route path="/" exact render={() => (
					isAdmin ? <Redirect to="/admin" /> :
						(<SetAdminContext.Provider value={handleSetAdmin}>
							<IsAdminContext.Provider value={isAdmin}>
								<MainPage />
							</IsAdminContext.Provider>
						</SetAdminContext.Provider>)
				)} />
				<Route path="/admin" render={() => (
					isAdmin ? <AdminPage handleSetAdmin={handleSetAdmin} /> : <Redirect to="/" />
				)
				} />
			</Router>
		</div>
	)
}

export default App