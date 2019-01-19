import React from 'react';

const Weather = (props)=> (

            <div>
                {props.toShow && (
                    <div>
                        <p> Location : {props.city} , {props.country} </p>
                        <p> Temperature : {props.city} </p>
                        <p>Humidity : {props.humidity}</p>
                        <p> Conditions : {props.description} </p>
                    </div>
                )}

                {props.error && <div style={{color: 'red', fontSize: '40px'}}> {props.error} </div>}
                
            </div>
);


export default Weather;