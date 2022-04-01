import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path="/notice">
					<h1 style={{ textAlign: "center" }}>
						Home에서 영화 제목을 클릭해주세요!
					</h1>
				</Route>
				<Route path="/movie/:id">
					<Detail />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
