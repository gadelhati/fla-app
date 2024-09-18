import { IonAvatar, IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs, IonText, IonThumbnail } from "@ionic/react"
import { Classification } from "./classification"
import { Matches } from "./matches"
import { Results } from "./results"
import football from '../assets/image/football-ball.png'
import goal from '../assets/image/goal.png'
import trophy from '../assets/image/trophy.png'
import './ion.css'

export const Tabs = () => {
    return (
        <IonTabs>
            <IonTab tab="classification">
                <Classification/>
            </IonTab>
            <IonTab tab="matches">
                <Matches/>
            </IonTab>
            <IonTab tab="results">
                <Results/>
            </IonTab>
            <IonTabBar slot="bottom">
                <IonTabButton tab="classification">
                    <IonThumbnail><img src={football} /></IonThumbnail>Classification
                </IonTabButton>
                <IonTabButton tab="matches">
                    <IonThumbnail><img src={goal} /></IonThumbnail>Matches
                </IonTabButton>
                <IonTabButton tab="results">
                    <IonThumbnail><img src={trophy} height={'.2rem'} /></IonThumbnail>Results
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}