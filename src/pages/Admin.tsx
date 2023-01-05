import {
    IonAccordion, IonItemDivider,
    IonAccordionGroup, IonButton, IonContent, IonIcon, IonItem,
    IonLabel, IonList, IonModal, IonFab, IonFabButton, IonCard, IonCardContent, IonTextarea,
    useIonAlert, useIonLoading, IonApp, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption
} from '@ionic/react';
import { list, add, addCircle } from 'ionicons/icons';

import { useState, useEffect } from 'react';

import { app } from "../firebase"

import { getFirestore, doc, setDoc, addDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

import { Network } from "@capacitor/network"

import { Link,useLocation, useNavigate  } from 'react-router-dom'
interface QuestionData {
    soalan: string,
    jawapan: string,
    rujukan: string,
    kategori: string
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
        console.log("Soalan : ", jawapan, "Type", props.title, "Time", Date.now())

        const newQuestion = {
            soalan: jawapan,
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
            setJawapan('')
            console.log(docRef.id)
        }

    };

    return (
        <>
            <IonCard >
                <IonCardContent>

                    <div>
                        <IonLabel style={{ fontSize: '0.8rem', whiteSpace: 'pre-line' }}>
                            Soalan : {"\n" + data.soalan + "\n"}


                        </IonLabel>
                        <IonItemDivider>
                            <IonLabel>
                                Kategori : {data.kategori + "\n"}
                            </IonLabel>
                        </IonItemDivider>
                    </div>
                </IonCardContent>
            </IonCard>


        </>
    )
}
const Admin = (props: any) => {
    const [connection, setConnection] = useState(false)
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [soalan, setSoalan] = useState('')
    const [additionalQuestions, setAdditionalQuestions] = useState<any>([])
    const [currentPage, setCurrentPage] = useState("baru")
    const [category, setCategory] = useState('Semua')
    const navigate = useNavigate();
    useEffect(() => {
        async function getQuestions() {
            const q = query(collection(db, "soalan"))
            const querySnapshot = await getDocs(q);
            setAdditionalQuestions(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
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
            <IonGrid>
                <IonRow >
                    <IonCol sizeMd='3'>
                        <IonButton style={{ width: '100%' }} fill={currentPage == "baru" ? ("solid") : ("outline")} onClick={() => { setCurrentPage('baru') }}>Soalan Baru</IonButton>
                    </IonCol>
                    <IonCol sizeMd='3'>
                        <IonButton style={{ width: '100%' }} fill={currentPage != "baru" ? ("solid") : ("outline")} onClick={() => { setCurrentPage('lama') }}>Dijawab</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        Kategori :
                        <IonList>
                            <IonItem>
                                <IonSelect style={{width:'100%'}} onIonChange={(ev) => setCategory(ev.detail.value)} interface="popover" placeholder="Pilih Kategori" value={category}>
                                    <IonSelectOption value="Semua">Semua</IonSelectOption>
                                    <IonSelectOption value="Bersuci">Bersuci</IonSelectOption>
                                    <IonSelectOption value="Solat">Solat</IonSelectOption>
                                    <IonSelectOption value="Puasa">Puasa</IonSelectOption>
                                    <IonSelectOption value="Zakat">Zakat</IonSelectOption>
                                    <IonSelectOption value="Pemakanan">Pemakanan</IonSelectOption>
                                    <IonSelectOption value="Penjagaan Aurat">Penjagaan Aurat</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonList>
                    </IonCol>
                    

                </IonRow>
            </IonGrid>

            {additionalQuestions
                .filter((data: any) => {
                    if (currentPage == "baru") { return data.jawapan == "" }
                    else {
                        return data.jawapan != ""
                    }
                    // return data.jawapan == "Saya lapar"
                })
                .filter((data: any) => {
                    if (category == 'Semua') { return data } else {
                        return data.kategori == category
                    }
                    // return data.jawapan == "Saya lapar"
                })
                .map((data: any, index: number) => {
                    return (
                        <>
                            <Link to={`answerform/${data.id}`} style={{ textDecoration: 'none' }}>
                                <AnswersCard key={index} index={"additional-" + index} data={data} connection={connection} />
                                {/* <button onClick={()=>{navigate("")}}>Navigate</button> */}
                            </Link>

                        </>
                    )
                })}
        </>
    )
}

export default Admin;
