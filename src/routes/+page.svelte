<script lang="ts">
  import { onMount } from "svelte";

  import data from "$lib/data/test.json";

  interface CountryData {
    [country: string]: {
      name: string;
      distance: {
        [country: string]: number;
      };
    };
  }

  const jsonData: CountryData = data;

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
  ];

  let correctCountry: string = "";

  let guess: string = "";

  let distance = 0;

  let countryDoesNotExist = false;

  onMount(() => {
    correctCountry =
      countriesList[Math.floor(Math.random() * countriesList.length)];
  });

  const guessCountry = (guess: string) => {
    console.log(guess);

    guess = guess.toLowerCase();

    if (!countriesList.includes(guess)) {
      countryDoesNotExist = true;
      return;
    }

    if (guess != correctCountry) {
      distance = jsonData[correctCountry]?.distance[guess];

      guesses = [...guesses, { guess, distance }];

      guess = "";
    } else {
      distance = jsonData[correctCountry]?.distance[guess];

      guesses = [...guesses, { guess, distance }];

      guess = "";

      alert("You got it!");
    }

    countryDoesNotExist = false;
  };

  interface Guess {
    guess: string;
    distance: number;
  }

  let guesses: Guess[] = [];
</script>

<div class="bg-slate-400 h-full">
  <div class="flex justify-center">
    <div class="flex flex-col text-center">
      <h1 class="text-4xl mt-36">Globle Clone</h1>
      <div class="mt-8">
        <div class="flex">
          <div
            class="bg-white border-2 border-gray-400 rounded-lg p-2 border-r-0 rounded-r-none"
          >
            <h1>_</h1>
          </div>
          <input
            type="text"
            class="border-2 border-gray-400 rounded-lg p-2 border-l-0 rounded-l-none"
            placeholder="Guess a Country..."
            bind:value={guess}
            on:keypress={(e) => {
              if (e.key === "Enter") {
                guessCountry(guess);
              }
            }}
          />
        </div>
      </div>

      {#if countryDoesNotExist}
        <div class="bg-red-500 rounded-lg px-8 py-4 flex">
          <div class="flex flex-col justify-center mr-2">
            <h1>X</h1>
          </div>
          <div class="flex flex-col text-left">
            <h1 class="text-xl font-bold">Error: Country does not exist</h1>
            <p>The name you entered is not correct</p>
          </div>
        </div>
      {/if}

      <div>
        <h1 class="text-2xl mt-4">Your guesses:</h1>
        {#each guesses as guessItem}
          <p>{guessItem.guess}: {guessItem.distance}</p>
        {/each}
      </div>
    </div>
  </div>
</div>
