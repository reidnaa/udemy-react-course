import React , { useEffect}from 'react';
import './Cockpit.css'

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(()=> {
      console.log('useEffect')
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in use effect')
    }
  },[])


  useEffect(() => {
    console.log('[cockpit.js] 2nd use effect');
    return () => {
      console.log('[Cockpit.js] 2nd cleanup work in use effect')
    }
  });
    const style= {
        padding:'10px',
        margin:'10px',
        fontSize:'18px',
        backgroundColor: 'green',
        
      }
  
    let classes =[];
    if(props.personsLength <= 3){
      classes.push('red');
    }
    if(props.personsLength <= 2){
      classes.push('bold');
    }

    return(
        <div>
        <p className={classes.join(' ')}> {props.title}</p>
        <button style={style} onClick={props.toggle}>click me</button>
        </div>
    );
}

export default React.memo(Cockpit) ;