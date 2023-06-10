import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

function ActivityHistory() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            const db = firebase.firestore();
            const snapshot = await db.collection("activities").get();
            setActivities(snapshot.docs.map(doc => doc.data()));
        };
        fetchActivities();
    }, []);

    return (
        <div>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>{activity.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default ActivityHistory;
