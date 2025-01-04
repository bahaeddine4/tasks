import React from "react";
import { Task, Input, Header, Column } from "./components";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			<div>
				<div className="columns">
					<Column filter="TODO"></Column>
					<Column filter="WIP"></Column>
					<Column filter="DONE"></Column>
				</div>
			</div>
		</div>
	);
}

export default App;
