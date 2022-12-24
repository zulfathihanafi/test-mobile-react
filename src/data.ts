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
        rujukan: [{ text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 1. Jeddah: Maktabah al-Irsyad.' }, {text : 'Al-Sharbini (1997). Mughni al-Muhtaj. Beirut: Dar al-Ma’rifah.'}, { text: 'Al-Kasani, Abu Bakr bin Mas’ud bin Ahmad (1986). Bada’i’ al-Sana’i’ Fi Tartib al-Shara‘i’. Beirut: Dar al-Kutub al-‘Alamiyyah.' }]
    },
    {
        soalan: 'Bagaimanakah hukum solat ketika bertukar arah?',
        jawapan: 'Sekiranya berlaku catuan air di atas kapal dan air tersebut hanya mencukupi untuk makan dan minum krew kapal boleh bertayamum dengan menggunakan debu tanah bagi menggantikan penggunaan air. Namun begitu sebagai langkah persediaan awal, krew kapal digalakkan untuk membawa atau menyimpan bekalan air mineral untuk digunakan sebagai alat berwuduk sekiranya catuan air berlaku di atas kapal.',
        rujukan: [{ text: 'Al-Nawawi, Abu Zakaria Mahyuddin Yahya bin Sharf (1392). Al-Minhaj Sharh Sahih Muslim bin al-Hujjaj Beirut: Dar Ihya’ al-Turath al-‘Arab' }]
    }
]

