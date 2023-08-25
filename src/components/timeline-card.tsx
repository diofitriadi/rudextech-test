import React from "react";

const TimelineItem = ({ date, title, content }) => {
  return (
    <div className="mb-8 flex items-start mt-5">
      <div className="relative mr-4 mt-[2px]">
        <div className="bg-orange rounded-full h-4 w-4 flex items-center justify-center">
          <div className="bg-primary rounded-full h-3 w-3"></div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#5C6CA5] bg-opacity-30 h-[50px] w-0.5"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[#D3D3D3]">{content}</div>
        <p className="text-[#9F9F9F]">{date}</p>
      </div>
    </div>
  );
};

function TimelineCard() {
  const timelineData = [
    {
      date: "11 JUL 8:10 PM",
      content: "Nick Mark Mentioned Sara Smith In New Post",
    },
    {
      date: "11 JUL 8:10 PM",
      content: "The Post Name was removed by Nick Mark",
    },
    {
      date: "11 JUL 8:10 PM",
      content: "Patrick Sulivan Published a New Post",
    },
    {
      date: "11 JUL 8:10 PM",
      content: "Patrick Sulivan Published a New Post",
    },
    {
      date: "11 JUL 8:10 PM",
      content: "240+ users have subscribed to Newsletter #1",
    },
    {
      date: "11 JUL 8:10 PM",
      content: "The Post Name was suspanded by Nick Mark",
    },
    // Add more timeline items as needed
  ];

  return (
    <div className="bg-secondary rounded-lg shadow w-full pt-5 pb-20 px-5 text-xs">
      <h1 className="text-2xl font-semibold">Project Timeline</h1>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} date={item.date} content={item.content} />
      ))}
    </div>
  );
}

export default TimelineCard;
