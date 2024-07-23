import React, { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	React.useEffect(() => {
		console.log(count);
	}, []);

	return <>APP</>;
}

export default App;
