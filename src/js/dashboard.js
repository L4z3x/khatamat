import { useEffect ,useState } from 'react'
import '../style/dashboard.css'

function DashBoard(){
    const [time, setTime] = useState({
        sec: 8,
        min: 5,
        hour: 1,
        day: 1
    });
    
    useEffect(()=>{setTimeout(()=>{   // <--- timer function:
        setTime(prevTime => {
            let newTime = { ...prevTime };
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
            return newTime;
        });},1000)})
                                    // <--- setting the time variable:
        let clock_day  = time.day > 9 ? ` ${time.day}`  : ` 0${time.day}` 
        let clock_hour = time.hour > 9 ? ` ${time.hour}` : ` 0${time.hour}` 
        let clock_min = time.min > 9 ? ` ${time.min}` : ` 0${time.min}`  
        let clock_sec = time.sec > 9 ? ` ${time.sec}`: ` 0${time.sec}` 
        let clock = clock_day + ` day` + clock_hour + ` Hour`+ clock_min +` min`+ clock_sec+` sec`
                                    // <--- setting the onclick function.
    const handlePartOnclick = (e)=>{
        if(e.target.style.opacity === '1' || e.target.style.opacity === '' ){
            e.target.style.opacity = 0.45 ;        // <--- change opacity on click.
        }else{
            e.target.style.opacity = 1;
        }
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
                <div className='part' onClick={handlePartOnclick}>Part 1</div>
                <div className='part' onClick={handlePartOnclick}>Part 2</div>
                <div className='part' onClick={handlePartOnclick}>Part 3</div>
                <div className='part' onClick={handlePartOnclick}>Part 4</div>
                <div className='part' onClick={handlePartOnclick}>Part 5</div>
                <div className='part' onClick={handlePartOnclick}>Part 6</div>
                <div className='part' onClick={handlePartOnclick}>Part 7</div>
                <div className='part' onClick={handlePartOnclick}>Part 8</div>
                <div className='part' onClick={handlePartOnclick}>Part 9</div>
                <div className='part' onClick={handlePartOnclick}>Part 10</div>
                <div className='part' onClick={handlePartOnclick}>Part 11</div>
                <div className='part' onClick={handlePartOnclick}>Part 12</div>
                <div className='part' onClick={handlePartOnclick}>Part 13</div>
                <div className='part' onClick={handlePartOnclick}>Part 14</div>
                <div className='part' onClick={handlePartOnclick}>Part 15</div>
                <div className='part' onClick={handlePartOnclick}>Part 16</div>
                <div className='part' onClick={handlePartOnclick}>Part 17</div>
                <div className='part' onClick={handlePartOnclick}>Part 18</div>
                <div className='part' onClick={handlePartOnclick}>Part 19</div>
                <div className='part' onClick={handlePartOnclick}>Part 20</div>
                <div className='part' onClick={handlePartOnclick}>Part 21</div>
                <div className='part' onClick={handlePartOnclick}>Part 22</div>
                <div className='part' onClick={handlePartOnclick}>Part 23</div>
                <div className='part' onClick={handlePartOnclick}>Part 24</div>
                <div className='part' onClick={handlePartOnclick}>Part 25</div>
                <div className='part' onClick={handlePartOnclick}>Part 26</div>
                <div className='part' onClick={handlePartOnclick}>Part 27</div>
                <div className='part' onClick={handlePartOnclick}>Part 28</div>
                <div className='part' onClick={handlePartOnclick}>Part 29</div>
                <div className='part' onClick={handlePartOnclick}>Part 30</div>
                <div className='part' onClick={handlePartOnclick}>Part 31</div>
                <div className='part' onClick={handlePartOnclick}>Part 32</div>
                <div className='part' onClick={handlePartOnclick}>Part 33</div>
                <div className='part' onClick={handlePartOnclick}>Part 34</div>
                <div className='part' onClick={handlePartOnclick}>Part 35</div>
                <div className='part' onClick={handlePartOnclick}>Part 36</div>
                <div className='part' onClick={handlePartOnclick}>Part 37</div>
                <div className='part' onClick={handlePartOnclick}>Part 38</div>
                <div className='part' onClick={handlePartOnclick}>Part 39</div>
                <div className='part' onClick={handlePartOnclick}>Part 40</div>
                <div className='part' onClick={handlePartOnclick}>Part 41</div>
                <div className='part' onClick={handlePartOnclick}>Part 42</div>
                <div className='part' onClick={handlePartOnclick}>Part 43</div>
                <div className='part' onClick={handlePartOnclick}>Part 44</div>
                <div className='part' onClick={handlePartOnclick}>Part 45</div>
                <div className='part' onClick={handlePartOnclick}>Part 46</div>
                <div className='part' onClick={handlePartOnclick}>Part 47</div>
                <div className='part' onClick={handlePartOnclick}>Part 48</div>
                <div className='part' onClick={handlePartOnclick}>Part 49</div>
                <div className='part' onClick={handlePartOnclick}>Part 50</div>
                <div className='part' onClick={handlePartOnclick}>Part 51</div>
                <div className='part' onClick={handlePartOnclick}>Part 52</div>
                <div className='part' onClick={handlePartOnclick}>Part 53</div>
                <div className='part' onClick={handlePartOnclick}>Part 54</div>
                <div className='part' onClick={handlePartOnclick}>Part 55</div>
                <div className='part' onClick={handlePartOnclick}>Part 56</div>
                <div className='part' onClick={handlePartOnclick}>Part 57</div>
                <div className='part' onClick={handlePartOnclick}>Part 58</div>
                <div className='part' onClick={handlePartOnclick}>Part 59</div>
                <div className='part' onClick={handlePartOnclick}>Part 60</div>
            </div>
        </div>
    )
}

export default DashBoard;