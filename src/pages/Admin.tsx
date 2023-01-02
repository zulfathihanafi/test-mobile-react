import {
    IonAccordion,
    IonAccordionGroup, IonButton, IonContent, IonIcon, IonItem,
    IonLabel, IonList, IonModal, IonFab, IonFabButton, IonCard, IonCardContent, IonTextarea,
    useIonAlert, useIonLoading, IonApp
} from '@ionic/react';
import { list, add, addCircle } from 'ionicons/icons';

import { useState, useEffect } from 'react';

import { app } from "../firebase"

import { getFirestore, doc, setDoc, addDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

import { Network } from "@capacitor/network"

interface QuestionData {
    soalan: string,
    jawapan: string,
    rujukan: [],
}

const db = getFirestore(app);


const Admin = (props: any) => {
    const [connection, setConnection] = useState(false)
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [soalan, setSoalan] = useState('')
    const [additionalQuestions, setAdditionalQuestions] = useState<any>([])
    
    const onSubmit = async (event: any) => {
        event.preventDefault();
        console.log("Soalan : ", soalan, "Type", props.title, "Time", Date.now())

        const newQuestion = {
            soalan: soalan,
            jawapan: null,
            rujukan: null,
            kategori: props.title,
            timestamp: Date.now()
        }



        await present({ message: 'Loading...' })



        const docRef = await addDoc(collection(db, "soalan"), newQuestion);
        console.log("Document written with ID: ", docRef.id);
        if (docRef.id) {
            props.setModalOpen(false)
            dismiss()
            alert({
                header: 'Soalan berjaya dihantar',
                message: 'Jawapan akan ditunjukkan pada paparan ini jika soalan ini telah dijawab.',
                buttons: [{ text: 'Ok' }]
            })
            setSoalan('')
            console.log(docRef.id)
        }

    };

    useEffect(() => {
        async function getCities() {
            const q = query(collection(db, "soalan"), where("kategori", "==", props.title))
            const querySnapshot = await getDocs(q);
            setAdditionalQuestions(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(additionalQuestions)
        }

        const logCurrentNetworkStatus = async () => {
            const status = await Network.getStatus();
            setConnection(status.connected)
        };

        logCurrentNetworkStatus();
        getCities()
    }, [])

    return (
        <IonCard>
            <IonCardContent>

                <div>
                    <IonLabel>Borang Soalan</IonLabel>
                    {!connection &&
                        <p style={{ color: 'red' }}>
                            Peringatan : Tiada sambungan internet
                        </p>}
                    <IonTextarea

                        autoGrow={true}
                        style={{ fontSize: '0.8rem' }}
                        placeholder="Tanya soalan disini ..."
                        onIonChange={(e) => { setSoalan(e.target.value || '') }}
                        value={soalan}
                        rows={10}
                    ></IonTextarea>

                    <div className="ion-margin-top">
                        <IonButton disabled={!connection} expand="full" onClick={onSubmit} color="secondary" id={`open-modal-${props.title}`}>
                            <IonIcon icon={addCircle} slot="start" />
                            Hantar Soalan</IonButton>
                    </div>
                </div>
            </IonCardContent>
        </IonCard>
    )
}

export default Admin;