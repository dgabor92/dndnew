import {
  ShieldCheckIcon,
  CodeIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Vámkezelés",
    description:
      "A vámkezelés során a vámkezelő a vámhatóság megbízásából a vámkezelési eljárásokat végzi.",
    icon: ShieldCheckIcon,
    link: "#",
  },
  {
    name: "Coaching",
    description:
      "A coaching egy olyan fejlesztési folyamat, amelynek során a coach (tréner) segíti a coachee (ügyfél) személyes és szakmai céljainak elérését.",
    icon: LightBulbIcon,
    link: "https://coaching.dndnew.hu/",
  },
  {
    name: "Webfejlesztés",
    description:
      "A webfejlesztés magába foglalja a weboldalak, webes alkalmazások, webes szolgáltatások fejlesztését.",
    icon: CodeIcon,
    link: "https://dgabor.com/",
  },
];

function Offering() {
  return (
    <div className="relative bg-white py-12 sm:py-12 md:py-4 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Amit nyújtani tudunk Önnek
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                  {/* need a section for link */}
                  {feature.link && feature.link !== "#" ? (
                    <div className="mt-6">
                      <button
                        onClick={() => (window.location.href = feature.link)}
                        className="inline-flex items-center text-base font-medium text-cyan-700 hover:text-cyan-800"
                      >
                        Bővebben
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offering;
