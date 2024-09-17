import { IonContent, IonHeader, IonIcon, IonNote, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react"
import icon from '../../resources/icon.png'
import splash from '../../resources/splash.png'
import { Page } from "./page"

export const Tabs = () => {
    return (
        <IonTabs>
            <IonTab tab="home">
                <Page/>
            </IonTab>
            <IonTab tab="radio">
                <div id="radio-page">
                    <IonHeader>
                        <IonToolbar><IonTitle>Radio</IonTitle></IonToolbar>
                    </IonHeader>
                    <IonContent><IonNote>Default Note</IonNote></IonContent>
                </div>
            </IonTab>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home">
                    <IonIcon icon={icon} />Listen Now
                </IonTabButton>
                <IonTabButton tab="radio">
                    <IonIcon icon={splash} />Radio
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}