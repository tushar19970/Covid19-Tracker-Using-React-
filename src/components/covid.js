import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

    const [data, setData] = useState([]);
    
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]) 
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
    <>
        <section>
            <h1>🌍 Live</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul class="main-card">
                <li class="card1">
                    <div class="card__inner">
                        <p class="card__name"><span> OUR </span> COUNTRY </p>
                        <p class="card__total card__small">INDIA</p>
                    </div>
                </li>

                <li class="card2">
                    <div class="card__inner again_card_inner">
                        <p class="card__name"><span> TOTAL </span> RECOVERED </p>
                        <p class="card__total card__small">{data.recovered}</p>
                    </div>
                </li>

                <li class="card3">
                    <div class="card__inner again_card_inner1">
                        <p class="card__name"><span> TOTAL </span> CONFIRMED </p>
                        <p class="card__total card__small">{data.confirmed}</p>
                    </div>
                </li>

                <li class="card4">
                    <div class="card__inner again_card_inner2">
                        <p class="card__name"><span> TOTAL </span> DEATH </p>
                        <p class="card__total card__small">{data.deaths}</p>
                    </div>
                </li>

                <li class="card5">
                    <div class="card__inner again_card_inner3">
                        <p class="card__name"><span> TOTAL </span> ACTIVE </p>
                        <p class="card__total card__small">{data.active}</p>
                    </div>
                </li>

                <li class="card6 ">
                    <div class="card__inner again_card_inner4">
                        <p class="card__name"><span> LAST </span> UPDATED </p>
                        <p class="card__total card__small">{data.lastupdatedtime}</p>
                    </div>
                </li>

            </ul>
        </section>
    </>
    )
}

export default Covid