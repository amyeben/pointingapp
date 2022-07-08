import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import styles from '../styles/Homepage.module.css'
import Link from 'next/link'
import {NavLink} from "../components";


import { userService } from 'services';
import {useRouter} from "next/router";
import axios from "axios";

export default Home;

function Home() {
    const [users, setUsers] = useState(null);
    const router = useRouter();
    const [user, setUser] = useState('');
    const [isButton, setButton] = useState(true);
    const [isButtonAd, setButtonAd] = useState(true);
    const [dataLoaded, setDataLoaded] = useState('');
    const [taBody, setTaBody] = useState('');
    const [adContent, setAdContent] = useState('')

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

            if (res.data.length > 5){
                for (let i = 0; i < 5; i++) {
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
                            <h3> GRAPHE EXEMPLE </h3>
                        </div>
                    </div>
                </div>
                <div className={styles.avertissements}>
                    <p>Avertissements</p>
                    <div className={styles.blue}>
                        <button className={isButtonAd ? styles.loadbutton : styles.hidden} onClick={loadDataAd}>CHARGER</button>
                        <p className={isButtonAd ? styles.hidden : styles.nothing}>{adContent}</p>
                    </div>
                </div>
            </div>
        </Layout>

        </>
    );
}
