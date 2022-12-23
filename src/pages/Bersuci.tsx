import {
    IonAccordion,
    IonAccordionGroup, IonButton, IonContent, IonIcon, IonItem,
    IonLabel, IonList, IonModal
} from '@ionic/react';
import { list } from 'ionicons/icons';

interface QuestionData {
    soalan: string,
    jawapan: string,
    rujukan: [],
}
const QuestionAccordion = (props: any) => {

    const data: QuestionData = props.data
    return (
        <>
            <IonAccordion value={props.index}>
                <IonItem slot="header" color="light">
                    <p style={{fontSize:'0.8rem', fontWeight:'bold'}}>{data.soalan}</p>
                </IonItem>
                <div className="ion-padding" slot="content" style={{ textJustify: 'auto', textAlign: 'justify' }}>
                    <p style={{ whiteSpace: 'pre-line',fontSize:'0.8rem' }}>{data.jawapan}</p>


                    <IonButton id={`open-modal-${props.index}`} expand="block">
                        <IonIcon slot="start" icon={list}></IonIcon>
                        Lihat Rujukan
                    </IonButton>
                    <IonModal trigger={`open-modal-${props.index}`} initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                        <IonContent className="ion-padding">
                            <IonList>
                                {data.rujukan.map((data: any) => {
                                    return (
                                        <p>{data.text}</p>
                                    )
                                })}
                                <IonItem>

                                </IonItem>
                            </IonList>
                        </IonContent>
                    </IonModal>

                </div>

            </IonAccordion>


        </>
    )
}

const bersuciData = [
    {
        soalan: 'Bagaimanakah hukum bersuci jika mengalami masalah air di atas kapal?',
        jawapan: 'Hukum asal bersuci mestilah menggunakan air mutlak iaitu air yang turun dari langit atau air yang memancar dari bumi. Oleh sebab itu seseorang yang berada di atas kapal perlu berusaha mencari air mutlak sama ada diperoleh daripada simpanan tangki air bersih kapal, air minuman mineral, air laut atau air tadahan hujan dan sebagainya. Namun sekiranya setelah segala usaha telah dilakukan untuk mendapatkan air mutlak gagal seperti air mutlak yang ada hanya mencukupi untuk keperluan asasi dan mengalami kesukaran untuk mendapatkan air laut maka dibolehkan untuk bertayamum dengan menggunakan debu yang suci.',
        rujukan: [{ text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 1. Jeddah: Maktabah al-Irsyad.' }]
    },
    {
        soalan: 'Bagaimanakah bersuci jika air terlalu sejuk/panas?',
        jawapan: 'Air terlalu panas (musyammas) atau terlalu sejuk (barid) termasuk dalam cakupan air mutlak. Kebanyakan fuqaha mazhab Syafi’i menghukumkan sebagai makruh menggunakan air musyammas untuk berwuduk dan mandi kerana boleh menyebabkan penyakit barash (kusta) berpandukan kepada hadith Nabi SAW. Namun begitu al-Nawawi berpandangan sebaliknya iaitu tidak makruh menggunakan air musyammas secara mutlak sama ada untuk berwuduk, mandi dan sebagainya. Oleh sebab itu, sekiranya tidak ada air selain air musyammas / barid, dibolehkan untuk seseorang itu menggunakannya untuk bersuci dengan syarat penggunaan air tersebut tidak mendatangkan mudarat kepadanya. Sekiranya penggunaan air tersebut mendatangkan mudarat maka krew kapal boleh bertayamum sebagai ganti kepada air tersebut.',
        rujukan: [{ text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 1. Jeddah: Maktabah al-Irsyad.' }]
    },
    {
        soalan: 'Bagaimanakah membersihkan kuali / peralatan yang telah digunakan untuk memasak makanan yang tidak halal di atas kapal?',
        jawapan: 'Peralatan memasak atau bekas makanan dan minuman yang dicemari dengan bahan yang tidak halal merupakan najis yang perlulah dibersihkan sehingga hilang zat dan kesannya. Namun begitu bagi masakan hidangan babi, para fuqaha berbeza pandangan di mana majoriti fuqaha memerintahkan supaya kenajisan babi ini dibersihkan seperti mana najis yang lain iaitu cukup sekadar dibersihkan sehingga hilang kesan babi tanpa perlu dibasuh sebanyak tujuh kali basuhan seperti mana kenajisan anjing. Pandangan ini merupakan pegangan mazhab Hanafi, Maliki,  pandangan qawl qadim Imam Shafi’i, Imam Nawawi dan satu riwayat daripada Imam Ahmad. Pandangan kedua pula mewajibkan membasuh apa sahaja kesan babi dengan air sebanyak tujuh kali dan salah satu daripadanya air yang bercampur dengan tanah. Ini merupakan pandangan dalam mazhab Shafi’i dan mazhab Hanbali kerana mereka mengiyaskan dengan anjing bahkan lebih najis dari anjing.  \n\nJusteru itu untuk menyucikan bekas tersebut menurut mazhab Shafi’i dan Hanbali perlu dilihat terlebih dahulu jenis najis. Sekiranya najis mutawassitah seperti arak, gelas tersebut perlu dibersihkan sehingga hilang kesan arak tersebut. Akan tetapi sekiranya najis tersebut mughallazah seperti daging babi maka perlu dibasuh sebanyak tujuh kali basuhan dan salah satu daripadanya air yang bercampur dengan tanah. Manakala kebanyakan ulama menyatakan memadai dibasuh sekali sahaja. Apa yang penting zat najis serta kesannya hilang walaupun dengan sekali basuhan. Sekiranya tidak hilang juga perlu diulangi basuhan tersebut sehingga hilang kesannya. Pandangan ini lebih memudahkan krew kapal yang beragama Islam dalam menangani permasalahan ini.',
        rujukan: [{ text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 1. Jeddah: Maktabah al-Irsyad.' }, 'Al-Sharbini (1997). Mughni al-Muhtaj. Beirut: Dar al-Ma’rifah.', { text: 'Al-Kasani, Abu Bakr bin Mas’ud bin Ahmad (1986). Bada’i’ al-Sana’i’ Fi Tartib al-Shara‘i’. Beirut: Dar al-Kutub al-‘Alamiyyah.' }]
    },
    {
        soalan: 'Adakah dibolehkan bertayamum sekiranya berlaku catuan air di atas kapal samada solat/hadas besar?',
        jawapan: 'Sekiranya berlaku catuan air di atas kapal dan air tersebut hanya mencukupi untuk makan dan minum krew kapal boleh bertayamum dengan menggunakan debu tanah bagi menggantikan penggunaan air. Namun begitu sebagai langkah persediaan awal, krew kapal digalakkan untuk membawa atau menyimpan bekalan air mineral untuk digunakan sebagai alat berwuduk sekiranya catuan air berlaku di atas kapal.',
        rujukan: [{ text: 'Al-Nawawi, Abu Zakaria Mahyuddin Yahya bin Sharf (1392). Al-Minhaj Sharh Sahih Muslim bin al-Hujjaj Beirut: Dar Ihya’ al-Turath al-‘Arab' }]
    }
]

const Bersuci = () => {

    return (
        <div>



            <h2>Bersuci </h2>
            <IonAccordionGroup expand="inset">
                {bersuciData.map((data, index) => {
                    return (
                        <>
                            <QuestionAccordion key={index} index={index} data={data} />
                        </>
                    )
                })}
            </IonAccordionGroup>

        </div>
    );
}

export default Bersuci;