import React from 'react';


const UpcomingBatches = () => {
  const batches = [
    {
      title: "JAVA FULL STACK DEVELOPER",
      branch: "South Ex.",
      startDate: "15-07-2024",
      image: "/java.png",
    },
    {
      title: "PYTHON FULL STACK DEVELOPER",
      branch: "South Ex.",
      startDate: "15-07-2024",
      image: "/python.png",
    },
    {
      title: "WEB DESIGNING",
      branch: "South Ex.",
      startDate: "15-07-2024",
      image: "/web-design.png",
    },
    {
      title: "AWS",
      branch: "South Ex.",
      startDate: "15-07-2024",
      image: "/aws.png",
    },
  ];

  return (
    <section className="upcoming-batches">
      <h2>Upcoming Batches</h2>
      <div className="branch-filter">
        <label htmlFor="branch">Select a Branch</label>
        <select id="branch">
          <option value="all">All</option>
          <option value="south-ex">South Ex.</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="batches-list">
        {batches.map((batch, index) => (
          <div key={index} className="batch-card">
            <div className="batch-image">
              <img src={batch.image} alt={batch.title} />
            </div>
            <div className="batch-details">
              <h3>{batch.title}</h3>
              <p>Branch: {batch.branch}</p>
              <p>Starting Date: {batch.startDate}</p>
              <button>Request A Call Back</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingBatches;