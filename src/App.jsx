import React from 'react';
import profilePic from './images/profile.jpg';

const contacts = [
  { label: "Address", value: "San Matias Sto. Tomas, Pampanga" },
  { label: "Phone", value: "+63 976 662 8662" },
  { label: "E-mail", value: "capdavid.student@ua.edu.ph" }
];

function ContactSection() {
  return (
    <div className="bg-[#094d73]">
      <h2 className="text-2xl font-semibold bg-[#073e5c] text-white px-6 py-2">
        Contact
      </h2>
      <div className="space-y-3 text-sm text-white px-7 py-4 leading-relaxed">
        {contacts.map((item, index) => (
          <div key={index}>
            <p className="font-bold">{item.label}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="bg-white pt-4 pl-6 pr-8">
      <p className="text-base leading-relaxed text-gray-600">
        I’m an Information Technology student passionate about software development, IT systems, and databases. I enjoy collaborating in teams, managing tasks, and learning new skills. I’m committed to continuous growth and improving professionally.
      </p>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="bg-white pl-6 pr-8 pt-8">
      <div className="mb-6">
        <hr className="border-t-2 border-gray-300 mb-2" />
        <h2 className="text-2xl font-bold text-[#17567b]">Education</h2>
        <hr className="border-t-2 border-gray-300 mt-2" />
      </div>
      <div className="space-y-6">
        <div className="flex items-start gap-6">
          <div className="w-28 shrink-0"></div>
          <div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2 leading-relaxed">
              Bachelor of Science: Information Technology
            </h3>
            <p className="text-base text-black italic leading-relaxed mr-2">
              University of the Assumption - Ongoing 3rd Year Student<br />
              Del Pilar, Unisite Subdivision, San Fernando City, Pampanga
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="w-28 shrink-0"></div>
          <div>
            <h3 className="text-xl font-semibold text-[#363636] mb-2 leading-relaxed">
              Senior High School: GAS Strand
            </h3>
            <p className="text-base text-black italic leading-relaxed mr-2">
              University of the Assumption<br />
              Del Pilar, Unisite Subdivision, San Fernando City, Pampanga
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection({ jobs }) {
  return (
    <div className="bg-white pl-6 pr-8 pt-4">
      <div className="mb-2">
        <hr className="border-t-2 border-gray-300 mb-2" />
        <h2 className="text-2xl font-bold text-[#17567b]">Experience</h2>
        <hr className="border-t-2 border-gray-300 mt-2" />
      </div>
      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-28 text-sm text-gray-600 shrink-0 flex items-center">
              {job.startDate} – {job.endDate}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl text-[#363636] mb-1">{job.title}</h3>
              <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-700 text-base leading-relaxed">
                {job.responsibilities.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsSection({ skills }) {
  return (
    <div className="bg-[#094d73] pt-4">
      <h3 className="text-2xl font-semibold bg-[#073e5c] text-white px-6 py-2">
        Skills
      </h3>
      <ul className="list-disc list-outside pl-10 pr-6 py-4 space-y-3 leading-loose text-sm text-white">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

const mySkills = [
  'Professionalism and Work Ethic',
  'Frontend Development',
  'Database Management',
  'Communication and Collaboration'
];

const myExperience = [
  {
    startDate: "2023",
    endDate: "Present",
    title: "Coding & Tech Skills",
    responsibilities: [
      "Python",
      "Database SQL",
      "C++ Programming",
      "HTML, CSS, JavaScript"
    ]
  },
  {
    startDate: "2023",
    endDate: "2025",
    title: "IT Seminars",
    responsibilities: [
      "Innovate and Influence: Your Personal Brand's Role in IT Excellence",
      "TechKada 2025: Rise of the UAce"
    ]
  }
];

const App = () => {
  return (
    <div className="font-['Century_Gothic',_sans-serif] bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg overflow-hidden my-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <aside className="sm:col-span-1 bg-[#094d73]">
            <header className="flex flex-col px-6 bg-[#094d73] text-black">
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] overflow-hidden mx-auto mt-4 flex items-center justify-center">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-1 mb-8">
                  <h1 className="text-4xl font-bold text-white leading-tight">
                    Carl Anton <br /> David
                  </h1>
                </div>
              </div>
            </header>
            <ContactSection />
            <SkillsSection skills={mySkills} />
          </aside>

          <main className="sm:col-span-2 bg-white">
            <ProfileSection />
            <EducationSection />
            <ExperienceSection jobs={myExperience} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
