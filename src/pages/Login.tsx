import { IonButton, IonCard, IonCardContent, IonIcon, IonImg, IonInput, IonItem, IonLabel, useIonAlert, useIonLoading } from "@ionic/react";
import { useNavigate } from "react-router-dom";
import { logIn, logoGoogle } from 'ionicons/icons';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword } from "firebase/auth";
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // FirebaseAuthentication.addListener('authStateChange', (user) => {
    //   console.log(user)
    //   if (user.user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.user?.uid;
    //     const email = user.user?.email;
    //     console.log(uid, email)
    //     if (email != "fathiimran8@gmail.com") {
    //       FirebaseAuthentication.signOut()
    //     }


    //   } else {
    //     // User is signed out
    //     // ...
    //     navigate('/login')
    //   }
    // })
    onAuthStateChanged(auth,(user)=>{
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email;
        console.log(uid, email)
       


    } else {
        // User is signed out
        // ...
        navigate('/login')
    }
    })
  }, [])

  const onSubmit = async (event: any) => {

    event.preventDefault();

    await present({ message: 'Loading...' })
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dismiss();
        alert({
          header: 'Berjaya',
          message: 'Log masuk berjaya',
          buttons: [{ text: 'Ok' }]
        })
        navigate('/admin')
        // sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dismiss()
        alert({
          header: 'Harap Maaf',
          message: 'Akaun anda tidak sah.',
          buttons: [{ text: 'Ok' }]
        })
      });

    // await FirebaseAuthentication.signInWithGoogle().then((user) => {

    //   if (user.user?.email != "fathiimran8@gmail.com") {
    //     FirebaseAuthentication.signOut()
    //     alert({
    //       header: 'Harap Maaf',
    //       message: 'Akaun anda tidak sah.',
    //       buttons: [{ text: 'Ok' }]
    //     })
    //   }
    //   else {
    //     alert({
    //       header: 'Berjaya',
    //       message: 'Log masuk berjaya',
    //       buttons: [{ text: 'Ok' }]
    //     })
    //     navigate('/admin')
    //   }
    // })

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
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                onIonChange={(e) => { setEmail(String(e.target.value)) }}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password"
                onIonChange={(e) => { setPassword(String(e.target.value)) }}></IonInput>
            </IonItem>
            <IonButton expand="full" onClick={(e: any) => { onSubmit(e) }} color="secondary">

              {/* <IonImg src={google} style={{ height: '100%', paddingRight: '10px' }}></IonImg> */}
              {/* <IonIcon src={google} slot="start" /> */}
              Log Masuk
              {/* dengan Google */}
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