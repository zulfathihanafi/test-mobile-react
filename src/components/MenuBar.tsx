import React from 'react';
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
import { star, homeOutline,helpCircleOutline } from 'ionicons/icons';

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

const TanyaDashboard = () => {
  return (
    <div style={{paddingTop:'100px'}} >
      <IonMenuToggle>
        <Link to={'/tanya'} className='link' >
          <IonButton expand="full">
            <IonIcon slot="start" icon={helpCircleOutline}></IonIcon>
            Tanya Soalan
          </IonButton>
        </Link>
      </IonMenuToggle>
    </div>

  )
}


function MenuBar() {
  

  return (
    <IonApp>
      <IonMenu contentId="main-content" >
        <IonHeader>
          <IonToolbar color='primary' > 
            <IonTitle>e-Pamil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" >
          {linkData.map((data) => (
            data.link === "/" ? <ItemDashboard link={data.link} title ={data.title}/> : <Item link={data.link} title={data.title} />
          ))}
          <TanyaDashboard />
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader >
          <IonToolbar color='primary'>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>e-Pamil</IonTitle>
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