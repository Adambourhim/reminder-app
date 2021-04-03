import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Reminders</h3>
      <br />
      <h3>Add Reminder</h3>
      <form className="container">
        <label htmlFor="id">Id</label>
        <br />
        <input name="id" placeholder="Id" />
        <br />
        <label htmlFor="reminder">Reminder</label>
        <br />
        <input name="reminder" placeholder="Reminder" />
        <br />
        <label htmlFor="time">Time</label>
        <br />
        <input name="time" placeholder="Time" />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
