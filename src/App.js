import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'pages/Home';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            <Header />
                <div className="">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
            <Footer />
        </>
    );
}

export default App;
