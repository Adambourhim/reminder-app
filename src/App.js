import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Reminders</h3>
      <br />
      <h3>Add Reminder</h3>
      <form>
        <label htmlFor="id">Id</label>
        <input name="id" placeholder="Id" />
        <label htmlFor="reminder">Reminder</label>
        <input name="reminder" placeholder="Reminder" />
        <label htmlFor="time">Time</label>
        <input name="time" placeholder="Time" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
