import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect from="*" to="/" />
            </Switch>
            
        </>
    );
}

export default App;
