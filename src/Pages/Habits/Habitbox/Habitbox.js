import './Habitbox.css';
import { useState } from 'react'
            
// let habits = []

// const [habits, setHabits] = useState[0];

// function handleSubmit() {
    
    // const habitform = document.querySelector('#habit-form')
    // const habitNameInput = document.querySelector('#hname');
    // const habitTypeInput = document.querySelector('#type');

    // const name = habitNameInput.value
    // const type = habitTypeInput.value
            
    // let habit = {
    //     name: name,
    //     type: type
    // }

    // habits.push(habit);
    // console.table(habits)
    
// }

export default function Habitbox() {

    const [habit, setHabit] = useState('');
    const [type, setType] = useState('');
    const [habits, setHabits] = useState([]);

    console.table(habits)

    return(
    <div className="form-habit-list">
        <section className="instructionBox">
                <h3>Instructions</h3>
                <p>To add habits to the tracker, write the name of a habit to the text box, select the type of habit and click on save. </p>
                <p>The updated list of habits will appear on the right hand side of the table.</p>
        </section>
        <form id="habit-form" className="habitCreator" onSubmit={(e) => {e.preventDefault(); 
            setHabits([...habits, {id: Date.now(), habit, type}]) }}>
        <label htmlFor="hname">Habit:</label>
        <input type="text" id="hname" name="hname" placeholder="Insert new habit" required value={habit} onChange={e => setHabit(e.target.value)}></input>
        <label htmlFor="type">Type of Habit:</label>
        <select name="type" id="type" defaultValue='' required value={type} onChange={e => setType(e.target.value)}>
            <option value="" disabled>Select a type</option>
            <option value="Self-care">Self-care</option>
            <option value="Self-growth">Self-growth</option>
            <option value="Household">Household</option>
        </select>
        <input className="save" type="submit" value="Save"></input>
        </form>
        <div className='habit-list'>
        <h3>Habit list</h3>
        <ul>{habits.map(item => (
            <li>{item.habit}: {item.type}<button onClick={() => {
                setHabits(
                  habits.filter(a =>
                    a.id !== item.id
                  )
                );
              }}>
                Delete
              </button></li>))}
        </ul>
        </div>
    </div>
)     
}

