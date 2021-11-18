import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonRow } from "@ionic/react"

export const Login = () => {
    return (
        <IonContent>
            <h1>Welcome to Tufa</h1>
            <p>Tufa is a two-factor authentication application.
                 Once you login, you will see your authentication requests</p>
            <p>Demo user / pass: demo@demo.com / demo</p>
            <IonList>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput value={``}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput value={``}></IonInput>
                </IonItem>
            </IonList>
            <IonButton expand="block" onClick={() => { }}>
                Login
            </IonButton>
        </IonContent>
    )
}