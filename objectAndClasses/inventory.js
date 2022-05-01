function inventory(heroList) {
    let heroes = []
    for(let heroString of heroList){
        let tokens = heroString.split(' / ')
        let name = tokens[0]
        let level = Number(tokens[1])
        let items = tokens[2].split(', ').join(', ')
        let heroData = {
            name,
            level,
            items
        }
        heroes.push(heroData)
    }

    let sortedHeroes = heroes.sort((a,b)=>a.level - b.level)

    for(let hero of sortedHeroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )