import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import styles from '../styles/Homepage.module.css'



import { userService } from 'services';

export default Home;

function Home() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    return (
        <>
        <Layout>
            <div className={styles.container}>
                <p className={styles.tabdebord}>Tableau de Bord</p>

                <div className={styles.pointeblue}>
                    <button>Pointer mon arrivée</button>
                    <button>Pointer mon départ</button>
                </div>
                <div className={styles.arrdep}>
                    <div className={styles.arr}>
                        <p>Mes Arrivées</p>
                        <div className={styles.arrcol}>
                            <h3>
                                TABLEAU EXEMPLE
                            </h3>
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
                    <div>
                        <p>Aucun Avertissement</p>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    );
}
