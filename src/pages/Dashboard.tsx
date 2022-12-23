import { useNavigate,Link } from "react-router-dom";
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
// import './main.css';

const ContentCard = (props: any) => {
  return (
    <>
      {props.link !== "/" &&
        <IonCard>
          <Link to={props.link} className='link' >
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" height={'150px'} width="100%" />
            <IonCardHeader>
              <IonCardTitle>{props.title}</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
          </Link>
        </IonCard>
      }

    </>
  )
}

function Dashboard() {
  const linkData = [
    { title: 'Dashboard', link: '/' },
    { title: 'Bersuci', link: 'bersuci' },
    { title: 'Solat', link: 'solat' },
    { title: 'Puasa', link: 'puasa' },
    { title: 'Zakat', link: 'zakat' },
    { title: 'Pemakanan', link: 'pemakanan' },
    { title: 'Penjagaan Aurat', link: 'aurat' }
  ]
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/');
  };

  return (
    <>
      <h2>Pilih bab yang diinginkan</h2>
      <IonGrid>
        <IonRow>
          {linkData.map((data) => {
            return (
              <IonCol size-xs="12" size-md="4" size-lg="2">
                <ContentCard title={data.title} link={data.link} />
              </IonCol>
            )
          })}
        </IonRow>
      </IonGrid>

    </>
  );
}

export default Dashboard;