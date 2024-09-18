import { useEffect, useState } from "react"
import { api } from "../assets/api/api"
import { IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import icon from '../assets/image/football-ball.png'
// https://github.com/fcoagz/conmebol

export const Matches = () => {
    const [results, setResults] = useState<any>([])

    useEffect(() => {
        api.get('/matches').then((response: any) => {
            setResults([response.data])
        })
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonThumbnail slot="start"><img src={icon} /></IonThumbnail>
                    <IonTitle>Future Matches</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItemGroup>
                    {results && results.map((element: any) => {
                        return Object.entries(element).map(([key, value]: [string, any])=>{
                            return <><IonItemDivider><IonLabel>{key}</IonLabel></IonItemDivider>{value.map((object: Matche)=>{
                                return <IonItem key={Math.random()}>
                                    <IonLabel className="ion-text-center">{object.first_team} X {object.second_team}</IonLabel>
                                </IonItem>
                            })}</>
                        })
                    })}
                </IonItemGroup>
            </IonContent>
        </IonPage>
    )
}