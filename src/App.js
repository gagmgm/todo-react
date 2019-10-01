import React from 'react';
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
      <section className="page__wrapper">
            <h1 className="text-center pt-4 mb-3">To Do List</h1>
            <div className="text-center mb-4">
                <button className="btn-primary" id="btn-create-todo">Create ToDo</button>
            </div>
            <div id="edit-area-wrapper">
                <button id="close-popup" className="btn btn-close">x</button>
                <div className='edit-area'>
                    <div className="form-group">
                        <label htmlFor="title-text">Title</label>
                        <input type="text" id="title-text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Description</label>
                        <textarea id="textarea"></textarea>
                    </div>
                    <button className="btn-primary" id="btn-submit">Submit</button>
                </div>
            </div>
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
