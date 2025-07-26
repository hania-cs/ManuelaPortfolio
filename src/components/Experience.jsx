"use client"

import { useEffect, useRef } from "react"
import "./Experience.css"
import { Experience as ExperienceIcon } from "./Icons"

const Experience = ({ onTextEnter, onTextLeave }) => {
  const titleRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const experienceData = [
    {
      position: "Research Psychologist",
      company: "Cognitive Science Institute",
      years: "2022 - Present",
      description:
        "Leading research projects on cognitive behavioral interventions for anxiety disorders. Developing and testing new therapeutic approaches. Supervising graduate students and research assistants.",
      achievements: [
        "Published 5 papers in high-impact journals",
        "Secured $500,000 in research grants",
        "Developed a novel therapeutic protocol for PTSD",
      ],
    },
    {
      position: "Clinical Psychologist",
      company: "Mental Health Center",
      years: "2020 - 2022",
      description:
        "Provided evidence-based psychological assessment and treatment for adults with various mental health conditions. Specialized in cognitive-behavioral therapy for anxiety and mood disorders.",
      achievements: [
        "Maintained a caseload of 20+ clients",
        "Developed group therapy protocols",
        "Achieved 85% treatment completion rate",
      ],
    },
    {
      position: "Research Assistant",
      company: "Neuroscience Laboratory, UC Berkeley",
      years: "2016 - 2020",
      description:
        "Assisted in designing and conducting experiments on the neural basis of decision-making and emotional regulation. Analyzed data using advanced statistical methods and neuroimaging techniques.",
      achievements: [
        "Co-authored 3 research papers",
        "Presented findings at 5 international conferences",
        "Developed a novel fMRI analysis protocol",
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <h2
        ref={titleRef}
        className="section-title experience__title"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        Experience
      </h2>

      <div className="experience__container">
        {experienceData.map((item, index) => (
          <div key={index} ref={(el) => (itemsRef.current[index] = el)} className="experience__item card">
            <div className="experience__header">
              <div className="experience__icon">
                <ExperienceIcon />
              </div>
              <div>
                <div className="experience__years" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  {item.years}
                </div>
                <h3 className="experience__position" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  {item.position}
                </h3>
                <div className="experience__company" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  {item.company}
                </div>
              </div>
            </div>

            <p className="experience__description" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
              {item.description}
            </p>

            <div className="experience__achievements">
              <h4 onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Key Achievements:
              </h4>
              <ul>
                {item.achievements.map((achievement, i) => (
                  <li key={i} onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
