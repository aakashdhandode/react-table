import React, {useState, useEffect} from 'react'

const DarkMode = () => {
    const [dark, setMode] = useState(false);

    return (
        <div>
            <div className='App dark-mode'> 
                <div className='nav'>
                    <label class="switch">
                        <input type="checkbox"
                     
                        onChange={() => setMode(!dark)} />
                        <span class="slider round"></span>
                    </label>
                </div>

                <div className='content'>
                    <h1>dark mode</h1>
                    <p>fhasdjfhasjdkfhkjash ? </p>
                </div>
            </div>
        </div>
    )
}

export default DarkMode
