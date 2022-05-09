import './style/App.css';
import html2canvas from 'html2canvas';

function App() {
  
  html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});

  return (
    <div className="App">
      <button id='but_screenshot' value='Take screenshot' onClick='screenshot();'>
      </button>
    </div>
  );
}

export default App;
