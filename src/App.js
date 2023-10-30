import PageHeader from './PageHeader';
import Affirmations from './Affirmations';
import Frustrations from './Frustrations';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS

function App() {
  return (
    <div className="App">
      <PageHeader />
      <div className="d-flex">
        <Affirmations />
        <Frustrations />
      </div>
    </div>
  );
}

export default App;
