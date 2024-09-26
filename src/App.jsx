import React, {useState} from 'react';

function App(props) {
    // state is initialized by a props
    const [title, setTitle] = useState(props.title);

    const handleChangeTitle = (e) => {
        // this.setState allows us to update the state value
        setTitle(e.target.value);
    };

    return (
        <div className="App">
            <h1> this is my first React Component</h1>
            <label htmlFor="titleInput">Title</label>
            <input
                type="text"
                id="titleInput"
                onChange={handleChangeTitle}
                value={title}
            />
            <h3>{title}</h3>
        </div>
    );
}

export default App;