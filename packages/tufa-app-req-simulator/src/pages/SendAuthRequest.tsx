import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonRow, useIonToast } from "@ionic/react"
import { useState } from "react";
import { request, gql } from 'graphql-request';

const SUCCESS_ALERT_DURATION_MS = 4 * 1000;

export const SendAuthRequest = () => {

    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [present, dismiss] = useIonToast();

    const sendAuthRequest = () => {
        request(
            `${process.env.REACT_APP_GQL_URL}`,
            gql`
                mutation CreateAuthRequest($description: String!, $userId: String!){
                    createAuthRequest(authRequestData: {description: $description, userId: $userId}) {
                        id
                    }
                }
            `,
            {
               description,
               userId: email
            }
        ).then(() => {
            present(`Auth Request successfully created`, SUCCESS_ALERT_DURATION_MS);
        }, (err) => {
            console.error(`couldn't create auth request`, err)
        })
    }

    return (
        <IonContent>
            <h1>Welcome to Tufa Auth Request Simulator</h1>
            <p>Use this application to send authentication requests to the user of your choice</p>
            <IonList>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput value={email} onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Description</IonLabel>
                    <IonInput value={description} onIonChange={(e) => setDescription(e.detail.value!)}></IonInput>
                </IonItem>
            </IonList>
            <IonButton expand="block" onClick={() => sendAuthRequest()}>
                Send
            </IonButton>
        </IonContent>
    )
}