import React from 'react';

const Skjema = props =>(
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Which City?"/>
                <input type="text" name="country" placeholder="Which Country?"/>
                <button>Get Weather</button>
            </form>
        );

export default Skjema;