import React from 'react'
import './MainContent.css'
import { SectionProfile } from './SectionProfile/SectionProfile'
import { SectionProject } from './SectionProject/SectionProject'
import { SectionReferences } from './SectionReferences/SectionReferences'
import { SectionExperiencia } from './SectionExperiencia/SectionExperiencia'




export const MainContent = () => {
  return (
    <main>
      <SectionProfile />
      <SectionProject />
      <SectionReferences />
      <SectionExperiencia />
    </main>
  )
}
