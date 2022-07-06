import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Pointingpage.module.css'
import Head from 'next/head'
import axios from 'axios'
import {useState} from "react";
import ArrivaltimeComponent from "../../components/ArrivaltimeComponent";
import DeparturetimeComponent from "../../components/DeparturetimeComponent";
import ArrivaltimeCompleted from "../../components/ArrivaltimeCompleted";
import React from 'react';
import ReactDOM from "react-dom";


export default function Pointingpage() {


    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.pointagehoraire} >Pointage Horaire</p>
                <div className={styles.blue}>
                   <ArrivaltimeComponent/>
                    <DeparturetimeComponent/>
                </div>
            </div>
        </Layout>
    </>)
}