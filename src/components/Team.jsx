const people = [
  {
    name: "Deutsch Pál",
    role: "Alapító, CEO & Vámügynök",
    imageUrl:
      "https://ui-avatars.com/api/?name=Deutsch+Pál&background=CCCCCC&color=black&size=150",
    bio: "Tapasztalt vállalkozó vagyok, aki cégalapítóként és CEO-ként irányítja vállalkozását. Több évtizedes vámügynöki szakértelmemmel segítem ügyfeleimet az internacionális kereskedésben",
  },
  {
    name: "Deutschné Bacsó Ágnes",
    role: "Alapító, COO & Vámügynök",
    imageUrl:
      "https://ui-avatars.com/api/?name=Deutschné+Bacsó+Ágnes&background=CCCCCC&color=black&size=150",
    bio: "Tapasztalt vállalkozó vagyok, aki cégalapítóként és COO-ként irányítja vállalkozását. Több évtizedes vámügynöki szakértelmemmel segítem ügyfeleimet az internacionális kereskedésben",
  },
  {
    name: "Deutsch Beáta",
    role: "Alapító & CMO",
    imageUrl:
      "https://ui-avatars.com/api/?name=Deutsch+Beáta&background=CCCCCC&color=black&size=150",
    bio: "Egy elkötelezett és céltudatos nő vagyok. A vállalkozói szellem vezérel, és célom, hogy innovatív megoldásokkal segítsek megoldani mindennapi problémákat.",
  },
  {
    name: "Deutsch Tamás",
    role: "Alapító & Coach",
    imageUrl:
      "https://ui-avatars.com/api/?name=Deutsch+Tamás&background=CCCCCC&color=black&size=150",
    bio: "Lelkes vezető vagyok, aki a technológia világát és az emberek fejlődését egyesíti. Cégalapítóként és coach-ként segítek vállalkozásoknak és egyéneknek a siker felé vezető úton.",
  },
  {
    name: "Deutsch Gábor",
    role: "Alapító & Fejlesztő",
    imageUrl:
      "https://ui-avatars.com/api/?name=Deutsch+Gábor&background=CCCCCC&color=black&size=150",
    bio: "Egy elkötelezett cégalapító és fejlesztő vagyok, aki szenvedéllyel hozza létre és fejleszti az innovatív megoldásokat.",
  },

  // More people...
];

export default function Team() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
            Csapatunk
          </p>
          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 gap-8 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="max-h-0 aspect-w-2 aspect-h-1 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover shadow-lg rounded-lg sm:block hidden"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
