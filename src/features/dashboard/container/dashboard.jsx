import { useState } from 'react';

import '../style/dashboard.css'
import '../style/dashboard-responsive.css'

import userImg from '../../../assets/images/john-doe.jpg'

import data from '../../../assets/json/records'
import BarChart from '../../../shared/components/charts/chart';

function Dashboard() {

    const [activityId, setActivityId] = useState('')

    return (
        <div className="fitness-container">
            <header>
                <div className="header-left-content">
                    <h1>
                        Fitness
                    </h1>
                </div>

                <div className="header-right-content">
                    <div className="user-content">
                        <div className="user-photo">
                            <img src={userImg} alt="userImage" />
                        </div>

                        <div className="user-detail">
                            <p className="user-name">{data.user.name}</p>
                            <p className="user-email">{data.user.email}</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className='grid-container'>
                <div className="user-age-detail">
                    <p className="user-age">AGE: </p>
                    <p className="age-detail">{data.user.age} year</p>
                </div>

                <div className="user-height-detail">
                    <p className="user-height">Height: </p>
                    <p className="height-detail">{data.user.height} cm</p>
                </div>

                <div className="user-weight-detail">
                    <p className="user-weight">Weight: </p>
                    <p className="weight-detail">{data.user.weight} kg</p>
                </div>

                <div className="user-activitys">
                    <h1>Activities</h1>
                    {
                        data.activities?.map((data) => {
                            return (
                                <div className="activity" onClick={() => { setActivityId(data.id) }}>
                                    <div className="activity-detail">

                                        <p className='user-activity-name'>
                                            {data.name}
                                        </p>

                                        <p className='user-activity-timing'>
                                            {data.duration} min
                                        </p>
                                    </div>
                                    {
                                        activityId === data.id && (
                                            <div className="all-detail" data-target="slide-content">
                                                <ul>


                                                    <li className="user-activity-all-detail">
                                                        <p>
                                                            <span>Calories Burned:</span> {data.calories_burned}
                                                        </p>
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        <p>
                                                            <span> Heart Rate (Average)</span> : {data.heart_rate.average || "-"}
                                                        </p>
                                                        <p>
                                                            <span>Heart Rate (Max) </span>: {data.heart_rate.max || "-"}
                                                        </p>
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.steps && (
                                                            <p>
                                                                <span> Steps</span> : {data.steps}
                                                            </p>
                                                        )}
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.pool_length && (
                                                            <p>
                                                                <span>Pool Length</span> : {data.pool_length}
                                                            </p>
                                                        )}
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.laps && (
                                                            <p>
                                                                <span> Laps</span> : {data.laps}
                                                            </p>
                                                        )}
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.pace && (
                                                            <>
                                                                <p>
                                                                    <span> Pace (Average)</span> : {data.pace.average}
                                                                </p>
                                                                <p>
                                                                    <span> Pace (Best) </span> : {data.pace.best}
                                                                </p>
                                                            </>
                                                        )}
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.speed && (
                                                            <>
                                                                <p>
                                                                    <span> Speed (Average) </span> : {data.speed.average}
                                                                </p>
                                                                <p>
                                                                    <span> Speed (Max) </span> : {data.speed.max}
                                                                </p>
                                                            </>
                                                        )}
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.strides && (
                                                            <p>
                                                                <span> Strides</span> : {data.strides}
                                                            </p>
                                                        )}
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.strokes && (
                                                            <p>
                                                                <span> Strokes</span> : {data.strokes}
                                                            </p>
                                                        )}
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.weight_lifted && (<>
                                                            <p>
                                                                <span> Weight Lifted</span> : {data.weight_lifted.average_per_rep}
                                                            </p>
                                                            <p>
                                                                <span> Weight Lifted</span> : {data.weight_lifted.total}
                                                            </p>
                                                        </>
                                                        )}
                                                    </li>
                                                    <li className="user-activity-all-detail">
                                                        {data.distance && (
                                                            <p>
                                                                <span> Distance</span> : {data.distance} km
                                                            </p>
                                                        )}
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }

                                </div>
                            )
                        })
                    }



                </div>

                <div className="chart">
                    <BarChart />
                </div>
            </div>
        </div >
    )
};
export default Dashboard;