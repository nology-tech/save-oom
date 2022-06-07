import React from 'react'
import NavBarHeading from '../../components/navBarHeading/NavBarHeading'
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <NavBarHeading headingText="DASHBOARD" headingImg={""} headingStyle={"level-select"}
          isLocked={false}
        />
    </div>
  )
}

export default Dashboard