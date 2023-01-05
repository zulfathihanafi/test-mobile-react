import {
    IonAccordion,
    IonAccordionGroup, IonButton, IonContent, IonIcon, IonItem,
    IonLabel, IonList, IonModal, IonFab, IonFabButton, IonCard, IonCardContent, IonTextarea,
    useIonAlert, useIonLoading, IonApp
} from '@ionic/react';
import { list, add, addCircle } from 'ionicons/icons';

import { useState, useEffect } from 'react';

import { app } from "../firebase"

import { getFirestore, doc, setDoc, addDoc, getDoc, collection, query, where, getDocs, updateDoc } from "firebase/firestore";

import { Network } from "@capacitor/network"

import { useParams, Link, useNavigate } from 'react-router-dom'



interface QuestionData {
    soalan: string,
    jawapan: string,
    rujukan: string,
    kategori: string,
    id: string
}

const db = getFirestore(app);

const AnswersCard = (props: any) => {
    const data: QuestionData = props.data
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [jawapan, setJawapan] = useState(data.jawapan)
    const [rujukan, setRujukan] = useState(data.rujukan)
    const [connection, setConnection] = useState(props.connection)



    const onSubmit = async (event: any) => {
        event.preventDefault();
        const docRef = doc(db, "soalan", data.id);
        await present({ message: 'Loading...' })
        // Set the "capital" field of the city 'DC'
        await updateDoc(docRef, {
            jawapan : jawapan,
            rujukan : rujukan
        }).then(()=>{
            dismiss()
            alert({
                header: 'Jawapan berjaya dihantar',
                message: 'Jawapan akan dipaparkan kepada pengguna.',
                buttons: [{ text: 'Ok' }]
            })
            // setJawapan('')
        });
    };

    return (
        <>
            Jawab Soalan
            <IonCard >
                <IonCardContent>

                    <div>
                        <IonLabel style={{ fontSize: '0.8rem', whiteSpace: 'pre-line' }}>
                            <b>Soalan :</b> {"\n" + data.soalan + "\n"}
                            <b>Kategori :</b> {data.kategori + "\n"}

                        </IonLabel>
                        {!connection &&
                            <p style={{ color: 'red' }}>
                                Peringatan : Tiada sambungan internet
                            </p>}
                        <IonLabel style={{ fontSize: '0.8rem', whiteSpace: 'pre-line' }}>
                            <b>Jawapan :</b>
                        </IonLabel>
                        <IonTextarea
                            autoGrow={true}
                            style={{ fontSize: '0.8rem', border: '1px solid', borderRadius: '15px' }}
                            placeholder="Jawapan ..."
                            onIonChange={(e) => { setJawapan(e.target.value || '') }}
                            value={jawapan}
                            rows={5}
                        ></IonTextarea>
                        <IonLabel style={{ fontSize: '0.8rem', whiteSpace: 'pre-line' }}>
                            <b>{"\n"}Rujukan :</b>
                        </IonLabel>
                        <IonTextarea
                            autoGrow={true}
                            style={{ fontSize: '0.8rem', border: '1px solid', borderRadius: '15px' }}
                            placeholder="Rujukan ..."
                            onIonChange={(e) => { setRujukan(e.target.value || '') }}
                            value={rujukan}
                            rows={3}
                        ></IonTextarea>

                        <div className="ion-margin-top">
                            <IonButton disabled={!connection} expand="full" onClick={onSubmit} color="secondary" id={`open-modal-${props.title}`}>
                                <IonIcon icon={addCircle} slot="start" />
                                Hantar Jawapan
                            </IonButton>
                        </div>
                    </div>
                </IonCardContent>
            </IonCard>


        </>
    )
}
const AnswerForm = (props: any) => {
    const [connection, setConnection] = useState(false)
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [soalan, setSoalan] = useState('')
    const [additionalQuestions, setAdditionalQuestions] = useState<QuestionData>()
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getQuestions() {
            const docRef = doc(db, "soalan", String(id));
            const docSnap = await getDoc(docRef);
            const data: any = docSnap.data()
            setAdditionalQuestions({...data,id:id})
            console.log("Snap : ", data)
        }

        const logCurrentNetworkStatus = async () => {
            const status = await Network.getStatus();
            setConnection(status.connected)
        };

        logCurrentNetworkStatus();
        getQuestions()
    }, [])

    return (
        <>

            <button onClick={() => { navigate(`../admin`) }}>Home</button>

            {additionalQuestions && <AnswersCard data={additionalQuestions} connection={connection} />}

        </>
    )
}

export default AnswerForm;
