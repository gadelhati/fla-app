import { useEffect, useState } from "react"
import { api } from "../assets/api/api"
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonReorder, IonReorderGroup, IonThumbnail, IonTitle, IonToolbar, ItemReorderEventDetail } from "@ionic/react"
import icon from '../assets/image/trophy.png'
// https://github.com/fcoagz/conmebol

export const Classification = () => {
    const [results, setResults] = useState<Classification[]>([])

    useEffect(() => {
        api.get('/classification').then((response: any) => {
            setResults(response.data.results)
        })
    }, [])
    const handleReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
        event.detail.complete();
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonThumbnail slot="start"><img src={icon} /></IonThumbnail>
                    <IonTitle>Classification</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {results && results.map((element: Classification) => {
                        return <IonItem key={Math.random()}>
                            <IonLabel className="ion-text-center">{element.position}º {element.country}</IonLabel>
                        </IonItem>
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    )
}