export default function Habitarray() {

window.addEventListener('DOMContentLoaded', function() {

const habitForm = document.querySelector('#habit-form');

            
habitForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const habitNameInput = window.querySelector('#hname');
    const habitTypeInput = window.querySelector('#type');
            
    const habit = {
        name: habitNameInput.value,
        type: habitTypeInput.value
    }
            
    const habits = []
            
    habits.push(habit)
    console.log(habits)
})
})


}