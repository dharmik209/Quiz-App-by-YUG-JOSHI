import React, {useState, useEffect} from 'react'

export default function Progressbar() {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
  return (
    <div>
        <div className="Progressbar">
            <div style={{
                hieght: "100%",
                width: '${filled}%',
                backgroundColor: "#a66cff",
                transition: "width 0.5s"
            }}></div>
            <span>{ filled }%</span>
      </div>
      <button className="btn" onClick={() => setIsRunning(true)}>Run</button>
    </div>
  )
}
