import { IonButton, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonPage, IonRadio, IonRadioGroup, IonRange, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToast, IonToggle, IonToolbar } from "@ionic/react"

export const Page = () => {
    return (
        // <IonMenu contentId="main-content">
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Content</h1>
                <IonToggle checked={true}>Checked Toggle</IonToggle>
                <IonSegment value="buttons">
                    <IonSegmentButton value="default">
                        <IonLabel>Default</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="segment">
                        <IonLabel>Segment</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="buttons">
                        <IonLabel>Button</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                <IonList>
                    <IonItem>
                        <IonSelect label="Default label" placeholder="Favorite Fruit">
                            <IonSelectOption value="apple">Apple</IonSelectOption>
                            <IonSelectOption value="banana">Banana</IonSelectOption>
                            <IonSelectOption value="orange">Orange</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
                <IonRadioGroup value="start">
                    <IonRadio value="start" labelPlacement="fixed">start</IonRadio>
                    <IonRadio value="reload" labelPlacement="fixed">reload</IonRadio>
                    <IonRadio value="stop" labelPlacement="fixed">stop</IonRadio>
                </IonRadioGroup>
                <IonRange labelPlacement="stacked" label="Stacked Label"></IonRange>
                <IonButton id="open-toast" expand="block">Open</IonButton>
                <IonToast trigger="open-toast" message="This toast will disappear after 5 seconds" duration={5000}></IonToast>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonTitle>Footer</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
        // <IonContent className="ion-padding">This is the menu content.</IonContent>
        // </IonMenu>
    )
}