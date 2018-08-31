// https://www.npmjs.com/package/react-snapshot
// -
import ReactDOM from 'react-dom';
// +
import { render } from 'react-snapshot';

// and

// -
ReactDOM.render();
// +
render(<App />, document.getElementById('root'));
