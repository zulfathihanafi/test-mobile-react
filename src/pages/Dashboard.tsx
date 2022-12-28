import { useNavigate, Link } from "react-router-dom";
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';

import solat from "../images/solat.jpg"
import makanan from "../images/makanan.jpg"
import puasa from "../images/puasa.jpg"
import wuduk from "../images/wuduk.jpg"
import zakat from "../images/zakat.jpg"

// import './main.css';

const ContentCard = (props: any) => {
  return (
    <>
      {props.link !== "/" &&
        <IonCard>
          <Link to={props.link} className='link' >
            <img alt={props.title} src={props.image} style={{maxHeight:'100%',maxWidth:'100%'}}/>
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
    { title: 'Bersuci', link: 'bersuci', image : wuduk },
    { title: 'Solat', link: 'solat' ,image : solat},
    { title: 'Puasa', link: 'puasa' ,image : puasa},
    { title: 'Zakat', link: 'zakat' ,image : zakat},
    { title: 'Pemakanan', link: 'pemakanan',image : makanan },
    { title: 'Penjagaan Aurat', link: 'aurat',image : wuduk }
  ]
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/');
  };

  return (
    <>
      <h2>Pilih bab yang diinginkan</h2>
      <IonGrid>
        <IonRow >
          {linkData.map((data) => {
            return (

              <IonCol size-xs="12" size-md="4" size-lg="4">
                <ContentCard title={data.title} link={data.link} image ={data.image} />
              </IonCol>


            )
          })}
        </IonRow>
      </IonGrid>

    </>
  );
}

export default Dashboard;