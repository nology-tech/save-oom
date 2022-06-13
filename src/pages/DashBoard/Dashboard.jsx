import React from 'react'
import AvatarHeading from '../../components/AvatarHeading/AvatarHeading'
import DashboardItem from '../../components/DashboardItem/DashboardItem'
import "./Dashboard.scss"
import smiley from "../../assets/images/Smiley.svg"
import battery20 from '../../assets/images/Battery-20.svg';
import heart from '../../assets/images/Heart.svg';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-container__heading"><AvatarHeading avatarHeadingText={"DASHBOARD"} />
      </div>
      <div className='dashboard-container__contents'>
      <DashboardItem imageSRC={smiley} headingText="Energy Level" contentText="This is OOM's current energy level. Take regular breaks from playing to allow OOM to recover. "/>
      <DashboardItem imageSRC={battery20} headingText="Fuel Level" contentText="Oom's spaceship lost all its fuel on its collision with earth. Re-fill this to a 100% to get oom safely back home!! "/>
      <DashboardItem imageSRC={heart} headingText="Health Level" contentText="This is Oom's health status. Gain more health to make Oom land safely on Earth. "/>
      </div>
    </div>
  )
}

export default Dashboard
