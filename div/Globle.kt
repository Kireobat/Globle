import java.io.File
import java.io.BufferedReader
import java.io.FileReader
import java.io.IOException

data class CountryData(
    val name: String,
    val distance: Map<String, Int>
)

fun main() {

    val country = "belarus"

    var guessedCountry = "australia"

    val jsonFilePath = "data/test.json"

    try {
        val reader = BufferedReader(FileReader(jsonFilePath))
        var line: String?
        val jsonString = StringBuilder()

        do {
            line = reader.readLine()
            if (line != null) {
                jsonString.append(line)
            }
        } while (line != null)

        val jsonData = jsonString.toString()

        val countryDataMap = parseJson(jsonData)

        // make a function that prints out the distance between country and guessedCountry

    
        printDistance(country, guessedCountry, countryDataMap)

        /*
        for ((countryNameFrom, dataFrom) in countryDataMap) {
            println("----------------------------------------")
            println("CountryFrom: $countryNameFrom")
            println("Distances:")
            for ((countryNameTo, distance) in dataFrom.distance) {
                if (countryNameTo != countryNameFrom) { // Exclude the current country from distances
                    println("${countryNameTo} - Distance: $distance")
                }
            }
            println("----------------------------------------")
        }
        */

        reader.close()
    } catch (e: IOException) {
        e.printStackTrace()
    }
}

fun parseJson(json: String): Map<String, CountryData> {
    val dataMap = mutableMapOf<String, CountryData>()

    val countryRegex = """"([^"]+)"\s*:\s*\{""".toRegex()
    val distanceRegex = """"([^"]+)":\s*(\d+)""".toRegex()

    
    val matches = countryRegex.findAll(json).toList()
    for (i in 0 until matches.size) {
        val countryMatch = matches[i]
        var countryName = countryMatch.groupValues[1]
        val countryDataStartIndex = countryMatch.range.last + 1
        val nextCountryDataStartIndex = if (i < matches.size - 1) matches[i + 1].range.first else json.length
        val countryDataSection = json.substring(countryDataStartIndex, nextCountryDataStartIndex - 1)

        val distanceMatches = distanceRegex.findAll(countryDataSection)
        val distanceMap = distanceMatches.map { match ->
            val otherCountry = match.groupValues[1]
            val distance = match.groupValues[2].toInt()
            otherCountry to distance
        }.toMap()

        dataMap[countryName] = CountryData(countryName, distanceMap)
    }

    return dataMap
}

fun printDistance(country: String, guessedCountry: String, countryDataMap: Map<String, CountryData>) {
    val dataFrom = countryDataMap[country]
    val dataTo = countryDataMap[guessedCountry]

    if (dataFrom != null && dataTo != null) {
        val distanceToGuessedCountry = dataFrom.distance[guessedCountry]
        println("Country: $country")
        println("Guessed Country: $guessedCountry")
        println("Distance Map: ${dataFrom.distance.afghanistan}")
        if (distanceToGuessedCountry != null) {
            println("Distance between $country and $guessedCountry: $distanceToGuessedCountry")
        } else {
            println("$guessedCountry is not a valid distance for $country.")
        }
    } else {
        println("Invalid country names.")
    }
}
