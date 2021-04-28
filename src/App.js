import logo from './logo.svg';
import './App.css';

import ScrollPage from './Components/scroller'
import Pdf from './Components/pdfPageReader'

import pd from './res/pd.pdf'

function App() {
  return (
    <div className="App">
      Scrolling Pages

      <Pdf pdf = {pd}> </Pdf>
    </div>
  );
}

export default App;
