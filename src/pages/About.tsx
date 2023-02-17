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
                    <h3>e-Pamil adalah sebuah aplikasi yang dicipta menggunakan teknologi binaan laman web serta rangka kerja <i>(framework)</i> React dengan beberapa penggunaan bahasa pengaturcaraan seperti TypeScript, HTML, CSS dan JavaScript. Pada asasnya, aplikasi ini merupakan laman web yang biasa sahaja. Namun dengan bantuan Rangka Kerja Capacitor, laman web ini mampu disesuaikan dengan pelbagai platform seperti Android, iOS dan Aplikasi Web yang turut dikenali sebagai aplikasi merentas platform <i>(cross-platform application)</i>.</h3> 
                </IonCardContent>
            </IonCard>
        </>
    );
}

export default AboutUs;