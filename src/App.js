import {useState} from "react";
import {Player} from 'video-react';
import 'video-react/dist/video-react.css';

const App = () => {
    const [url, setUrl] = useState('')

    const handleSetUrl = (e) => {
        setUrl(e.target.value)
    }

    return (
        <div className="App">
            <p>write url</p>
            <input value={url} onChange={handleSetUrl}/>
            {url &&
                <Player>
                    <source src={url}/>
                </Player>
            }
        </div>
    );
}

export default App;
