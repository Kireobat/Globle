const pupperteer = require('puppeteer');
const fs = require('fs');

const jsonData = fs.readFileSync('./data/test.json', 'utf-8');

const countriesData = JSON.parse(jsonData);

const main = async () => {
    const browser = await pupperteer.launch();
    const page = await browser.newPage();

    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +
  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
    await page.setUserAgent(userAgent);

    let countryFrom = "";
    let countryTo = "";

    /*
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
    */

    let countries1 = [
        
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
        "iraq",
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
        "zimbabwe"
    ]

    let countries2 = [
        
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
        "iraq",
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
        "zimbabwe"
    ]

    let website = 'https://www.geodatos.net/en/distances/countries/from-' + countryFrom + '/to-' + countryTo;

    let distance = 0;

    console.log("starting first loop");

    for (let i = 0; i < countries1.length; i++) {
        const newCountry = {
            name: countries1[i],
            distance: {}
        };

        countriesData[countries1[i]] = newCountry;

        console.log("starting second loop for the " + i + "th time");

        for (let j = 0; j < countries2.length; j++) {

            if (countries1[i] != countries2[j]) {

                if (countries1[i] == "andorra" || countries2[j] == "andorra") {
                    distance = 0;

                    countriesData[countries1[i]].distance[countries2[j]] = distance;

                    continue
                }

                try {
                    website = 'https://www.geodatos.net/en/distances/countries/from-' + countries1[i] + '-to-' + countries2[j];
                await page.goto(website);

                console.log("URL: " + website);

                const cookieButtonSelector = '#ez-accept-all';

                let buttonExists = await page.waitForSelector(cookieButtonSelector, { timeout: 50 }).then(() => true).catch(() => false);

                if (buttonExists) {
                    await page.click(cookieButtonSelector);
                    console.log('Button clicked');
                } else {
                    console.log('Button not found');
                }


                await page.waitForSelector('p.text-main');

                let elements = await page.$$('p.text-main');

                let secondElement = elements[1];

                

                if (secondElement) {
                    distance = await page.evaluate(el => el.innerHTML, secondElement);

                    console.log("Distance: " + distance);

                    distance = distance.replace(' km', '');
                    distance = distance.replace(',', '');
                    distance = distance.replace(' ', '');

                    distance = Number(distance);

                    countriesData[countries1[i]].distance[countries2[j]] = distance;
                } else {
                    distance = -1;

                    countriesData[countries1[i]].distance[countries2[j]] = distance;
                }
                } catch (error) {
                    page.screenshot({ path: 'error.png' });

                    console.log("Error: " + error);
                }
                
            } else {
                distance = 0;

                countriesData[countries1[i]].distance[countries2[j]] = distance;
            }
            
        }

        const updatedJsonData = JSON.stringify(countriesData, null, 2);

        fs.writeFileSync('test.json', updatedJsonData, 'utf-8');
    }

    console.log("done, hopefully");

    await browser.close();
};

main();