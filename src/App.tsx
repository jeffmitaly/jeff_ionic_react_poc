import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { card, shapes, grid, checkbox, list, radio  } from 'ionicons/icons';
import CardsExample from './pages/CardsExample';
import ButtonsExample from './pages/ButtonsExample';
import GridExample from './pages/GridExample';
import CheckboxExample from './pages/CheckboxExample';
import ListExample from './pages/ListExample';
import RadioExample from './pages/RadioExample';

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

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
<IonApp>
    <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/cards" component={CardsExample} />
                    <Route path="/buttons" component={ButtonsExample} />
                    <Route path="/grid" component={GridExample} />
                    <Route path="/checkboxes" component={CheckboxExample} />
                    <Route path="/lists" component={ListExample} />
                    <Route path="/radios" component={RadioExample} />
                    <Route path="/" render={() => <Redirect to="/cards" />} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="cards" href="/cards">
                        <IonIcon icon={card} />
                        <IonLabel>Cards</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="buttons" href="/buttons">
                        <IonIcon icon={shapes} />
                        <IonLabel>Buttons</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="grid" href="/grid">
                        <IonIcon icon={grid} />
                        <IonLabel>Grid</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="checkboxes" href="/checkboxes">
                        <IonIcon icon={checkbox} />
                        <IonLabel>Checkboxes</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="lists" href="/lists">
                        <IonIcon icon={list} />
                        <IonLabel>Lists</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="radios" href="/radios">
                        <IonIcon icon={radio} />
                        <IonLabel>Radios</IonLabel>
                    </IonTabButton>
                </IonTabBar>
        </IonTabs>
    </IonReactRouter>
</IonApp>
);

export default App;
