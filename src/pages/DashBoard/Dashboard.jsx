import React from 'react'
//import NavBarHeading from '../../components/navBarHeading/NavBarHeading'
import AvatarHeading from '../../components/AvatarHeading/AvatarHeading'
import DashboardItem from '../../components/DashboardItem/DashboardItem'
import "./Dashboard.scss"
import smileyImage from  "../../assets/images/smileyImage.svg"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-container__heading"><AvatarHeading avatarHeadingText={"DASHBOARD"} /></div>
      <DashboardItem imageSRC="" headingText="Energy Level" contentText="This is some dumm text for explanation "/>
    </div>
  )
}

export default Dashboard

/*
<NavBarHeading headingText="DASHBOARD" headingStyle="nav-bar-header__heading"/>
      <AvatarHeading avatarHeadingText={"Amazing effort Jack"} />
*/