import { IonButton, IonCard, IonCardContent, IonIcon, IonInput, IonItem, IonLabel, useIonAlert, useIonLoading, IonTextarea} from "@ionic/react";
import { useNavigate } from "react-router-dom";
import { addCircle,add } from 'ionicons/icons';
import { useState, useEffect } from "react";
import {Network} from "@capacitor/network"

function AboutUs() {

    const [connection, setConnection] = useState(false)
    useEffect(() => {
        const logCurrentNetworkStatus = async () => {
            const status = await Network.getStatus();
          
            console.log('Network status:', status);
            setConnection(status.connected)
          };
    
        logCurrentNetworkStatus();
    },[])
    
    return (
        <>
        <h2>Tentang Kami</h2>
            <IonCard>
                <IonCardContent>
                    <h3>e-Pamil adalah sebuah aplikasi suka suki</h3>
                    {'Current status '+connection}
                </IonCardContent>
            </IonCard>
        </>
    );
}

export default AboutUs;