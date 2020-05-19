import React from 'react';

function Timer_3_btn(props) {
    return (
        <div>
            {(props.status === 0) ?
                <div>    
                <button className="clock-btn clock-btn-gre"
                    onClick={props.start}>Start</button>
                <button className="clock-btn clock-btn-yel"
                    onClick={props.reset}>Reset</button>
                </div> : ""
                
            }

            {(props.status === 1) ?
                <div>
                    <button className="clock-btn clock-btn-red"
                        onClick={props.stop}>pause</button>
                    <button className="clock-btn clock-btn-yel"
                        onClick={props.reset}>Reset</button>
                </div> : ""
            }

            {(props.status === 2) ?
                <div>
                    <button className="clock-btn clock-btn-gre"
                        onClick={props.resume}>Play</button>
                    <button className="clock-btn clock-btn-yel"
                        onClick={props.reset}>Reset</button>
                </div> : ""
            }

        </div>
    );
}

export default Timer_3_btn;