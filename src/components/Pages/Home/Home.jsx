import React from "react";
import { MainContent } from "../../Layouts/MainContent/MainContent";
import { ProfileInformation } from "../../Layouts/ProfileInformation/ProfileInformation";

export const Home = () =>{
  return(
    <>
      <ProfileInformation />
      <MainContent/>
    </>
  )
}
