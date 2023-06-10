import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function ActivityHistory() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            const db = getFirestore();
            const snapshot = await getDocs(collection(db, "activities"));
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
