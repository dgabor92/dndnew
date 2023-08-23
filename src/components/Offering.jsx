import React from "react";
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  ChevronDownIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  CodeIcon,
  LightBulbIcon,
  XIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Vámkezelés",
    description:
      "A vámkezelés során a vámkezelő a vámhatóság megbízásából a vámkezelési eljárásokat végzi.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Coaching",
    description:
      "A coaching egy olyan fejlesztési folyamat, amelynek során a coach (tréner) segíti a coachee (ügyfél) személyes és szakmai céljainak elérését.",
    icon: LightBulbIcon,
  },
  {
    name: "Webfejlesztés",
    description:
      "A webfejlesztés magába foglalja a weboldalak, webes alkalmazások, webes szolgáltatások fejlesztését.",
    icon: CodeIcon,
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
