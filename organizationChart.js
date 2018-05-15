/*
Write a recursive function that prints the following organization chart.
Your output should be as shown below with proper indentation to show the hierarchy.

Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
*/
// const Kelley = {Kelly: ['Eric', 'Ana', 'Wes']}, Moissinac ={Moissinac: ['Amy', 'Chuck', 'Vinni']}, Hernandez = {Hernandez: ['Rowi', 'Inga', 'Morgan']}, Goler = {Goler: ['Eddie', 'Julie', 'Annie']}
// const Swain = {Swain: ['Blanch', 'Tom', 'Joe']}, VanDyck = {VanDyck: ['Sabrina', 'Michelle', 'Josh']}
// const Zhao = {Zhao: ['Richie', 'Sofia', 'Jen']}, Bosworth = {Bosworth: ['Steve', 'Kyle', 'Andra']}

// const Sandberg = {Sandberg: [Goler, Hernandez, Moissinac, Kelley]}
// const Schrage = {Schrage: [VanDyck, Swain]}
// const Schroepfer = {Schroepfer: [Bosworth, Zhao]}

// const Zuckerberg = [Schroepfer, Schrage, Sandberg]

// function organizationChart(top, current = top[0]) {

    

// }

// organizationChart(Zuckerberg)

// const list = 
// `Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes`

// function organizationChartString(string, index = 0) {
//     const arr = string.split('\n')

//     if (index < arr.length-1) {
//         console.log(arr[index])
//         index ++
//         organizationChartString(string, index)
//     } else {
//         return;
//     }

// }

// organizationChartString(list);

// function organizationChartStringAlt(string, index = 0) {
//     const arr = string.split('\n')

//     for (let i=0; i<arr.length; i++) {
//         console.log(arr[i])
//     }

//     return;
// }

const organization = [
    {name: 'Zuckerberg', boss: null},
        {name: 'Schroepfer', boss: 'Zuckerberg'},
            {name: 'Bosworth', boss: 'Schroepfer'},
                {name: 'Steve', boss: 'Bosworth'},
                {name: 'Kyle', boss:'Bosworth' },
                {name: 'Andra', boss: 'Bosworth'},
            {name: 'Zhao', boss:'Schroepfer' },
                {name: 'Richie', boss: 'Zhao'},
                {name: 'Sofia', boss:'Zhao' },
                {name: 'Jen', boss: 'Zhao'},
        {name: 'Schrage', boss:'Zuckerberg' },
            {name: 'VanDyck', boss:'Schrage' },
                {name: 'Sabrina', boss:'VanDyck' },
                {name: 'Michelle', boss:'VanDyck' },
                {name: 'Josh', boss:'VanDyck' },
            {name: 'Swain', boss:'Schrage' },
                {name: 'Blanch', boss:'Swain' },
                {name: 'Tom', boss:'Swain' },
                {name: 'Joe', boss:'Swain' },
        {name: 'Sandberg', boss:'Zuckerberg' },
            {name: 'Goler', boss:'Sandberg' },
                {name: 'Eddie', boss:'Goler' },
                {name: 'Julie', boss:'Goler' },
                {name: 'Annie', boss:'Goler' },
            {name: 'Hernandez', boss:'Sandberg' },
                {name: 'Rowi', boss:'Hernandez' },
                {name: 'Inga', boss:'Hernandez' },
                {name: 'Morgan', boss:'Hernandez' },
            {name: 'Moissinac', boss:'Sandberg' },
                {name: 'Amy', boss:'Moissinac' },
                {name: 'Chuck', boss:'Moissinac' },
                {name: 'Vinni', boss:'Moissinac' },
            {name: 'Kelley', boss:'Sandberg' },
                {name: 'Eric', boss:'Kelley' },
                {name: 'Ana', boss:'Kelley' },
                {name: 'Wes', boss:'Kelley' },
]

function organizationChart(chart, person = chart.find((person) => person.boss === null) , indent = 0, arr = []) {

    if (!arr[0]) {
        arr.push(person.name)
    }
    indent ++

    chart.forEach((individual) => {
        if (person.name === individual.boss) {
            if (indent == 1) {
                arr.push('  ' + individual.name)
            } else if (indent == 2) {
                arr.push('      ' + individual.name)
            } else if (indent == 3) {
                arr.push('          ' + individual.name)
            }
            organizationChart(chart, individual, indent, arr)
        }
    })

    if (arr.length === chart.length && indent == 4) {
        console.log(arr.join(''))
        return arr.join('')
    }

}

organizationChart(organization)