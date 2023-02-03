import React, { useEffect, useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonMenuToggle,
  IonButton,
  IonIcon,
  IonApp
} from '@ionic/react';
import { Outlet, Link } from "react-router-dom";
import { star, homeOutline, helpCircleOutline, logOut, person, logoGoogle } from 'ionicons/icons';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
const linkData = [
  { title: 'Dashboard', link: '/' },
  { title: 'Bersuci', link: 'bersuci' },
  { title: 'Solat', link: 'solat' },
  { title: 'Puasa', link: 'puasa' },
  { title: 'Zakat', link: 'zakat' },
  { title: 'Pemakanan', link: 'pemakanan' },
  { title: 'Penjagaan Aurat', link: 'aurat' }
]
const Item = (props: any) => {
  return (

    <IonMenuToggle onClick={() => { props.setTitle(props.title) }}>
      <Link to={props.link} className='link'>
        <IonItem button detail lines="full">
          <IonLabel>
            <h2>{props.title}</h2>
          </IonLabel>
        </IonItem>
      </Link>
    </IonMenuToggle>


  )
}

const ItemDashboard = (props: any) => {
  return (
    <div style={{ paddingBottom: '20px' }} >
      <IonMenuToggle>
        <Link to={props.link} className='link' >
          <IonButton expand="full">
            <IonIcon slot="start" icon={homeOutline}></IonIcon>
            Home
          </IonButton>
        </Link>
      </IonMenuToggle>
    </div>

  )
}

const Footer = (props: any) => {

  return (

    <>

      <div style={{ bottom: '0', padding: '10px 10px', position: 'absolute', width: '100%', borderTop: '1px solid #d9d9d9' }} >
        <IonMenuToggle>
          <Link to={'/admin'} className='link' >
            <IonButton expand="full">
              <IonIcon slot="start" icon={person}></IonIcon>
              Admin
            </IonButton>
          </Link>
        </IonMenuToggle>
        <IonMenuToggle>
          <Link to={'/about'} className='link' relative="path">
            <IonButton expand="full">
              <IonIcon slot="start" icon={helpCircleOutline}></IonIcon>
              Tentang Kami
            </IonButton>
          </Link>
        </IonMenuToggle>

      </div>
    </>

  )
}

const getCurrentUser = async () => {
  const result = await FirebaseAuthentication.getCurrentUser();
  console.log(result.user);
  return result.user;
};

function MenuBar() {
  const [test, setTest] = useState<any>(undefined)
  useEffect(() => {
    FirebaseAuthentication.addListener("authStateChange", (user) => {
      if (user.user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.user?.uid;
        const email = user.user?.email;
        console.log(uid, email)
        if (email != "fathiimran8@gmail.com") {
          FirebaseAuthentication.signOut() 
        }

        setTest(uid)
      } else {
        setTest(undefined)
      }
    })
    getCurrentUser().then((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email;
        console.log(uid, email)
        if (email != "fathiimran8@gmail.com") {
          FirebaseAuthentication.signOut() 
        }

        setTest(uid)
      } else {
        setTest(undefined)
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
    //       if (uid != "8lTMUiqdgQN8qBgpkUv3iOZR94z2") {
    //         signOut(auth)
    //       }

    //       setTest(uid)
    //     }else{
    //       setTest(undefined)
    //     }
    //   })
    // })

  }, [test])

  return (
    <IonApp>
      <IonMenu contentId="main-content" >
        <IonHeader>
          <IonToolbar color='primary' >
            <IonTitle>e-Pamil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" >
          {linkData.map((data, index) => (
            data.link === "/" ? <ItemDashboard key={index} link={data.link} title={data.title} /> : <Item key={index} link={data.link} title={data.title} />
          ))}
        </IonContent>
        <Footer test={test} setTest={setTest} />
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader >
          <IonToolbar color='primary'>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>e-Pamil</IonTitle>
            {test &&
              (
                <IonButtons slot="end">
                  <IonButton type='button' fill='solid' color={'danger'} onClick={(e) => { FirebaseAuthentication.signOut() }}>
                    <IonIcon icon={logOut} slot="start" />
                  </IonButton>
                </IonButtons>
              )}
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

          <Outlet />

        </IonContent>
      </IonPage>
    </IonApp>
  );
}
export default MenuBar;