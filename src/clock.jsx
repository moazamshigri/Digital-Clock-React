import React,{useState, useEffect} from "react"
function Clock (){
    const [hou,sethou] = useState(new Date().getHours());
    const [min,setmin] = useState(new Date().getMinutes());
    const [sec,setsec] = useState(new Date().getSeconds());

    useEffect(()=>{
        const interval = setInterval(()=>{
            sethou(new Date().getHours());
            setmin(new Date().getMinutes());
            setsec(new Date().getSeconds());
        },1000)
        return ()=>{clearInterval(interval)}
    },[])
  
return(
    <>
    <div className="clockContainer">
        <div className="clock">
            <span className="hour">{hou%12<10?`0${hou%12}`:hou%12}</span>:
            <span className="minutes">
                {min<10?`0${min}`:min}
            </span>:
       <span className="second">{sec<10?`0${sec}`:sec} </span>
       <p> &nbsp;{hou>=12?" pm":" am"}</p>
        </div>
    </div>

    </>
)
}
export default Clock