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
import '../App.css';
import { Network } from "@capacitor/network"
import { Link } from 'react-router-dom';


interface QuestionData {
    soalan: string,
    jawapan: string,
    rujukan: string,
}

const db = getFirestore(app);

const QuestionAccordion = (props: any) => {
    const [showMore, setShowMore] = useState(false);
    const data: QuestionData = props.data
    return (
        <>
            <IonAccordion value={props.index}>
                <IonItem slot="header" color="light">
                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{data.soalan}</p>
                </IonItem>
                <div className="ion-padding" slot="content" style={{ textJustify: 'auto', textAlign: 'justify' }}>
                    <p style={{ whiteSpace: 'pre-line', fontSize: '0.8rem' }}>
                        {showMore ? data.jawapan : `${data.jawapan.substring(0, 350)}`}

                        {data.jawapan.length > 350 &&
                            <button className="btn" onClick={() => setShowMore(!showMore)} style={{ backgroundColor: 'inherit', color: '#4691fa', whiteSpace: 'pre-line' }}>
                                {showMore ? "\tshow less" : "\t...show more"}
                            </button>
                        }
                    </p>


                    <IonButton id={`open-modal-${props.index}`} expand="block">
                        <IonIcon slot="start" icon={list}></IonIcon>
                        Lihat Rujukan
                    </IonButton>
                    <IonModal trigger={`open-modal-${props.index}`} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                        <IonContent className="ion-padding">
                            <IonList>
                            <p style={{ whiteSpace: 'pre-line' }}>{data.rujukan}</p>
                            </IonList>
                        </IonContent>
                    </IonModal>

                </div>

            </IonAccordion>


        </>
    )
}

const NewQuestionModal = (props: any) => {
    const [connection, setConnection] = useState(false)
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [soalan, setSoalan] = useState('')

    const onSubmit = async (event: any) => {
        event.preventDefault();
        console.log("Soalan : ", soalan, "Type", props.title, "Time", Date.now())

        const newQuestion = {
            soalan: soalan,
            jawapan: '',
            rujukan: '',
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
        const logCurrentNetworkStatus = async () => {
            const status = await Network.getStatus();
            setConnection(status.connected)
        };

        logCurrentNetworkStatus();
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
                        <IonButton disabled={!connection || soalan == ""} expand="full" onClick={onSubmit} color="secondary" id={`open-modal-${props.title}`}>
                            <IonIcon icon={addCircle} slot="start" />
                            Hantar Soalan</IonButton>
                    </div>
                </div>
            </IonCardContent>
        </IonCard>
    )
}

const QuestionsPages = (props: any) => {
    const questionsData: [QuestionData] = props.data
    const [modalOpen, setModalOpen] = useState(false)
    const [additionalQuestions, setAdditionalQuestions] = useState<any>([])
    const [connection, setConnection] = useState(false)

    const logCurrentNetworkStatus = async () => {
        const status = await Network.getStatus();

        console.log('Network status:', status);
        setConnection(status.connected)
    };

    useEffect(() => {

        setAdditionalQuestions([])
        async function getQuestions() {
            const q = query(collection(db, "soalan"), where("kategori", "==", props.title))
            const querySnapshot = await getDocs(q);
            var data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            data = data.filter((doc:any)=> {return(doc.jawapan != '')})
            setAdditionalQuestions(data)
            
        }
        getQuestions()
        // console.log(ExternalData)

        logCurrentNetworkStatus();
    }, [props.title])





    return (
        <div>
            <Link to={'/'} className='link'> <h3> &#x2190; Kembali </h3> </Link>
            <h2>{props.title} </h2>
            <IonAccordionGroup expand="inset">
                {questionsData.map((data, index) => {
                    return (
                        <>
                            <QuestionAccordion key={index} index={index} data={data} />
                        </>
                    )
                })}
            </IonAccordionGroup>

            <h2>Soalan Tambahan</h2>
            {!connection &&
                <p style={{ color: 'red' }}>
                    Peringatan : Tiada sambungan internet
                </p>}


            <IonAccordionGroup expand="inset">
                {additionalQuestions.map((data: any, index: number) => {
                    return (
                        <>
                            <QuestionAccordion key={index} index={"additional-" + index} data={data} />
                        </>
                    )
                })}
            </IonAccordionGroup>

            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton onClick={(e) => { setModalOpen(true) }}>
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>

            <IonModal onDidDismiss={() => { setModalOpen(false) }} isOpen={modalOpen} initialBreakpoint={0.75} breakpoints={[0, 0.25, 0.5, 0.75]}>
                <IonContent className="ion-padding">
                    <h2>{props.title}</h2>
                    <NewQuestionModal title={props.title} setModalOpen={setModalOpen} />
                </IonContent>
            </IonModal>

        </div>
    );
}

export default QuestionsPages;