import { useEffect, useState } from "react"
import { api } from "../assets/api/api"
import { IonBadge, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import icon from '../assets/image/trophy.png'
// https://github.com/fcoagz/conmebol

export const Classification = () => {
    const [results, setResults] = useState<Classification[]>([])

    useEffect(() => {
        api.get('/classification').then((response: any) => {
            setResults(response.data.results)
        })
    }, [])
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
                            <IonBadge slot="start" color="medium">points {element.points}</IonBadge>
                            <IonLabel className="ion-text-center">
                                <IonText>{element.position}º {element.country}</IonText>
                            </IonLabel>
                            <IonBadge slot="end" color="success">won {element.won}</IonBadge>
                            <IonBadge slot="end" color="danger">losses {element.losses}</IonBadge>
                            <IonBadge slot="end" color="medium">tied {element.tied}</IonBadge>
                        </IonItem>
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    )
}