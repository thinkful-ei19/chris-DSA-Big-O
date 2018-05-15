/*
Step through the code and find the input to the program, input to each recursive calls,
output of each recursive calls and the output of the program.
The purpose of this exercise is not for you to copy paste the code and find out the output but rather step through each line,
analyze each step to understand how recursion works.
*/

const animalHierarchy = [
    {id: 'Animals', parent: null},
        {id: 'Mammals', parent: 'Animals'},
            {id: 'Dogs', parent:'Mammals' },
            {id: 'Cats', parent:'Mammals' },
                {id: 'Golden Retriever', parent: 'Dogs'},
                {id: 'Husky', parent:'Dogs' },
                {id: 'Bengal', parent:'Cats' }
]

function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}

console.log(traverse(animalHierarchy, null));
console.log(traverse(animalHierarchy, 'Animals'));
console.log(traverse(animalHierarchy, 'Mammals'));
console.log(traverse(animalHierarchy, 'Dogs'));
console.log(traverse(animalHierarchy, 'Cats'));