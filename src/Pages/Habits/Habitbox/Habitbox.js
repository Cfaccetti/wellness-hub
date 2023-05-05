import './Habitbox.css';
import Habitarray from './Habitarray';
            
let habits = []

// const [habits, setHabits] = useState[0];

function handleSubmit() {
    const habitform = document.querySelector('#habit-form')
    const habitNameInput = document.querySelector('#hname');
    const habitTypeInput = document.querySelector('#type');

    const name = habitNameInput.value
    const type = habitTypeInput.value
            
    let habit = {
        name: name,
        type: type
    }

    // setHabits(habit);

    habits.push(habit);
}

export default function Habitbox() {
    return (
        <>
        <form id="habit-form" className="habitCreator" onSubmit={handleSubmit}>
        <label htmlFor="hname">Habit:</label>
        <input type="text" id="hname" name="hname" placeholder="Insert new habit"></input>
        <label htmlFor="type">Type of Habit:</label>
        <select name="type" id="type" defaultValue=''>
            <option value="" disabled>Select a type</option>
            <option value="Self-care">Self-care</option>
            <option value="Self-growth">Self-growth</option>
            <option value="Household">Household</option>
        </select>
        <input className="save" type="submit" value="Save"></input>
        </form>
        <Habitarray />
        </>
)     
}

