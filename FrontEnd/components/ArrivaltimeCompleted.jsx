import styles from "../styles/ArrivaltimeCompleted.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {userService} from "../services";
import Layout from "./layout";
import ReactDOM from 'react-dom'

export default function ArrivaltimeComponent() {

    let date = new Date();
    date.setMinutes(date.getMinutes() - 5);
    let heure = ("0" + (date.getHours())).slice(-2);
    let minutes = ("0" + (date.getMinutes())).slice(-2);
    var time = heure + " : " + minutes ;
    var data = {
        "data" : time
    };
    const [commentArrival, setCommentArrival] = useState('') ;
    const [user, setUser] = useState('');

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;



    var comment = {
        "comment" : commentArrival
    };

    var nameuser = user.name

    var name = {
        "name" : nameuser
    }

    const arrivalTime = (e) => {
        e.preventDefault();

        const handleSuccessData = (res) => { // if success
            date.setMinutes(date.getMinutes() + 5);
            heure = ("0" + (date.getHours())).slice(-2);
            minutes = ("0" + (date.getMinutes())).slice(-2);
            time = heure + ":" + minutes + ":00";
            console.log(res.data);
            //console.log(time);
        }

        const handleSuccessComment = (res) => { // if success
            console.log(res.data)
            return res.data
        }

        const handleSuccessDate = (res) => { // if success
            console.log(res.data);
        }

        const handleSuccessUserId = (res) => { // if success
            console.log(res.data);
        }

        const handleSuccess = (res) => { // if success
            console.log(res.data);

        }

        const handleFailure = (error) => {
            console.log("ERROR");
        }

        function getData() { return axios.post(`http://localhost:8000/ha`, data)}
        //.then(handleSuccessData)
        //.catch(handleFailure)}

        function getComment() { return axios.post(`http://localhost:8000/ha/comment`, comment)}
        //.then(handleSuccessComment)
        //.catch(handleFailure)}

        function getDate() { return axios.post(`http://localhost:8000/date`)}
        //.then(handleSuccessDate)
        //.catch(handleFailure)}

        function getUserId() { return axios.post(`http://localhost:8000/user_id`, name)}
        //.then(handleSuccessUserId)
        //.catch(handleFailure)}

        Promise.all([getUserId(), getDate(), getData(), getComment()])
            .then(function (results) {
                var user_id = {
                    "user_id" : results[0].data.toString()
                } ;
                var date = {
                    "date" : results[1].data.toString()
                };
                var arrivaltime = {
                    "arrivaltime" : results[2].data.toString()
                };
                var comment = {
                    "comment" : results[3].data.toString()
                };

                axios.post(`http://localhost:8000/arrival_time`, {user_id, date, arrivaltime, comment})
                    .then(handleSuccess)
                    .catch(handleFailure)
            });


    }

    return(<>

            <div className={styles.color}><label className={styles.labelhs}><strong>Votre heure d'arrivée est la suivante :</strong><br/><br/></label>
                <label>{heure} : {minutes}</label><br/><br/>
                <label className={styles.labelhs}><strong>Commentaire : </strong></label>
            <div className={styles.test}></div>
            </div>



    </>)
}
