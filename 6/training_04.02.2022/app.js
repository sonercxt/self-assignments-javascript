// Cabbar, Kerem ve Sinan ortaklasa balik ciftligi projesine girerler. Cabbar ve Keremin referansi ile Sinan da bizlerden bir program istemektedir.
// Uc kafadar bizden ciftlikteki baliklarin satisi icin bir online sistem istemektedirler. Online satis sistemi asagidaki sorulara cevap verebilmelidir.

// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
// 6) Toplam balik stoku ne kadardir?
// 7) En pahali olan balik hangisidir?
// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
// 10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?


// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
let findFishFromEurope = (pFishList, pEurope) => {

    let fishCostTen = pFishList.filter(fishPrice => {
        return fishPrice.price < 10
    }).map(fish => {
        return pEurope.filter(country => {
            return country == fish.originCountry
        })
    }).filter(pFish => {
        return pFish != ""
    }).join().split(",")

    let fishName = fishCostTen.map(country => {
        return pFishList.filter(pFish => {
            return pFish.originCountry == country
        })
    }).map(fish => fish.map(pFish => pFish.fishType).join())
    return fishName
}

console.log(findFishFromEurope(fishFarm, europeanCountries))

// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
const swissRomandeRegion = ["BE", "FR", "JU", "VD", "VS", "NE", "GE"]

let saleSwissRomande = (pFishFarm, pSwissRomandeRegion) => {

    let fishList = pFishFarm.filter(pFish => {
        return pFish.saleLocations.indexOf("BE") !== -1 || pFish.saleLocations.indexOf("FR") !== -1 || pFish.saleLocations.indexOf("JU") !== -1 || pFish.saleLocations.indexOf("VD") !== -1 ||
            pFish.saleLocations.indexOf("VS") !== -1 || pFish.saleLocations.indexOf("NE") !== -1 || pFish.saleLocations.indexOf("GE") !== -1
    }).filter(pFish => pFish.season == "Winter" || pFish.season == "Autumn")

    return fishList.reduce((a, b) => a + b.price, 0) / fishList.length

}

console.log(saleSwissRomande(fishFarm, swissRomandeRegion))


// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?










// reduce((a,b) => a + b.price, 0)
// .filter( fish => fish.indexOf(region) != -1 )


// const fishFarm = [ 
//     { 
//         fishType: "Salmon",
//         price: 15.70,
//         entryDate: new Date(2021, 0, 1),    // 01.01.2021
//         durationInDays: 30,
//         itemWeightInGrams: 145,
//         originCountry: "Norway", 
//         season: "Winter", 
//         stockVolumeInKg: 6500,
//         saleLocations: ["ZH", "GE", "BE", "VD"],
//     },