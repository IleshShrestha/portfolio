export default function WhatDoSection() {
  const ulClass =
    "text-[10px] text-(--primary-text) grid lg:grid-cols-3 grid-cols-3 gap-2 list-disc list-outside px-3";
  return (
    <>
      <p className="text-[8px] pb-2">{"<!-- What I do Section -->"}</p>
      <ol className="text-[12px] flex flex-col gap-2 text-white">
        <li className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>1.</span>
            <span>Front-End Development</span>
          </div>
          <ul className={ulClass}>
            <li>HTML5 / CSS3 / JavaScript</li>
            <li>Tailwind CSS or Bootstrap</li>
            <li>Web animations & transitions</li>
            <li>Responsive layout using Flexbox & Grid</li>
            <li>React.js / Vue.js integration</li>
            <li>Next.js / Vite</li>
          </ul>
        </li>
        <li className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>2.</span>
            <span>Back-End Development</span>
          </div>
          <ul className={ulClass}>
            <li>Flask / Django / FastAPI</li>
            <li>Node / Express</li>
            <li>MySQL / PostgreSQL</li>
            <li>API Development & Integration (REST, GraphQL)</li>
            <li>JWT or OAuth2.0 Authentication</li>
          </ul>
        </li>
        <li className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>3.</span>
            <span>DevOps</span>
          </div>
          <ul className={ulClass}>
            <li>Docker / Kubernetes</li>
            <li>GitHub Actions</li>
            <li>AWS Cloud Services</li>
            <li>Monitoring & Logging (Prometheus, Grafana)</li>
            <li>Environment Management</li>
          </ul>
        </li>
      </ol>
    </>
  );
}
