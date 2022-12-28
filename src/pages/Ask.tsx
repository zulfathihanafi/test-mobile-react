import { IonButton, IonCard, IonCardContent, IonIcon, IonInput, IonItem, IonLabel, useIonAlert, useIonLoading, IonTextarea} from "@ionic/react";
import { useNavigate } from "react-router-dom";
import { addCircle,add } from 'ionicons/icons';
import { useState } from "react";

function Ask() {
    const navigate = useNavigate();
    const [alert] = useIonAlert();
    const [present, dismiss] = useIonLoading();
    const [soalan, setSoalan] = useState('')
    const onSubmit = async (event: any) => {
        event.preventDefault();
        console.log("Soalan : ",soalan)
        
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
                navigate("/app/dashboard");
            }
        }, 1500)
    };
    
    return (
        <>
        <h2>Tanya Soalan</h2>
            <IonCard>
                <IonCardContent>
                    <form onSubmit={onSubmit}>
                        <IonLabel>Borang Soalan</IonLabel>
                        <IonTextarea
                            
                            autoGrow={true}
                            style={{ fontSize: '0.8rem'}}
                            placeholder="Tanya soalan disini ..."
                            onIonChange={(e)=>{setSoalan(e.target.value || '')}}
                            value={soalan}
                            rows={10}
                            ></IonTextarea>

                        <div className="ion-margin-top">
                            <IonButton expand="full" type="submit" color="secondary">
                                <IonIcon icon={addCircle} slot="start" />
                                Hantar Soalan</IonButton>
                        </div>
                    </form>
                </IonCardContent>
            </IonCard>
        </>
    );
}

export default Ask;