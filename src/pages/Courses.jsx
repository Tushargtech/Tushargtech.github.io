import React from 'react';
import { Route, Routes } from 'react-router-dom';

const NewCourses = () => <div><h2>New Courses</h2></div>;
const Java = () => <div><h2>Java</h2></div>;
const DotNet = () => <div><h2>.NET</h2></div>;
const Python = () => <div><h2>Python</h2></div>;
const SoftwareTesting = () => <div><h2>Software Testing</h2></div>;
const WebDesigning = () => <div><h2>Web Designing - Full Stack Development</h2></div>;
const ProgrammingLanguages = () => <div><h2>Programming Languages</h2></div>;
const CloudComputing = () => <div><h2>Cloud Computing</h2></div>;
const Salesforce = () => <div><h2>Salesforce</h2></div>;
const CadTraining = () => <div><h2>CAD Training</h2></div>;
const MobileAppDev = () => <div><h2>Mobile Application Development</h2></div>;
const NetworkSecurity = () => <div><h2>Network & Security</h2></div>;
const DigitalMarketing = () => <div><h2>Digital Marketing</h2></div>;
const MisExcel = () => <div><h2>MIS - Advanced Excel - BI Tools</h2></div>;
const MultimediaAnimation = () => <div><h2>Multimedia Animation - Graphics</h2></div>;
const Erp = () => <div><h2>ERP</h2></div>;
const IndustrialTraining = () => <div><h2>Industrial Training</h2></div>;
const MicrosoftDynamic = () => <div><h2>Microsoft Dynamic</h2></div>;
const Others = () => <div><h2>Others</h2></div>;

const Courses = () => {
  return (
    <Routes>
      <Route path="new-courses" element={<NewCourses />} />
      <Route path="java" element={<Java />} />
      <Route path=".net" element={<DotNet />} />
      <Route path="python" element={<Python />} />
      <Route path="software-testing" element={<SoftwareTesting />} />
      <Route path="web-designing" element={<WebDesigning />} />
      <Route path="programming-languages" element={<ProgrammingLanguages />} />
      <Route path="cloud-computing" element={<CloudComputing />} />
      <Route path="salesforce" element={<Salesforce />} />
      <Route path="cad-training" element={<CadTraining />} />
      <Route path="mobile-app-dev" element={<MobileAppDev />} />
      <Route path="network-security" element={<NetworkSecurity />} />
      <Route path="digital-marketing" element={<DigitalMarketing />} />
      <Route path="mis-excel" element={<MisExcel />} />
      <Route path="multimedia-animation" element={<MultimediaAnimation />} />
      <Route path="erp" element={<Erp />} />
      <Route path="industrial-training" element={<IndustrialTraining />} />
      <Route path="microsoft-dynamic" element={<MicrosoftDynamic />} />
      <Route path="others" element={<Others />} />
    </Routes>
  );
};

export default Courses;