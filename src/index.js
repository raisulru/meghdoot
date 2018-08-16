import './style/foundation.min.css';
import './style';
import '../node_modules/jquery/dist/jquery.min.js';
// import './js/app';
// import './js/foundation.min.js';
import './js/what-input';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import App from './components/app';

library.add(fab, faCaretDown, faSearch)

export default App;
