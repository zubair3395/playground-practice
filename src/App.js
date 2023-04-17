import "./App.css";
import UpdatedIncrement from "./components/PracticeHOC/Increment1";
import UpdatedIncrement2 from "./components/PracticeHOC/Increment2";
import UpdatedTodo from "./components/SearchFunctionality/Todo";
import UpdatedUser from "./components/SearchFunctionality/Users";
import TransitionHook from "./components/TransitionHook";
import UseEffect from "./components/UseEffect";

function App() {
  return (
    <>
       <div className="row border border-primary p-3">
      <strong>Higher order Component Practice</strong>
      <div className="col-md">
        <UpdatedIncrement />
      </div>
      <div className="col-md">
        <UpdatedIncrement2 />
      </div>
    </div>
    <div className="container">
      <div className="row border border-primary p-3 my-3">
      <strong>Higher order Component Practice</strong>
        <div className="col-md">
          <UpdatedTodo/>
        </div>
        <div className="col-md">
          <UpdatedUser/>
        </div>
      </div>
    </div>
    <div className="row">
      <UseEffect/>
      <h1>UseId and Trasition hooks</h1>
      <TransitionHook/>
    </div>
    </>
  
  
  );
}

export default App;
