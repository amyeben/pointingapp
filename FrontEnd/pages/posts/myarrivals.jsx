import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Myarrivals.module.css'
import Head from 'next/head'
import {userService} from "../../services";
import {useEffect, useState} from "react";
import axios from "axios";
import { BsChatDotsFill } from '@react-icons/all-files/bs/BsChatDotsFill';



export default function Myarrivals() {


    const [isButton, setButton] = useState(true);
    const [dataLoaded, setDataLoaded] = useState('');
    const [taBody, setTaBody] = useState('')
    const [user, setUser] = useState('');

    useEffect(() => {
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

    const loadData = (e) => {
        const handleSuccess = (res) => { // if success
            setButton(false);
            console.log(dataLoaded);
            console.log(res.data.length);
            var ligneHtml = "";
            var red = "red";

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i][4]==0 || res.data[i][4]=='0' ){
                    red = "green"
                }
                else { red= "red"}
                console.log(res.data[i])
                ligneHtml += "<style> .red {color: red}  .green {color: green}</style><tr class="+red+"><td>"+res.data[i][0]+"</td><td>"+res.data[i][1]+"</td><td>"+res.data[i][2]+"</td><td>"+res.data[i][3][0]+"</td><td>"+res.data[i][3][1]+"</td></tr>"
            }
            console.log("ok");
            setTaBody(ligneHtml)
            console.log("ok")


        }

        const handleFailure = (error) => {
            console.log("ERROR");
        }

        axios.post(`http://localhost:8000/get_all_myarrivals`, name)
            .then(handleSuccess)
            .catch(handleFailure)
    }








    // only show nav when logged in
    if (!user) return null;
    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.myarrivals}>Mes Arrivées</p>
                <div className={styles.blue}>
                    <button className={isButton ? styles.loadbutton : styles.hidden} onClick={loadData}>CHARGER</button>
                    <table className={isButton ? styles.hidden : styles.white}>
                        <thead className={styles.tbody}>
                            <tr>
                                <th>Date</th>
                                <th>Heure d'Arrivée</th>
                                <th>Heure de Départ</th>
                                <th>Commentaire 1</th>
                                <th>Commentaire 2</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody} dangerouslySetInnerHTML={{__html: taBody}}/>
                    </table>
                </div>
                <p className={"cas"}>Ce tableau recense les dates des arrivées et départs des 25 derniers jours. Pour toutes autres informations referrez-vous au Pôle RH ou à votre responsable.</p>
            </div>
        </Layout>
        <style jsx>
            {`.cas {
                text-align: center;
                font-size: 12px;
                color: darkred;
                font-weight: 150;
                text-shadow: black 0.05em 0.05em 0.05em;
                padding-bottom: 20px;
                
}`}
        </style>
    </>)
}