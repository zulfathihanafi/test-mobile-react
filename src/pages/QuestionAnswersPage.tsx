import {
    IonAccordion,
    IonAccordionGroup, IonButton, IonContent, IonIcon, IonItem,
    IonLabel, IonList, IonModal
} from '@ionic/react';
import { list } from 'ionicons/icons';

interface QuestionData {
    soalan: string,
    jawapan: string,
    rujukan: [],
}

const QuestionAccordion = (props: any) => {

    const data: QuestionData = props.data
    return (
        <>
            <IonAccordion value={props.index}>
                <IonItem slot="header" color="light">
                    <p style={{fontSize:'0.8rem', fontWeight:'bold'}}>{data.soalan}</p>
                </IonItem>
                <div className="ion-padding" slot="content" style={{ textJustify: 'auto', textAlign: 'justify' }}>
                    <p style={{ whiteSpace: 'pre-line',fontSize:'0.8rem' }}>{data.jawapan}</p>


                    <IonButton id={`open-modal-${props.index}`} expand="block">
                        <IonIcon slot="start" icon={list}></IonIcon>
                        Lihat Rujukan
                    </IonButton>
                    <IonModal trigger={`open-modal-${props.index}`} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                        <IonContent className="ion-padding">
                            <IonList>
                                {data.rujukan.map((data: any) => {
                                    return (
                                        <p style={{whiteSpace: 'pre-line'}}>{data.text}</p>
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


const QuestionsPages = (props:any) => {
    const questionsData:[QuestionData] = props.data
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

        </div>
    );
}

export default QuestionsPages;