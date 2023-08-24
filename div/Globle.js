const countries = require("./data/test.json");
const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

let countriesList = [
        
    "afghanistan",
    "albania",
    "algeria",
    "andorra",
    "angola",
    "antigua-and-barbuda",
    "argentina",
    "armenia",
    "australia",
    "austria",
    "azerbaijan",
    "bahamas",
    "bahrain",
    "bangladesh",
    "barbados",
    "belarus",
    "belgium",
    "belize",
    "benin",
    "bhutan",
    "bolivia",
    "bosnia-and-herzegovina",
    "botswana",
    "brazil",
    "brunei",
    "bulgaria",
    "burkina-faso",
    "burundi",
    "cabo-verde",
    "cambodia",
    "cameroon",
    "canada",
    "central-african-republic",
    "chad",
    "chile",
    "china",
    "colombia",
    "comoros",
    "congo",
    "costa-rica",
    "croatia",
    "cuba",
    "cyprus",
    "czechia",
    "democratic-republic-of-the-congo",
    "denmark",
    "djibouti",
    "dominica",
    "dominican-republic",
    "ecuador",
    "egypt",
    "el-salvador",
    "equatorial-guinea",
    "eritrea",
    "estonia",
    "eswatini",
    "ethiopia",
    "fiji",
    "finland",
    "france",
    "gabon",
    "gambia",
    "georgia",
    "germany",
    "ghana",
    "greece",
    "grenada",
    "guatemala",
    "guinea",
    "guinea-bissau",
    "guyana",
    "haiti",
    "vatican",
    "honduras",
    "hungary",
    "iceland",
    "india",
    "indonesia",
    "iran",
    /*"iraq",
    "ireland",
    "israel",
    "italy",
    "ivory-coast",
    "jamaica",
    "japan",
    "jordan",
    "kazakhstan",
    "kenya",
    "kiribati",
    "kuwait",
    "kyrgyzstan",
    "laos",
    "latvia",
    "lebanon",
    "lesotho",
    "liberia",
    "libya",
    "liechtenstein",
    "lithuania",
    "luxembourg",
    "madagascar",
    "malawi",
    "malaysia",
    "maldives",
    "mali",
    "malta",
    "marshall-islands",
    "mauritania",
    "mauritius",
    "mexico",
    "micronesia",
    "moldova",
    "monaco",
    "mongolia",
    "montenegro",
    "morocco",
    "mozambique",
    "myanmar",
    "namibia",
    "nauru",
    "nepal",
    "netherlands",
    "new-zealand",
    "nicaragua",
    "niger",
    "nigeria",
    "north-korea",
    "north-macedonia",
    "norway",
    "oman",
    "pakistan",
    "palau",
    "palestinian-territory",
    "panama",
    "papua-new-guinea",
    "paraguay",
    "peru",
    "philippines",
    "poland",
    "portugal",
    "qatar",
    "romania",
    "russia",
    "rwanda",
    "saint-kitts-and-nevis",
    "saint-lucia",
    "saint-vincent-and-the-grenadines",
    "samoa",
    "san-marino",
    "sao-tome-and-principe",
    "saudi-arabia",
    "senegal",
    "serbia",
    "seychelles",
    "sierra-leone",
    "singapore",
    "slovakia",
    "slovenia",
    "solomon-islands",
    "somalia",
    "south-africa",
    "south-korea",
    "south-sudan",
    "spain",
    "sri-lanka",
    "sudan",
    "suriname",
    "sweden",
    "switzerland",
    "syria",
    "tajikistan",
    "tanzania",
    "thailand",
    "timor-leste",
    "togo",
    "tonga",
    "trinidad-and-tobago",
    "tunisia",
    "turkey",
    "turkmenistan",
    "tuvalu",
    "uganda",
    "ukraine",
    "united-arab-emirates",
    "united-kingdom",
    "united-states",
    "uruguay",
    "uzbekistan",
    "vanuatu",
    "venezuela",
    "vietnam",
    "yemen",
    "zambia",
    "zimbabwe"*/
]

let country = countriesList[Math.floor(Math.random() * countriesList.length)];
let numberGuesses = 0;

const guessCountry = () => {
    rl.question('Guess a country: ', (guessedCountry) => {
        guessedCountry = guessedCountry.toLowerCase();
        
        console.log("Your guess was: " + countries[country].distance[guessedCountry] + " km away from the correct answer.");
        
        numberGuesses++;
        
        if (guessedCountry === country) {
            console.log("Congratulations! You got the answer in " + numberGuesses + " guesses.");
            rl.close();
        } else {
            guessCountry(); // Recursive call to prompt for the next guess
        }
    });
};

guessCountry();