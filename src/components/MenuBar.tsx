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
  IonMenuToggle
} from '@ionic/react';
import { Outlet, Link } from "react-router-dom";

const linkData = [
  { title: 'Bersuci', link: 'bersuci' },
  { title: 'Solat', link: 'solat' },
  { title: 'Puasa', link: 'puasa' },
  { title: 'Zakat', link: 'zakat' },
  { title: 'Pemakanan', link: 'pemakanan' },
  { title: 'Penjagaan Aurat', link: 'aurat' }
]
const Item = (props: any) => {
  return (
    <IonMenuToggle>
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
function MenuBar() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ibadah</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {linkData.map((data) => (
            <Item link={data.link} title={data.title} />
          ))}
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
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