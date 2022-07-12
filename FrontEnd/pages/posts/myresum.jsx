import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Myresum.module.css'
import Head from 'next/head'
import {userService} from "../../services";
import {useEffect, useRef, useState} from "react";
import {Chart} from "chart.js";
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
import axios from "axios";
import {useRouter} from "next/router";

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
            display: true,
            text: 'Ce graphique représente le taux de précense des 7 précédents jours pointés. À savoir 100% correspond à 7h ou plus.',
        },
    },
};

const labels = ['XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX'];


export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: ' Taux de présence en % ',
            data: [0, 0, 0, 0, 0, 0, 0],
            borderColor: 'rgb( 83, 108, 121  )',
            backgroundColor: 'rgba(83, 108, 121 , 0.35)',
        },
    ],
};


export default function Myresum() {

    const chartRef = useRef();
    const [user, setUser] = useState('');
    const [isButton, setButton] = useState(true);
    const route = useRouter()

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();

    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;

    var nameuser = user.name

    var name = {
        "name" : nameuser
    }



    const loadData  = (e) => {

        setButton(false)
        const handleSuccess = (res) => { // if success
            console.log(res.data);
            console.log(res.data.length);
            data.labels = res.data[0]
            console.log(data.datasets[0].data)
            data.datasets[0].data = res.data[1]
            route.push('/posts/myresum')
        }

            const handleFailure = (error) => {
                console.log("ERROR");
            }

            axios.post(`http://localhost:8000/get_chart_data`, name)
                .then(handleSuccess)
                .catch(handleFailure)


    }

    const onClick = (event) => {
        console.log(getDatasetAtEvent(chartRef.current, event));
    }


    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.myresum}>Mon Résumé</p>
                <div className={styles.blue}>
                    <Line options={options} data={data} width={50} height={500} />
                </div>
                <button className={isButton ? styles.loadbutton : styles.hidden} onClick={loadData}>CHARGER</button>
            </div>
        </Layout>
    </>)

}