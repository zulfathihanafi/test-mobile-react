import { IonButton, IonCard, IonCardContent, IonIcon, IonImg, IonInput, IonItem, IonLabel, useIonAlert, useIonLoading } from "@ionic/react";
import { useNavigate } from "react-router-dom";
import { logIn, logoGoogle } from 'ionicons/icons';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"
import google from "../images/GoogleLogo.png"
function Login() {
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  const provider = new GoogleAuthProvider();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.uid)
        if(user.email != "fathiimran8@gmail.com"){
          signOut(auth)
          alert({
            header: 'Harap Maaf',
            message: 'Akaun anda tidak sah.',
            buttons: [{ text: 'Ok' }]
        })
      }else{
        alert({
          header: 'Berjaya',
          message: 'Log masuk berjaya',
          buttons: [{ text: 'Ok' }]
      })
        navigate('/admin')
      }
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <IonCard>
        <div style={{ textAlign: 'center' }}>
          <h1>Sila Log Masuk</h1>
        </div>

        <IonCardContent>
            <div className="ion-margin-top">
              <IonButton expand="full" onClick={(e: any) => { onSubmit(e) }} color="secondary">
                
                <IonImg src={google} style={{height:'100%', paddingRight:'10px'}}></IonImg>
                {/* <IonIcon src={google} slot="start" /> */}
                Log Masuk dengan Google
                </IonButton>
            </div>
            <IonIcon>
              
            </IonIcon>
            
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default Login;