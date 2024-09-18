import { useEffect, useState } from "react"
import { api } from "../assets/api/api"
import { IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import icon from '../assets/image/goal.png'
// https://github.com/fcoagz/conmebol

export const Results = () => {
    const [results, setResults] = useState<any>([])

    useEffect(() => {
        api.get('/results').then((response: any) => {
            setResults([response.data])
        })
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonThumbnail slot="start"><img src={icon} /></IonThumbnail>
                    <IonTitle>Results</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItemGroup>
                    {results && results.map((element: any) => {
                        return Object.entries(element).map(([key, value]: [string, any])=>{
                            return <><IonItemDivider><IonLabel>{key}</IonLabel></IonItemDivider>{value.map((object: Game)=>{
                                return <IonItem key={Math.random()}>
                                    <IonLabel className="ion-text-center">
                                        <IonText color={object.winner === object.first_team.country ? 'success':''}>{object.first_team.country} {object.first_team.goals}</IonText>
                                        <IonText> X </IonText>
                                        <IonText color={object.winner === object.second_team.country ? 'success':''}>{object.second_team.goals} {object.second_team.country}</IonText>
                                    </IonLabel>
                                </IonItem>
                            })}</>
                        })
                    })}
                </IonItemGroup>
            </IonContent>
        </IonPage>
    )
}