const solatData = [
    {
        soalan: 'Bagaimanakah cara solat ketika ketika laut bergelora?',
        jawapan: 'Solat pada hukum asalnya mestilah dilakukan dalam keadaan berdiri seperti mana yang dinyatakan oleh al-Nawawi dalam al-Majmu’: \n\n \"Sekiranya melakukan solat fardu di atas kapal tidak harus baginya meninggalkan rukun berdiri seperti mana ketika berada di daratan. Ini juga pendapat yang dinyatakan Imam Malik dan Imam Ahmad. Pendapat Imam Abu Hanifah harus untuk tidak berdiri ketika kapal bergerak. Begitu juga pandangan Mazhab Syafi’i menyatakan sekiranya berlaku keuzuran seperti mabuk laut dan selainnya maka diharuskan untuk solat duduk ...\" \n\nOleh itu, bagi krew kapal yang tidak mampu untuk solat dalam keadaan berdiri, dibolehkan baginya untuk solat dalam keadaan duduk sekiranya keadaan laut sangat bergelora bagi mengelakkan kemudaratan sekiranya hilang keseimbangan badan ketika bersolat. Bukan itu sahaja, krew kapal juga dibolehkan untuk solat dalam keadaan baring sekiranya tidak mampu duduk disebabkan kapal dilanda ribut atau mabuk laut yang teruk.',
        rujukan: [{ text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 1. Jeddah: Maktabah al-Irsyad.' }]
    },
    {
        soalan: 'Bagaimanakah hukum solat ketika kesan minyak tidak hilang?',
        jawapan: 'Kewajipan untuk menyampaikan air ke seluruh anggota wuduk adalah wajib bagi mereka yang hendak menunaikan solat. Menurut al-Nawawi, sekiranya ada sesuatu pada sebahagian anggota wuduk yang menghalang air untuk sampai pada anggota yang wajib disuci, maka tidak sah taharahnya. Krew kapal perlu berusaha untuk menanggalkan atau menghilangkan terlebih dahulu apa-apa yang menghalangi air untuk sampai pada kulit anggota wuduk dengan sempurna. Namun begitu, bagi krew kapal terutamanya yang bertugas di bahagian enjin kapal yang sentiasa bergelumang dengan minyak enjin diberi kelonggaran kesan-kesan yang sedikit seperti minyak yang sedikit setelah berusaha dengan bersungguh-sungguh untuk menghilangkannya.',
        rujukan: [{ text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 1. Jeddah: Maktabah al-Irsyad.' }]
    },
    {
        soalan: 'Bolehkah dilakukan solat jama’ qasar ketika pelayaran jauh?',
        jawapan: 'PKrew kapal yang bertugas ketika pelayaran jauh dibolehkan untuk melaksanakan solat jama’ dan qasar dengan jarak perjalanan melebihi 83 km. Hal ini selaras dengan pandangan Ibn Hajar yang menjelaskan salah satu daripada syarat qasar ialah perjalanan sekurang-kurangnya 48 mil. Namun begitu sekiranya kapal tersebut berlabuh di sesuatu tempat melebihi tempoh musafir iaitu melebihi tiga hari maka krew kapal perlu mengerjakan solat secara tamam iaitu tidak boleh menjamakkan atau mengqasarkan solat.',
        rujukan: [{ text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 1. Jeddah: Maktabah al-Irsyad.' }, { text: 'Ibn Hajar al-Haytami (1983). Tuhfah al-Muhtaj fi Syarh al-Minhaj. Mesir: Maktabah al-Tijari al-Kubra.' }]
    },
    {
        soalan: 'Bagaimanakah hukum solat ketika bertukar arah?',
        jawapan: 'Antara syarat sah solat fardu walaupun ketika menaiki kenderaan atau kapal adalah menghadap ke kiblat. Sekiranya kedudukan kiblatnya berubah disebabkan oleh berubahnya arah kenderaan atau pergerakan kapal, dia hendaklah menghalakan semula ke arah kiblat yang betul jika dia mengetahuinya. Dalam mazhab al-Syafi‘i, terdapat empat cara untuk mengetahui arah kiblat mengikut susunan keutamaan, iaitu: \n\nPertama, ilmu pengetahuan sendiri yang meyakinkan, seperti orang yang celik melihat ‘ain Kaabah atau orang buta yang memegang Kaabah. \n\nKedua, perkhabaran seorang yang terpercaya dengan pengetahuannya. \n\nKetiga, ijtihad seperti menggunakan kompas dan seumpamanya. \n\nKeempat, orang yang bertaklid kepada ijtihad orang lain. \n\nNamun begitu, jika seseorang sedang solat di atas kapal, tiba-tiba arah kiblatnya berubah dan dia tidak mengetahui arah kiblat yang sebenar, dia boleh meneruskan solatnya dan solatnya dikira sah menurut hukum fiqh.',
        rujukan: [{ text: 'Al-Nawawi, Abu Zakaria Yahya bin Sharf (2005). Minhaj al-Talibin wa ‘Umdah al-Muftin. Juz 1. Jeddah: Dar al-Minhaj.' },{text : 'Al Dimyathi (1997). I’anah al Talibin ‘Ala Hil al-Alfaz Fah al-Mu’in. Cet. 1. Mesir: Dar al Fikr.'}]
    },
    {
        soalan: 'Bagaimanakah hukum solat ketika perlu bertugas sepanjang masa?',
        jawapan: 'Hukum menunaikan solat fardu adalah wajib bagi semua mukalaf. Syariat Islam telah menetapkan tempoh-tempoh tertentu bagi setiap lima waktu yang difardukan.\n\nJusteru, dalam apa jua keadaan termasuk seseorang yang bertugas dalam kapal dalam tempoh yang panjang, dia tetap diwajibkan menunaikan solat-solat fardu dalam tempoh waktu yang disyariatkan. Solat boleh dilaksanakan mengikut keadaan yang bersesuaian dengan keadaan tempat kerja tersebut asalkan memenuhi semua syarat sah dan rukun-rukun solat.\n\nNamun demikian, jika situasi pekerjaan tersebut betul-betul kritikal yang tidak memungkinkannya untuk solat dengan sempurna dalam waktu yang disyariatkan seperti anak kapal yang bertanggungjawab menjaga enjin tanpa wujud pengganti dan enjin tersebut pula mustahil untuk ditinggalkan tanpa pemantauan, dia boleh memilih untuk menjamakkan dua solat dalam satu waktu seperti solat Zuhur dan Asar pada waktu Zuhur atau Asar sebagai rukhsah.',
        rujukan: [{ text: 'Al-Qaradawi, Yusuf (2005). Fatawa al-Mu`asirah, Juz 2. Kaherah: Dar al-Qalam.' },{text : 'Al-Suyuti, Jalal al-Din ‘Abd al-Rahman (1983). Al-Ashbah wa Nazair. Beirut: Dar al-Kutub al-’Ilmiyyah.'}]
    },
    {
        soalan: 'Adakah gugur solat Jumaat sepanjang berada di atas kapal?',
        jawapan: 'Gugur atau tidak kewajipan solat Jumaat seseorang lelaki mukalaf adalah dengan melihat kepada dua keadaan:\n\nPertama, status seseorang individu itu sebagai musafir atau orang yang bermukim. Jika seseorang anak kapal itu dikira sebagai musafir dan pelayarannya bermula sebelum masuknya waktu Subuh hari Jumaat berkenaan, dia tidak diwajibkan untuk menunaikan solat Jumaat selama mana dia dikira sebagai musafir. \n\nKedua, melihat kepada beberapa syarat sah solat Jumaat itu didirikan: \n\ni-\tSolat Jumaat hendaklah didirikan di dalam kawasan binaan, sama ada di bandar atau di kariah yang mempunyai penduduk yang bermastautin tidak kurang daripada 40 orang lelaki yang cukup syarat-syarat wajib mendirikan Jumaat. \n\nii-\tBilangan Jemaah bagi solat Jumaat ialah tidak kurang daripada 40 orang lelaki yang memenuhi syarat wajib Jumaat (أهل الجمعة) iaitu lelaki, baligh dan bermastautin.\n\niii-\tSolat Jumaat hendaklah didirikan dalam waktu Zuhur.\n\niv-\tJangan didirikan lebih daripada satu solat Jumaat pada satu tempat selagi ia boleh dilakukan demikian. Malahan mereka wajib berhimpun pada satu tempat. Namun harus berbuat lebih daripada satu tempat jika tempat tersebut tidak dapat menampung bilangan jemaah yang ramai.\n\nJusteru, walaupun seseorang anak kapal itu dikira bermukim, namun keadaan di dalam kapal tidak memungkinkan berlakunya perhimpunan 40 ahli Jumaat (lelaki, baligh dan bermastautin), gugur kewajipan menunaikan solat Jumaat di atas kapal tersebut dan digantikan dengan solat Zuhur.\n\nBerbeza keadaan jika kapal itu berlabuh di mana-mana tempat yang berlakunya perhimpunan 40 ahli Jumaat (lelaki, baligh dan bermastautin), seseorang anak kapal yang bermukim wajib menunaikan solat Jumaat di tempat tersebut.  ',
        rujukan: [{ text: 'Mustafa al-Khin (1992), Fiqh al-Manhaji ‘Ala Mazhab al-Imam al-Syafi’i. Jil. 1, Cet. 2. Damsyik: Dar al-Qalam al-Fiqh al-Manhaji.' },{text : 'Ibn Qudamah Abu Muhammad ‘Abdullah bin Ahmad bin Muhammad (1997). Al-Mughni. Juz. 2. Riyad: Dar ‘Alim al-Kutub.'}]
    }
]

const puasaData = [
    {
        soalan: 'Adakah wajib berpuasa Ramadhan kepada krew kapal dan dianggap sebagai bermusafir?',
        jawapan: 'Hukum berpuasa pada bulan Ramadan adalah wajib bagi seorang mukalaf. Walau bagaimanapun, terdapat beberapa golongan yang diharuskan untuk menggantikan puasa pada hari yang lain selain bulan Ramadhan. Ini termasuklah mereka yang bermusafir, iaitu berada dalam perjalanan yang panjang melebihi dua marhalah (81 km). \n\nJusteru, selagi mana seorang kru kapal itu ditentukan sebagai seorang musafir, dia berhak untuk memilih sama ada untuk berpuasa pada siang hari bulan Ramadhan ataupun tidak berpuasa tetapi wajib menggantikannya pada hari yang lain selain Ramadhan. \n\nNamun begitu, mengikut mazhab al-Syafi‘i, meneruskan berpuasa adalah lebih digalakkan jika puasa tersebut tidak memudaratkan orang yang berpuasa tersebut.\n\nKuncinya, kru kapal perlu mengetahui status mereka sebagai seorang musafir atau bermukim untuk memilih kelonggaran yang diberikan kepada mereka.\n\nJika sebuah kapal melalui perjalanan yang melebihi dua marhalah dan kemudiannya berlabuh di suatu tempat melebihi tiga hari (kiraan tiga hari tidak termasuk hari berlabuh dan hari berlepas), maka kru kapal tersebut telah hilang status musafir dan dianggap telah bermukim apabila kapal itu mula berlabuh. \n\nJika sebuah kapal melalui perjalanan yang melebihi dua marhalah tetapi tidak singgah atau berlabuh lama di sesebuah tempat (baca: tidak melebihi tiga hari), maka kru kapal tersebut kekal statusnya sebagai musafir selagi mana kapal itu masih berlayar.\n\nJika sebuah kapal melalui perjalanan yang melebihi dua marhalah dan berlabuh di suatu tempat dengan niat meneruskan perjalanan jika urusan di situ selesai atau mengalami gangguan cuaca buruk untuk meneruskan perjalanan (baca: tidak pasti berapa hari berlabuh di situ), status kru kapal kekal sebagai musafir sehingga tempoh maksimum 18 hari. ',
        rujukan: [
            { text: 'Al-Tabari (1992). Jami’u al-Bayan fi Ta`wili al-Qur`an. Juz 2. Beirut: Dar al-Kitab.'},
            { text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 1. Jeddah: Maktabah al-Irsyad.'},
            { text: 'Al Dimyathi (1997). I’anah al Talibin ‘Ala Hil al-Alfaz Fah al-Mu’in. Cet. 1. Mesir: Dar al Fikr.'},
            { text: 'Al Haytami, Mustafa Muhammad (1983). Tuhfat al Muhtaj Fi Syarh al-Minhaj. Mesir: Maktabah al Tijari al Kubra.'},
            { text: 'Al-Muhali dan Al-Suyuthi (t.t.). Tafsir al-Jalalain. Cet. 1. Kaherah: Dar al Hadis.'}]
    },
    {
        soalan: 'Bagaimanakah penentuan masuk waktu tamat sahur dan berbuka ketika di atas kapal?',
        jawapan: 'Syariat Islam menjadikan waktu terbitnya fajar atau masuknya waktu Subuh sebagai permulaan bagi seseorang untuk berpuasa sama ada puasa wajib ataupun sunat. Manakala waktu berbuka adalah ketika tenggelamnya matahari atau masuknya waktu Maghrib sebagai tamatnya tempoh berpuasa pada hari tersebut.\n\nJusteru, seseorang yang berpuasa di atas kapal pelayaran perlulah mengetahui bilakah masuknya waktu Subuh dan juga waktu Maghrib pada waktu kapal mereka berada. Dalam kata lain, ia mengikut waktu tempatan tempat yang sedang mereka lalui atau berlabuh.',
        rujukan: [{ text: 'Al-Sharbini, Shams al-Din Muhammad bin Muhammad (1994). Mughni al-Muhtaj Ila Ma‘rifah Ma‘ani Alfaz al-Minhaj. Juz 1. Beirut: Dar al-Kutub al-‘Ilmiyyah.' },
        { text: 'Zaki, N. A., & Zainuddin, M. Z. (2012). Ilmu Al-Mīqāt Pentakrifan, Sejarah dan Kepentingannya. Jurnal Usuluddin, 36, 75-108.' }]
    },
    {
        soalan: 'Adakah waktu bersahur dan berbuka terikat kepada zon semasa atau negara yang terhampir?',
        jawapan: 'Waktu bersahur dan berbuka adalah berdasarkan waktu semasa seseorang mukalaf itu berada. Jika seorang anak kapal berada di Johor Bahru ketika bersahur, kemudian dia melakukan perjalanan dan tiba di Phuket ketika masuknya waktu Maghrib, dia hendaklah berbuka puasa mengikut waktu di Phuket.',
        rujukan: [{ text: 'Al-Nawawi, Abi Zakaria Mahy al-Din bin Syarf (t.t.). Al-Majmu’ Syarh al-Muhadhab li al-Syirazi. Juz. 6. Jeddah: Maktabah al-Irsyad.' }]
    }
]

const zakatData = [
    {
        soalan: 'Adakah pembayaran zakat fitrah perlu dibayar di negara berlabuh atau di negara asal?',
        jawapan: 'Pembayaran zakat fitrah boleh dilakukan mengikut negara masing-masing secara online jika anak kapal sampai di pelabuhan atau diwakilkan kepada pihak kedua jika berlaku masalah capaian Internet.',
        rujukan: [{ text: `Pejabat Mufti Wilayah Persekutuan Online (2021). Hukum Bayar Zakat Fitrah Secara Online. Pejabat Mufti Wilayah Persekutuan Online. \n\n https://muftiwp.gov.my/artikel/al-kafi-li-al-fatawi/4803-al-kafi-1793-hukum-bayar-zakat-fitrah-secara-online. [12 Dec 2022].` }]
    }
]
const pemakananData = [
    {
        soalan: 'Apakah hukum menggunakan peralatan memasak yang sama dengan masakan orang bukan Islam?',
        jawapan: 'Hukum menggunakan peralatan memasak yang sama dengan masakan orang bukan Islam perlulah mengenal pasti apa yang dimasak oleh pengguna bukan Islam terlebih dahulu, jika tiada unsur-unsur yang haram, maka boleh digunakan seperti biasa. Ada pun sebaliknya, maka peralatan tersebut perlu disertu jika melibatkan daging babi. Manakala jika melibatkan arak, perlulah dibasuh seperti biasa. \n\nAda pun jika terdapat pilihan menggunakan peralatan memasak yang tidak tercemar dengan najis mughallazah, maka menggunakan bekas yang tercemar dengan najis adalah makruh walaupun peralatan tersebut telah disertu.',
        rujukan: [
            { text: 'Abu Dawud, al Imam Abu Dawud Sulaiman bin al-Ash’ath al-Sajastani (1994). Sunan Abi Dawud. Jil. 1-2. Beirut: Darul Fikir.'},
            { text: 'AAl Bukhari, al-Imam Abi Abdillah Muhammad bin Ismail bin Ibrahim ibn al-Mughirah bin Bardazbah al-Ja’fi (1994). Sahih al-Bukhari. (Tahqiq: Shaikh Abd al-Aziz Abdullah) Jil. 1-5. Beirut: Dar al-Fikr. '},
            { text: 'Al Bukhari, al-Imam Abi Abdillah Muhammad bin Ismail bin Ibrahim ibn al-Mughirah bin Bardazbah al-Ja’fi (1987). Sahih al-Bukhari. (Tahqiq: Dr Mustafa Dibu al-Bugha). Al-Yamamah:  Dar Ibn Kathir. Mustafa al-Khin, Mustafa al-Bugha, Ali Syarbaji. (1992) Cetakan Keempat. Al-Fiqh al-Manhaji. jil. 1. hlm. 42.Darul Qalam. Damsyik. '},
            { text: 'Pejabat Mufti Wilayah Persekutuan Online (2017). Hukum Menggunakan Bekas Makanan Yang Pernah Diletakkan Daging Khinzir. Pejabat Mufti Wilayah Persekutuan Online. \n\nhttps://muftiwp.gov.my/artikel/irsyad-fatwa/irsyad-fatwa-umum/890-irsyad-al-fatwa-siri-ke-191-hukum-menggunakan-bekas-makanan-yang-pernah-diletakkan-daging-khinzir. [12 Dec 2022].'},
            { text: 'Al-Nawawi (1972). Al-Minhaj Fi Syarah Sahih Muslim Bin Al Hajjaj Al-Nawawi. Jilid 13, Hal 80. Darul Ehya’ Thurath al-Arabi. Beirut Lubnan.'},
        ]
    },
    {
        soalan: 'Apakah hukum makanan yang dimasak oleh orang bukan Islam?',
        jawapan: 'Hukum makanan yang dimasak oleh orang bukan Islam adalah harus selama mana diyakini tidak berlaku pengkhianatan oleh tukang masak seperti memasukkan bahan-bahan yang diharamkan syarak.',
        rujukan: [
            { text: 'Pejabat Mufti Wilayah Persekutuan Online (2017). Hukum Memakan Makanan Yang Dimasak Oleh Non-Muslim (Bukan Ahli Kitab). Pejabat Mufti Wilayah Persekutuan Online. \n\nhttps://muftiwp.gov.my/artikel/al-kafi-li-al-fatawi/961-al-kafi-564-hukum-memakan-makanan-yang-dimasak-oleh-non-muslim-bukan-ahli-kitab. [12 Dec 2022].'}
            
        ]
    },
    {
        soalan: 'Apakah hukum makan makanan yang tidak dimasak seperti makan makanan yang mentah?',
        jawapan: 'Hukum makan makanan yang tidak dimasak seperti makan makanan yang mentah adalah harus hukumnya selama mana diyakini tidak membawa kemudaratan tubuh badan dan akal.',
        rujukan: [
            { text: 'Pejabat Mufti Wilayah Persekutuan Online (2021). Hukum Memakan Sushi Dan Sashimi. Pejabat Mufti Wilayah Persekutuan Online. \n\nhttps://muftiwp.gov.my/artikel/irsyad-fatwa/irsyad-fatwa-umum/5075-irsyad-al-fatwa-siri-ke-654-hukum-memakan-sushi-dan-sashimi. [12 Dec 2022].'},
            { text: 'Al-Imam al-Nawawi (1996). Fatawa al-Imam al-Nawawi. Tahqiq: Muhammad al-Hajjar, (Beirut: Dar al-Basyair al-Islamiyyah, cetakan ke-6, 1417H), 1/104.'}
        ]
    },
    {
        soalan: 'Bagaimanakah hukum memakan masakan yang tidak diketahui telah menggunakan kuali yang sama memasak makanan yang haram?',
        jawapan: 'Harus makan makanan yang tidak diketahui telah menggunakan kuali yang sama memasak makanan yang haram selama mana diyakini tidak membawa kemudaratan tubuh badan dan akal.',
        rujukan: [
            { text: 'Al-Imam al-Nawawi (1996). Fatawa al-Imam al-Nawawi. Tahqiq: Muhammad al-Hajjar, (Beirut: Dar al-Basyair al-Islamiyyah, cetakan ke-6, 1417H), 1/104.'}
        ]
    },
    {
        soalan: 'Bagaimanakah hukum memakan makanan yang tidak diketahui sebenarnya tidak halal?',
        jawapan: 'Jika makanan tersebut sudah dimakan, maka tiada keperluan untuk menyelidiki status kehalalan makanan tersebut. Manakala jika belum dimakan dan terdapat keraguan yang kuat, maka meninggalkannya adalah lebih utama.',
        rujukan: [
            { text: 'Al-Thabari (2009). Jami’ Al Bayan ‘an Ta’wil Ayi Al Quran. (Tahqiq: Ahmad Abdurraziq Al Bakri, Muhammad Adil Muhammad, Muhammad Abdul Latif Khalaf dan Mahmud Mursi Abdul Hamid). (Trj. oleh Anshari Taslim, Muhyiddin Mas Rida, Muhammad Rana, Mengala, Athaillah Manshur dengan tajuk: Tafsir Ath-Thabari Jilid 1). Jakarta: Pustaka Azzam.'},
            { text: 'Al-Qurthubi (2008). Al-Jami’ li Ahkam al-Quran. (Tahqiq: Muhammad Ibrahim al- Hifnawi dan Mahmud Hamid Utsman). (Trj. oleh Muhyiddin Mas Rida dengan tajuk: Tafsir al-Qurthubi Jilid 3). Jakarta: Pustaka Azzam.'},
            { text: 'Mahyuddin Yahya Syaraf al-Nawawi (2010) al-Majmuk Syarah al-Muhazzab. Jilid 8 m/s 450. Darul Fikir. Damsyik.'},
            { text: 'Al Bukhari, al-Imam Abi Abdillah Muhammad bin Ismail bin Ibrahim ibn al-Mughirah bin Bardazbah al-Ja’fi (1994). Sahih al-Bukhari. (Tahqiq: Shaikh Abd al-Aziz Abdullah) Jil. 1-5. Beirut: Dar al-Fikr. '},
            {text : 'Al Bukhari, al-Imam Abi Abdillah Muhammad bin Ismail bin Ibrahim ibn al-Mughirah bin Bardazbah al-Ja’fi (1987). Sahih al-Bukhari. (Tahqiq: Dr Mustafa Dibu al-Bugha). Al-Yamamah:  Dar Ibn Kathir. '}
        ]
    },
    {
        soalan: 'Adakah hukum darurat boleh diguna pakai jika kapal terputus bekalan dan lautan bergelora?',
        jawapan: 'Ya, hukum darurat boleh dipakai tetapi dengan syarat tidak mengambil mudah dalam mengambil rukhsah darurat dan perlu diklasifikasikan tahap darurat tersebut mengikut tahap kesukaran yang dihadapi dan berhenti menggunakan hukum darurat setelah hilang alasan yang mengharuskannya.',
        rujukan: [
            { text: 'Muhammad Siddqi Ahmad al-Burno (1996). Al-Wajiz Fi Idoh Qawa’id al-Fiqh al-Kulliyah. Muassasah Risalah. Beirut Lubnan. '},
            { text: 'Muhammad Hussin al-Jizani (2007). Haqiqat al-Dharurah al-Syar’iah. Maktabah Darul Minhaj. Riyadh.'}
        ]
    },
    {
        soalan: 'Adakah perlu krew Muslim perlu memastikan tahap kesucian penyediaan makanan?',
        jawapan: 'Adalah menjadi kewajipan ke atas krew muslim memastikan tahap kesucian dan kehalalan dalam penyediaan makanan yang disediakan kepada petugas-petugas yang beragama Islam kerana ianya termasuk dalam fardu kifayah.',
        rujukan: [
            { text: 'Al-Thabari (2009). Jami’ Al Bayan ‘an Ta’wil Ayi Al Quran. (Tahqiq: Ahmad Abdurraziq Al Bakri, Muhammad Adil Muhammad, Muhammad Abdul Latif Khalaf dan Mahmud Mursi Abdul Hamid). (Trj. oleh Anshari Taslim, Muhyiddin Mas Rida, Muhammad Rana, Mengala, Athaillah Manshur dengan tajuk: Tafsir Ath-Thabari Jilid 8). Jakarta: Pustaka Azzam.'},
            { text: 'Al-Qurthubi (2008). Al-Jami’ li Ahkam al-Quran. (Tahqiq: Muhammad Ibrahim al- Hifnawi dan Mahmud Hamid Utsman). (Trj. oleh Muhyiddin Mas Rida dengan tajuk: Tafsir al-Qurthubi Jilid 6). Jakarta: Pustaka Azzam.'},
            {text : 'Yusuf al-Qaradhawi (2012). Al Halal wal Haram Fil Islam. Maktabah Wahbah. Kaherah'}
        ]
    }
]
export {bersuciData,solatData,puasaData,zakatData,pemakananData}