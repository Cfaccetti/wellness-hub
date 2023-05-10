import './Habitbox.css';
import { useState } from 'react';
import ReactECharts from 'echarts-for-react'
          

export default function Habitbox() {

  // Creates states for habit list

    const [habit, setHabit] = useState('');
    const [type, setType] = useState('');
    const [habits, setHabits] = useState([]);

  // Creates dates for habit table

    let today = new Date();
    let todayString = today.toLocaleDateString('en-GB', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let yesterday = new Date(today.setDate(today.getDate()-1));
    let yesterdayString = yesterday.toLocaleDateString('en-GB', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let twodaysago = new Date(yesterday.setDate(yesterday.getDate()-1));
    let twodaysagoString = twodaysago.toLocaleDateString('en-GB', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let threedaysago = new Date(twodaysago.setDate(twodaysago.getDate()-1));
    let threedaysagoString = threedaysago.toLocaleDateString('en-GB', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let fourdaysago = new Date(threedaysago.setDate(threedaysago.getDate()-1));
    let fourdaysagoString = fourdaysago.toLocaleDateString('en-GB', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let fivedaysago = new Date(fourdaysago.setDate(fourdaysago.getDate()-1));
    let fivedaysagoString = fivedaysago.toLocaleDateString('en-GB', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let sixdaysago = new Date(fivedaysago.setDate(fivedaysago.getDate()-1));
    let sixdaysagoString = sixdaysago.toLocaleDateString('en-GB', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // Creates function to update habit count

    function updateHabitCount(passedHabit, numericalDay) {
      let newHabits = habits.map(currentHabit => {
        const countDay = 'count'+numericalDay;
        if (currentHabit.id === passedHabit.id) {
          return {...currentHabit, [countDay]: !currentHabit[countDay]}
        }

        return currentHabit;
      });
  
      // console.log(newHabits)
      setHabits(newHabits);
    }

    console.log(habits)

    // Bar plot code for Echarts

    //// Convert array of newHabits into desired format

  
    const data = habits.map(obj => {
      const totalCount = Object.values(obj).filter(val => typeof val === 'boolean').reduce((acc, curr) => acc + curr, 0);
      const percentage = Math.min(100, Math.round(totalCount / 7 * 100)); // assuming maximum of 7 counts
      return [obj.id, obj.habit, obj.type, totalCount, percentage];
    });
    
    console.log(data);
    
const colourGroups = {'Household':'#bce38c', 'Self-care':'#ddcbdf', 'Self-growth':'#d1aad0'}

const options = {
  tooltip: {},
  dataset: {
    source: data
  },
  xAxis: { type: 'category',
  axisLabel: {
    fontSize:14
  }, },
  yAxis: {name: 'Completion rate(%)',
    nameLocation: 'center',
    nameGap: 40,
    axisLabel: {
      fontSize:14
    },
    nameTextStyle:{
      fontSize: 16
    },
    max: 100
    },
  series: [{ 
    data: data,
    type: 'bar',
    itemStyle: {
      color: function (params) {
      return colourGroups[params.value[2]]}
    },
    encode: {
      x: 1,
      y: 4
    },
  }], 
  // color: ['#57b4f9']
};

    return(
    <>
    <div className="form-habit-list">
            <section className="instructionBox">
                <h3>Instructions</h3>
                <p className='instructions1'>To add habits to the tracker, write the name of a habit to the text box, select the type of habit and click on save. </p>
                <p className='instructions2'>The updated list of habits will appear on the right hand side of the table.</p>
        </section>
        <form id="habit-form" className="habitCreator" onSubmit={(e) => {e.preventDefault(); 
            setHabits([...habits, {id: Date.now(), habit, type, count1: false, count2:false, count3:false, count4:false, count5:false, count6:false, count7:false}]) }}>
        <h2 className='habit-creator-title'>Create habits</h2>
        <label htmlFor="hname">Habit:</label>
        <input type="text" id="hname" name="hname" placeholder="Insert new habit" required value={habit} onChange={e => setHabit(e.target.value)}></input>
        <label htmlFor="type">Type of Habit:</label>
        <select name="type" id="type" required value={type} onChange={e => setType(e.target.value)}>
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
            <li key={item.id}>{item.habit}: {item.type}<button onClick={() => {
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
    <div className='habit-table-section'>
      <h2 className='habit-tracker-title'>Track your habits</h2>
      <table className='habit-table'>
        <tbody>
        <tr>
          <th>Type</th>
          <th>Habit</th>
          <th>{ todayString }</th>
          <th>{ yesterdayString }</th>
          <th> { twodaysagoString } </th>
          <th> { threedaysagoString } </th>
          <th> { fourdaysagoString } </th>
          <th> { fivedaysagoString } </th>
          <th> { sixdaysagoString } </th>
        </tr>
        {habits.map(item => (
          <tr className={`row-type-${item.type.toLowerCase()}`} key={item.id+'table'}>
            <td>{item.type}</td>
            <td>{item.habit}</td>
            <td>
              <input checked={item.count1} type='checkbox' id={item.id + 'today'} onChange={() => updateHabitCount(item, 1)}></input>
            </td>
            <td>
              <input checked={item.count2} type='checkbox' id={item.id+'yesterday'} onChange={() => updateHabitCount(item, 2)}></input>
            </td>
            <td>
              <input checked={item.count3} type='checkbox' id={item.id+'twodaysago'} onChange={() => updateHabitCount(item, 3)}></input>
            </td>
            <td>
              <input checked={item.count4} type='checkbox' id={item.id+'threedaysago'} onChange={() => updateHabitCount(item, 4)}></input>
            </td>
            <td>
              <input checked={item.count5} type='checkbox' id={item.id+'fourdaysago'} onChange={() => updateHabitCount(item, 5)}></input>
            </td>
            <td>
              <input checked={item.count6} type='checkbox' id={item.id+'fivedaysago'} onChange={() => updateHabitCount(item, 6)}></input>
            </td>
            <td>
              <input checked={item.count7} type='checkbox' id={item.id+'weekago'} value='' onChange={() => updateHabitCount(item, 7)}></input>
            </td>
          </tr>))}
          </tbody>
      </table>
    </div>
    <div className='dashboard-section'>
          <h2 className='dashboard-title'>Dashboard</h2>
    </div>
    <div>
      <ReactECharts option={options} />
    </div>
    </>
)     
}

