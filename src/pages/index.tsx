import * as React from "react"
import SwipeContainer from "../components/SwipeableView/SwipeContainer";
import WeaponsDataExport from '../components/steps/WeaponsDataExport';

const steps = [
    {
        title: "Weapons Data Export",
        render: <WeaponsDataExport/>
    },
    { title: "Step 2", content: "bar" },
    { title: "Step 3", content: "baz" },
];
const IndexPage = () => {
  return (
      <main>
        <SwipeContainer steps={steps}/>
      </main>
  )
}

export default IndexPage
