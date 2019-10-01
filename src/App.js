import React, {useState} from 'react';
import ListItem from './components/ListItem';
import CreateListPopup from './components/CreateListPopup';

function App() {

    const [popupToDo, setPopupToDo] = useState(false);
    const togglePopup = (props) => {
        setPopupToDo(!popupToDo)
    }

    return (
        <div className="App">
          <section className="page__wrapper">
                <h1 className="text-center pt-4 mb-3">To Do List</h1>
                <div className="text-center mb-4">
                    <button className="btn-primary" id="btn-create-todo" onClick={togglePopup}>Create ToDo</button>
                </div>
                <CreateListPopup togglePopup={togglePopup} popupToDo={popupToDo}/>
                <div className="container-fluid">
                    <div className="to-do-list d-flex">
                        <div className="list-item">
                            <h2 id="to-do-title">to do</h2>
                            <ListItem elemId="todo-item-area"/>
                        </div>
                        <div className="list-item">
                            <h2>in progress</h2>
                            <ListItem elemId="inprogress-item-area"/>
                        </div>
                        <div className="list-item">
                            <h2>done</h2>
                            <ListItem elemId="done-item-area"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
