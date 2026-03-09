const educationData = [
  {
    title: "Elementary School",
    school: "Anuban Nakhon Pathom School",
    period: "2009-2017",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdQSCdyVeCSxAXz6avHVRJWdWlLMzzVEIoQ&s",
  },
  {
    title: "Junior High School",
    school: "Princess Chulabhorn Science High School Pathum Thani",
    period: "2017-2020",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-v1qVEQnlVsjVOlRH3wFN8_X9PeItJMMKw&s",
  },
  {
    title: "Higher Education",
    school: "National Institute of Technology, Sendai College (Sendai KOSEN)",
    period: "2020-Present",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YapfdDywtZJjmkQzMprjX1Jf3y_UCFn4ww&s",
  },
];

function Education() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold mb-12">Education</h1>

        <div className="relative border-l border-gray-300">
          {educationData.map((item, index) => (
            <div key={index} className="mb-12 ml-6">

              {/* Dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full ring-8 ring-white" />

              {/* Card */}
              <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">

                {/* Logo */}
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg">
                  <img
                    src={item.logo}
                    alt={`${item.school} logo`}
                    className="max-w-[70%] max-h-[70%]"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.school}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.period}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;