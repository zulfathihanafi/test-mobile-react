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
  IonIcon
} from '@ionic/react';
import { Outlet, Link } from "react-router-dom";
import { star, homeOutline } from 'ionicons/icons';

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
      <IonMenuToggle onClick={() => { props.setTitle(props.title) }}>
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

function MenuBar() {
  const [title, setTitle] = React.useState('Dashboard')

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>e-Pamil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {linkData.map((data) => (
            data.link === "/" ? <ItemDashboard link={data.link} title ={data.title} setTitle={setTitle} /> : <Item link={data.link} title={data.title} setTitle={setTitle} />
          ))}
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
    </>
  );
}
export default MenuBar;