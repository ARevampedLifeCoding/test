import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adopt from '../components/Adopt/Adopt';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import RequireAuth from '../components/RequireAuth';
import PrivatePage from '../pages/PrivatePage';

const AppRoutes= ({children}) => {
return (
	<Router>
		{children}
		<Routes>
			<Route exact path="/" element={<Adopt/>}/>
			<Route exact path="/login" element={<Login/>}/>
			<Route exact path="/signup" element={<Signup/>}/>
			<Route exact path="/private" 
				element={
					<RequireAuth>
						<PrivatePage/>
					</RequireAuth>
				}>
			</Route>
		</Routes>
	</Router>)
};

export default AppRoutes;