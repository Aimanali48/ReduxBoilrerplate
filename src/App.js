import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing}></Route>
      <div className="container">
      <Route exact path="/register" component={Register}></Route>
       <Route exact path="/not-found" component={NotFound}></Route>
      </div>
       <Footer />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
