import { IonButton, IonCard, IonCardContent, IonIcon, IonImg, IonInput, IonItem, IonLabel, useIonAlert, useIonLoading } from "@ionic/react";
import { useNavigate } from "react-router-dom";
import { logIn, logoGoogle } from 'ionicons/icons';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebase"
import google from "../images/GoogleLogo.png"
import { useEffect, useState } from "react";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";

const getCurrentUser = async () => {
  const result = await FirebaseAuthentication.getCurrentUser();
  return result.user;
};
function Login() {
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<any>()
  // GoogleAuth.initialize();
  
  useEffect(()=>{
    FirebaseAuthentication.addListener('authStateChange',(user)=>{
      console.log(user)
      if (user.user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.user?.uid;
        const email = user.user?.email;
        console.log(uid, email)
        if(uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2"){
          FirebaseAuthentication.signOut() 
        }
       

    } else {
        // User is signed out
        // ...
        navigate('/login')
    }
    })
    // onAuthStateChanged(auth,(user)=>{
    //   getCurrentUser().then((user)=>{
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       const uid = user.uid;
    //       const email = user.email;
    //       console.log(uid, email)
    //       if(uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2"){
    //           signOut(auth)
    //       }
         
  
    //   } else {
    //       // User is signed out
    //       // ...
    //       navigate('/login')
    //   }
    //   })
    // })
  },[])
  
  const onSubmit = async (event: any) => {

    event.preventDefault();
    await FirebaseAuthentication.signInWithGoogle().then((user) => {

      if (user.user?.uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2") {
        FirebaseAuthentication.signOut() 
        alert({
          header: 'Harap Maaf',
          message: 'Akaun anda tidak sah.',
          buttons: [{ text: 'Ok' }]
        })
      }
      else {
        alert({
          header: 'Berjaya',
          message: 'Log masuk berjaya',
          buttons: [{ text: 'Ok' }]
        })
        navigate('/admin')
      }
    })

    // await GoogleAuth.signIn().then((user) => {
    //   console.log('user', user)

    //   setUser(user)
    //   const credential = GoogleAuthProvider.credential(user.authentication.idToken)
    //   signInWithCredential(auth, credential).then((userCredentials) => {
    //     if (userCredentials.user.uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2") {
    //       signOut(auth)
    //       alert({
    //         header: 'Harap Maaf',
    //         message: 'Akaun anda tidak sah.',
    //         buttons: [{ text: 'Ok' }]
    //       })
    //     }
    //     else {
    //       alert({
    //         header: 'Berjaya',
    //         message: 'Log masuk berjaya',
    //         buttons: [{ text: 'Ok' }]
    //       })
    //       navigate('/admin')
    //     }
    //   })
    // })

    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential?.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     console.log(user.uid)
    //     if(user.uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2"){
    //       signOut(auth)
    //       alert({
    //         header: 'Harap Maaf',
    //         message: 'Akaun anda tidak sah.',
    //         buttons: [{ text: 'Ok' }]
    //     })
    //   }else{
    //     alert({
    //       header: 'Berjaya',
    //       message: 'Log masuk berjaya',
    //       buttons: [{ text: 'Ok' }]
    //   })
    //     navigate('/admin')
    //   }
    //     // ...
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
  };

  return (
    <>
      <IonCard>
        <div style={{ textAlign: 'center' }}>
          <h1>Sila Log Masuk</h1>
        </div>
        {user && <div>
          {user.uid}
        </div>}
        <IonCardContent>
          <div className="ion-margin-top">
            <IonButton expand="full" onClick={(e: any) => { onSubmit(e) }} color="secondary">

              <IonImg src={google} style={{ height: '100%', paddingRight: '10px' }}></IonImg>
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