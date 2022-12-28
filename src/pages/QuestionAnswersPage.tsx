import {
    IonAccordion,
    IonAccordionGroup, IonButton, IonContent, IonIcon, IonItem,
    IonLabel, IonList, IonModal, IonFab, IonFabButton, IonCard, IonCardContent, IonTextarea,
    useIonAlert, useIonLoading, IonApp
} from '@ionic/react';
import { list, add, addCircle } from 'ionicons/icons';
import { useState } from 'react';

interface QuestionData {
    soalan: string,
    jawapan: string,
    rujukan: [],
}

interface QuestionProps {
    key?: number,

}
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
                        {showMore ? data.jawapan : `${data.jawapan.substring(0, 300)}`}
                        <button className="btn" onClick={() => setShowMore(!showMore)} style={{ backgroundColor: 'inherit', color: '#4691fa', whiteSpace: 'pre-line' }}>
                            {showMore ? "\tshow less" : "\t...show more"}
                        </button>
                    </p>


                    <IonButton id={`open-modal-${props.index}`} expand="block">
                        <IonIcon slot="start" icon={list}></IonIcon>
                        Lihat Rujukan
                    </IonButton>
                    <IonModal trigger={`open-modal-${props.index}`} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                        <IonContent className="ion-padding">
                            <IonList>
                                {data.rujukan.map((data: any) => {
                                    return (
                                        <p style={{ whiteSpace: 'pre-line' }}>{data.text}</p>
                                    )
                                })}
                                <IonItem>

                                </IonItem>
                            </IonList>
                        </IonContent>
                    </IonModal>

                </div>

            </IonAccordion>


        </>
    )
}

const NewQuestionModal = (props: any) => {
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [soalan, setSoalan] = useState('')
    const onSubmit = async (event: any) => {
        event.preventDefault();
        console.log("Soalan : ", soalan ,"Type",props.title)

        await present({ message: 'Loading...' })

        setTimeout(() => {
            dismiss();
            if (Math.random() < 0.5) {
                alert({
                    header: 'Invalid credentials',
                    message: 'There is no user with that name and password.',
                    buttons: [{ text: 'Ok' }]
                })
                setSoalan('')
            } else {

            }
        }, 1500)
    };

    return (
        <IonCard>
            <IonCardContent>

                <div>
                    <IonLabel>Borang Soalan</IonLabel>
                    <IonTextarea

                        autoGrow={true}
                        style={{ fontSize: '0.8rem' }}
                        placeholder="Tanya soalan disini ..."
                        onIonChange={(e) => { setSoalan(e.target.value || '') }}
                        value={soalan}
                        rows={10}
                    ></IonTextarea>

                    <div className="ion-margin-top">
                        <IonButton expand="full" onClick={onSubmit} color="secondary">
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
    return (
        <div>



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
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton id={`open-modal-${props.title}`}>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>
            
                <IonModal trigger={`open-modal-${props.title}`} initialBreakpoint={0.75} breakpoints={[0, 0.25, 0.5, 0.75]}>
                    <IonContent className="ion-padding">
                        <h2>{props.title}</h2>
                        <NewQuestionModal title={props.title} />
                    </IonContent>
                </IonModal>
            
        </div>
    );
}

export default QuestionsPages;