import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, IonThumbnail, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { Classification } from './pages/classification';
import { Matches } from './pages/matches';
import { Results } from './pages/results';
import football from './assets/image/football-ball.png'
import goal from './assets/image/goal.png'
import trophy from './assets/image/trophy.png'
import './pages/ion.css'

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" exact={true}><Redirect to="/classification" /></Route>
          {/* <Route path="/home" exact={true}><Home /></Route>
          <Route path="/message/:id"><ViewMessage /></Route> */}
          {/* <Route path="/tabs" exact={true}><Tabs /></Route> */}
          <Route path="/classification" render={() => <Classification />} exact={true}></Route>
          <Route path="/matches" render={() => <Matches />} exact={true}></Route>
          <Route path="/results" render={() => <Results />} exact={true}></Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="classification" href="/classification">
            <IonThumbnail><img src={trophy} /></IonThumbnail>Classification
          </IonTabButton>
          <IonTabButton tab="matches" href="/matches">
            <IonThumbnail><img src={football} /></IonThumbnail>Matches
          </IonTabButton>
          <IonTabButton tab="results" href="/results">
            <IonThumbnail><img src={goal} /></IonThumbnail>Results
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
