import { useState } from "react";
import { FirstScreen } from "./components/FirstScreen";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="h-auto w-screen bg-slate-800">
			<FirstScreen />
		</div>
	);
}

export default App;
