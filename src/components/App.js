import React, {useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Timer_1Component from './Timer_1';
import Timer_1_btnComponent from './Timer_1_btn';
import Timer_2Component from './Timer_2';
import Timer_2_btnComponent from './Timer_2_btn';
import Timer_3Component from './Timer_3';
import Timer_3_btnComponent from './Timer_3_btn';
import Timer_TotComponent from './Timer_Tot';
import './App.css';

function App() {

/***For timer 1 */

  const [time_1, setTime_1] = useState({ ms: 0, s: 0, m: 0});
  const [interv_1, setInterv_1] = useState();
  const [status_1, setStatus_1] = useState(0);

/***For timer 2 */

  const [time_2, setTime_2] = useState({ ms: 0, s: 0, m: 0 });
  const [interv_2, setInterv_2] = useState();
  const [status_2, setStatus_2] = useState(0);

  /**For timer 3 */

  const [time_3, setTime_3] = useState({ ms: 0, s: 0, m: 0 });
  const [interv_3, setInterv_3] = useState();
  const [status_3, setStatus_3] = useState(0);

  /***
 *For total timer 3 */
  
  const [time_tot, setTime_tot] = useState({ ms: 0, s: 0, m: 0 });
  const [interv_tot, setInterv_tot] = useState();

/***For timer 1 */
  var updatedMs_1 = time_1.ms;
  var updatedS_1 = time_1.s;
  var updatedM_1 = time_1.m;

/***For timer 2 */
  var updatedMs_2 = time_2.ms;
  var updatedS_2 = time_2.s;
  var updatedM_2 = time_2.m;

/***For timer 3 */
  var updatedMs_3 = time_3.ms;
  var updatedS_3 = time_3.s;
  var updatedM_3 = time_3.m;

/***For total timer */
  var updatedMs_tot = time_tot.ms;
  var updatedS_tot = time_tot.s;
  var updatedM_tot = time_tot.m;

   // Not started = 0
  // started = 1
  // stopped = 2

/***For timer 1 */
  const timer1_run = () => {

    if (updatedM_1 === 60) {
      updatedM_1 = 0;
    }
    if (updatedS_1 === 60) {
      updatedM_1++;
      updatedS_1 = 0;
    }
    if (updatedMs_1 === 100) {
      updatedS_1++;
      updatedMs_1 = 0;
    }
    updatedMs_1++;
    return setTime_1({ ms: updatedMs_1, s: updatedS_1, m: updatedM_1 });
  }

  const start_timer1 = () => {
    clearInterval(interv_tot);
    timer1_run();
    setStatus_1(1);
    setInterv_1(setInterval(timer1_run, 10000));
    start_timer();
  };

  const reset_timer1 = () => {
    clearInterval(interv_tot);
    clearInterval(interv_1);
    setStatus_1(0);
    setTime_1({ ms: 0, s: 0, m: 0 });
    updatedM_1 = 0;
    updatedS_1 = 0;
    updatedMs_1 = 0;
    start_timer();
  };

  const stop_timer1 = () => {
    clearInterval(interv_1);
    setStatus_1(2);
  };

  const resumet_timer1 = () => {
    clearInterval(interv_tot);
    start_timer1();
    start_timer();
  };  

/***For timer 2 */
  const timer2_run = () => {
    if (updatedM_2 === 60) {
      updatedM_2 = 0;
    }
    if (updatedS_2 === 60) {
      updatedM_2++;
      updatedS_2 = 0;
    }
    if (updatedMs_2 === 100) {
      updatedS_2++;
      updatedMs_2 = 0;
    }
    updatedMs_2++;
    return setTime_2({ ms: updatedMs_2, s: updatedS_2, m: updatedM_2 });
  }

  const start_timer2 = () => {
    clearInterval(interv_tot);
    timer2_run();
    setStatus_2(1);
    setInterv_2(setInterval(timer2_run, 1000));
    start_timer();
  };

  const reset_timer2 = () => {
    clearInterval(interv_tot);
    clearInterval(interv_2);
    setStatus_2(0);
    setTime_2({ ms: 0, s: 0, m: 0 });
    updatedM_2 = 0;
    updatedS_2 = 0;
    updatedMs_2 = 0;
    start_timer();
  };

  const stop_timer2 = () => {
    clearInterval(interv_2);
    setStatus_2(2);
  };

  const resumet_timer2 = () => {
    clearInterval(interv_tot);
    timer2_run();
    setStatus_2(1);
    setInterv_2(setInterval(timer2_run, 1000));
    start_timer();
  };  

/***For timer 3 */

  const timer3_run = () => {
    if (updatedM_3 === 60) {
      updatedM_3 = 0;
    }
    if (updatedS_3 === 60) {
      updatedM_3++;
      updatedS_3 = 0;
    }
    if (updatedMs_3 === 100) {
      updatedS_3++;
      updatedMs_3 = 0;
    }
    updatedMs_3++;
    return setTime_3({ ms: updatedMs_3, s: updatedS_3, m: updatedM_3 });
  }

  const start_timer3 = () => {
    clearInterval(interv_tot);
    timer3_run();
    setStatus_3(1);
    setInterv_3(setInterval(timer3_run, 100));
    start_timer();
  };

  const reset_timer3 = () => {
    clearInterval(interv_tot);
    clearInterval(interv_3);
    setStatus_3(0);
    setTime_3({ ms: 0, s: 0, m: 0 });
    updatedM_3 = 0;
    updatedS_3 = 0;
    updatedMs_3 = 0;
    start_timer();
  };

  const resumet_timer3 = () => {
    clearInterval(interv_tot);
    timer3_run();
    setStatus_3(1);
    setInterv_3(setInterval(timer3_run, 100));
    start_timer();
  };   

  const stop_timer3 = () => {
    clearInterval(interv_3);
    setStatus_3(2);
  };
  
  const start_timer = () => {
    console.log("setttt");
    timer_tot();
    setInterv_tot(setInterval(timer_tot, 1));
  };
  const timer_tot = () => {
    updatedM_tot = updatedM_3 + updatedM_2 + updatedM_1;
    updatedS_tot = updatedS_3 + updatedS_2 + updatedS_1;
    updatedMs_tot = updatedMs_3 + updatedMs_2 + updatedMs_1;

    if (updatedM_tot === 60) {
      updatedM_tot = 0;
    }
    if (updatedS_tot === 60) {
      updatedM_tot++;
      updatedS_tot = 0;
    }
    if (updatedMs_tot === 100) {
      updatedS_tot++;
      updatedMs_tot = 0;
    }
    updatedMs_tot++;
    return setTime_tot({ ms: updatedMs_tot - 1, s: updatedS_tot, m: updatedM_tot });
  }
  
  return (
    <div className="clock-bar">
      <div className="lock-back">
        <div className="clock">
          <Timer_1Component time = {time_1}/>
          <Timer_1_btnComponent status={status_1} start={start_timer1} resume={resumet_timer1} reset={reset_timer1} stop={stop_timer1} />
          
          <Timer_2Component time={time_2} />
          <Timer_2_btnComponent status={status_2} start={start_timer2} resume={resumet_timer2} reset={reset_timer2} stop={stop_timer2}/>

          <Timer_3Component time={time_3} />
          <Timer_3_btnComponent status={status_3} start={start_timer3} resume={resumet_timer3} reset={reset_timer3} stop={stop_timer3}/>
          
          <Timer_TotComponent time={time_tot} />
        </div>
      </div>
    </div>
  );
}

export default App;
