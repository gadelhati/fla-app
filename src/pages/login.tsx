import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox } from "@ionic/react"

export const Login = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
            <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
        </IonCard>
    )
}