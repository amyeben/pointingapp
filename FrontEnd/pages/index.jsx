import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import styles from '../styles/Homepage.module.css'
import Link from 'next/link'
import {NavLink} from "../components";


import { userService } from 'services';
import {useRouter} from "next/router";
import axios from "axios";

export default Home;

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line, getDatasetAtEvent } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: false,
            text: 'Ce graphique représente le taux de précense des 4 précédents jours pointés.',
        },
    },
};

const labels = ['XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX'];


export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: ' Taux de présence en % ',
            data: [0, 0, 0, 0],
            borderColor: 'rgb( 83, 108, 121  )',
            backgroundColor: 'rgba(83, 108, 121 , 0.35)',
        },
    ],
};

function Home() {
    const [users, setUsers] = useState(null);
    const route = useRouter();
    const [user, setUser] = useState('');
    const [isButton, setButton] = useState(true);
    const [isButtonAd, setButtonAd] = useState(true);
    const [dataLoaded, setDataLoaded] = useState('');
    const [taBody, setTaBody] = useState('');
    const [adContent, setAdContent] = useState('');
    const [isButtonResum, setButtonResum] = useState(true)

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();

    }, []);

    function logout() {
        userService.logout();
    }

    if (!user) return null;

    var nameuser = user.name;

    var name = {
        "name" : nameuser
    }

    const loadDataArrival = (e) => {
        const handleSuccess = (res) => { // if success
            setButton(false);
            console.log(dataLoaded);
            console.log(res.data.length);
            var ligneHtml = "";
            var red = "red";

            if (res.data.length > 8){
                for (let i = 0; i < 8; i++) {
                    if (res.data[i][4]==0 || res.data[i][4]=='0' ){
                        red = "green"
                    }
                    else { red= "red"}
                    console.log(res.data[i])
                    ligneHtml += "<style> .red {color: red}  .green {color: green}</style><tr class="+red+"><td>"+res.data[i][0]+"</td><td>"+res.data[i][1]+"</td><td>"+res.data[i][2]+"</td></tr>"
                }
                console.log("ok");
                setTaBody(ligneHtml)
                console.log("ok")
            }

            else {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i][4]==0 || res.data[i][4]=='0' ){
                        red = "green"
                    }
                    else { red= "red"}
                    console.log(res.data[i])
                    ligneHtml += "<style> .red {color: red}  .green {color: green}</style><tr class="+red+"><td>"+res.data[i][0]+"</td><td>"+res.data[i][1]+"</td><td>"+res.data[i][2]+"</td></tr>"
                }
                console.log("ok");
                setTaBody(ligneHtml)
                console.log("ok")
            }



        }

        const handleFailure = (error) => {
            console.log("ERROR");
        }

        axios.post(`http://localhost:8000/get_all_myarrivals`, name)
            .then(handleSuccess)
            .catch(handleFailure)
    }

    const loadDataAd  = (e) => {
        setButtonAd(false);

        const handleSuccess = (res) => { // if success
                console.log(res.data)
                if (res.data == ""){setAdContent("Aucun Avertissement")}
                else {
                    setAdContent("Écrit le " + res.data['date_ad'] + " : " + res.data['message'])
                }}

        const handleFailure = (error) => {
            console.log("ERROR");
        }

        axios.post(`http://localhost:8000/get_advertissements`, name)
            .then(handleSuccess)
            .catch(handleFailure)

    }

    const loadData  = (e) => {

        setButtonResum(false)
        const handleSuccess = (res) => { // if success
            console.log(res.data);
            console.log(res.data.length);
            data.labels = res.data[0]
            console.log(data.datasets[0].data)
            data.datasets[0].data = res.data[1]
            route.push('/')
            setButtonAd(false)
            loadDataAd(e)
            console.log("Ok")

        }

        const handleFailure = (error) => {
            console.log("ERROR");
        }

        axios.post(`http://localhost:8000/get_chart_data_short`, name)
            .then(handleSuccess)
            .catch(handleFailure)



    }

    window.addEventListener("beforeunload", (ev) =>
    {
        ev.preventDefault();
        logout();
    });



    return (
        <>
        <Layout>
            <div className={styles.container}>
                <p className={styles.tabdebord}>Tableau de Bord</p>

                <div className={styles.pointeblue}>
                    <NavLink href={"/posts/pointingpage"}><button className={styles.indexButton}>Pointer mon arrivée</button></NavLink>
                    <NavLink href={"/posts/pointingpage"}><button className={styles.indexButton}>Pointer mon départ</button></NavLink>
                </div>
                <div className={styles.arrdep}>
                    <div className={styles.arr}>
                        <p>Mes Arrivées</p>
                        <div className={styles.arrcol}>
                            <button className={isButton ? styles.loadbutton : styles.hidden} onClick={loadDataArrival}>CHARGER</button>
                            <table className={isButton ? styles.hidden : styles.white}>
                                <thead className={styles.tbody}>
                                <tr>
                                    <th>Date</th>
                                    <th>Heure d'Arrivée</th>
                                    <th>Heure de Départ</th>
                                </tr>
                                </thead>
                                <tbody className={styles.tbody} dangerouslySetInnerHTML={{__html: taBody}}/>
                            </table>
                        </div>
                    </div>
                    <div className={styles.dep}>
                        <p>Mon Résumé</p>
                        <div className={styles.depcol}>
                            <Line options={options} data={data} width={50} height={150}/>
                        </div>
                        <div className={styles.btnresum}>
                            <button className={isButtonResum ? styles.loadbuttonR : styles.hidden} onClick={loadData}>CHARGER</button>
                        </div>
                    </div>
                </div>
                <div className={styles.avertissements}>
                    <p>Avertissements</p>
                    <div className={styles.blue}>
                        <button className={isButtonAd ? styles.loadbuttonA : styles.hidden} onClick={loadDataAd}>CHARGER</button>
                        <p className={isButtonAd ? styles.hidden : styles.nothing}>{adContent}</p>
                    </div>
                </div>
            </div>
        </Layout>

        </>
    );
}
