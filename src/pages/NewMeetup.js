import {useHistory} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();

    async function addMeetupHandler(data) {
        const res = await fetch('https://test-f0e91-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(() => {
            history.replace('/')
        });
        console.log(res);
    }

    return <section>
        <h1>
            Add New Meetup
        </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;
