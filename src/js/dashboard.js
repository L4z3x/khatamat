import { useEffect ,useState,useRef } from 'react'
import '../style/dashboard.css'

function DashBoard(){
    const [time, setTime] = useState({
        sec: 8,
        min: 0,
        hour: 0,
        day: 0
    });
    const [part , setPart] = useState([''])  // <--- for storing part that are clicked.
    const divRef = useRef(null)

    useEffect(()=>{setTimeout(()=>{   // <--- timer function:
        setTime(prevTime => {
            let newTime = { ...prevTime };
            if (newTime.day <= 0 && newTime.hour <= 0 && newTime.min <= 0 && newTime.sec <= 0 ) {  
            } else {
                newTime.sec--;
                if (newTime.sec === -1) {
                    newTime.min--;
                    newTime.sec = 59;
                    if (newTime.min === -1) {
                        newTime.hour--;
                        newTime.min = 59;
                        if (newTime.hour === -1) {
                            newTime.day--;
                            newTime.hour = 23;
                        }
                    }
                }
            }
            return newTime;
        });},1000)})
                                    // <--- setting the time variable:
        let clock_day  = time.day > 9 ? ` ${time.day}`  : ` 0${time.day}` 
        let clock_hour = time.hour > 9 ? ` ${time.hour}` : ` 0${time.hour}` 
        let clock_min = time.min > 9 ? ` ${time.min}` : ` 0${time.min}`  
        let clock_sec = time.sec > 9 ? ` ${time.sec}`: ` 0${time.sec}` 
        let clock = clock_day + ` day` + clock_hour + ` Hour`+ clock_min +` min`+ clock_sec+` sec`
    
    const handleImgClick = (e) => {  // display info(dropdown maybe?).
        
    }
    const handleSpanClick =(e)=>{       // <--- setting the onclick fun for the child (span).
        divRef.current.click();
        e.stopPropagation();
    }
                                    
    const handlePartOnclick = (e)=>{        // <--- setting the onclick function.
        console.log(e.target)
        if (e.target.className === 'part') {
            if (e.target.style.opacity === '' ) {
                console.log('change opacity to 0.45')
                e.target.style.opacity = 0.45 ;        // <--- change opacity on click.
            }else{
                console.log('change style null')
                e.target.style.opacity ='';
            }
        }
        const newPart = e.target.childNodes[0].innerText;       //TODO: integrate the two functions 
        if (!part.includes(newPart)) {                          //      (opacity and adding parts).
            setPart(value =>([...value,newPart]));        // <--- add parts.
            console.log(part);
        }else{console.log('already added')}
        
        e.stopPropagation();   
    }
        return(
        <div className='dash-backround'>
            <div className='timer'>
                <h1>Time Left:&nbsp;&nbsp;</h1><h1 className='time'>{clock}</h1>
            </div>
            <div className='part-container'>
                <h2>pick parts from the quran and read it before the time ends</h2>
            </div>
            <div className='part-container'>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 1</span><img onClick={handleImgClick}className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 2</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 3</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 4</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 5</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 6</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 7</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 8</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 9</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 10</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 11</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 12</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 13</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 14</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 15</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 16</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 17</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 18</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 19</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 20</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 21</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 22</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 23</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 24</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 25</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 26</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 27</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 28</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 29</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 30</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 31</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 32</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 33</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 34</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 35</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 36</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 37</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 38</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 39</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 40</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 41</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 42</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 43</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 44</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef} className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 45</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 46</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 47</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 48</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 49</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 50</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 51</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 52</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 53</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 54</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 55</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 56</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 57</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 58</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 59</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
                <div ref={divRef}className='part' onClick={handlePartOnclick}><span onClick={handleSpanClick}>Part 60</span><img className='info-icon' src={require('../img/info.png')} alt='info-iccon'/></div>
            </div>
        </div>
    )
}

export default DashBoard;