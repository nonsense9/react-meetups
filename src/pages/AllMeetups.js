import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";


function AllMeetupsPage() {
    const [loading, setLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://test-f0e91-default-rtdb.firebaseio.com/meetups.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }
                setLoading(false);
                setLoadedMeetups(meetups);
            })
    }, [])

    if (loading) {
        return <section><p>Loading...</p></section>
    }

    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>
}

export default AllMeetupsPage;
