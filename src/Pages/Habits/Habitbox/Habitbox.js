import './Habitbox.css'

export default function Habitbox() {
    return (
        <form className="habitCreator">
        <label for="hname">Habit:</label>
        <input type="text" id="hname" name="hname" placeholder="Insert new habit"></input>
        <label for="type">Type of Habit:</label>
        <select name="type" id="type">
            <option value="" disabled selected>Select a type</option>
            <option value="Self-care">Self-care</option>
            <option value="Self-growth">Self-growth</option>
            <option value="Household">Household</option>
        </select>
        <input className="save" type="submit" value="Save"></input>
        </form>
    )
}