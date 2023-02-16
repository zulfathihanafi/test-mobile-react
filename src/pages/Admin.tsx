import {
    IonAccordion, IonItemDivider, IonNavLink, IonChip,
    IonAccordionGroup, IonButton, IonContent, IonIcon, IonItem,
    IonLabel, IonList, IonModal, IonFab, IonFabButton, IonCard, IonCardContent, IonTextarea,
    useIonAlert, useIonLoading, IonApp, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonButtons
} from '@ionic/react';
import { list, add, addCircle, logOut } from 'ionicons/icons';

import { useState, useEffect } from 'react';

import { app } from "../firebase"

import { getFirestore, doc, setDoc, addDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

import { Network } from "@capacitor/network"

import { Link, useLocation, useNavigate } from 'react-router-dom'
import AnswerForm from './AnswerForm';
import { getAuth,signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

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
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        props.setDetectChange(isOpen)
    }, [isOpen])
    return (
        <>
            <IonCard >
                <IonCardContent>
                    <IonGrid style={{ margin: '-15px 0' }}>
                        <IonRow style={{ marginLeft: '-20px' }}>
                            <IonChip color="primary" style={{ fontSize: '0.8rem' }}> {data.kategori}</IonChip>
                        </IonRow>
                        <IonRow>
                            <IonLabel style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                                {data.soalan}
                            </IonLabel>
                        </IonRow>
                        <IonRow style={{ marginLeft: '20px' }}>
                            <IonCol size='9' ></IonCol>
                            <IonCol size='3'>
                                <IonButton size="small" onClick={() => { setIsOpen(true) }}>
                                    {props.editSave ? "Jawab" : "Edit"}
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>

            <IonModal onDidDismiss={() => { setIsOpen(false) }}  isOpen={isOpen}>
                <IonHeader>
                    <IonToolbar color={"primary"}>
                        <IonTitle>e-Pamil</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <AnswerForm data={data} setIsOpen={setIsOpen} />
                </IonContent>
            </IonModal>

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
    const [detectChange, setDetectChange] = useState(false)
    
    useEffect(() => {

        // onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         // User is signed in, see docs for a list of available properties
        //         // https://firebase.google.com/docs/reference/js/firebase.User
        //         const uid = user.uid;
        //         const email = user.email;
        //         console.log(uid, email)
        //         if(uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2"){
        //             FirebaseAuthentication.signOut() 
        //         }
                

        //     } else {
        //         // User is signed out
        //         // ...
        //         navigate('/login')
        //     }
        // });

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


    document.addEventListener('ionBackButton', (ev:any) => {
        ev.detail.register(10, () => {
          navigate('/');
        });
      });

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
                                <IonSelect style={{ width: '100%' }} onIonChange={(ev) => setCategory(ev.detail.value)} interface="popover" placeholder="Pilih Kategori" value={category}>
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
                <IonRow>
                <IonButtons slot="end">
                  <IonButton type='button' fill='solid' color={'danger'} onClick={(e) => { FirebaseAuthentication.signOut() }}>
                    <IonIcon icon={logOut} slot="start" />
                  </IonButton>
                </IonButtons>
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
                            <AnswersCard key={index}  data={data} connection={connection} editSave={currentPage == 'baru'} setDetectChange={setDetectChange} />
                        </>
                    )
                })}
        </>
    )
}

export default Admin;
