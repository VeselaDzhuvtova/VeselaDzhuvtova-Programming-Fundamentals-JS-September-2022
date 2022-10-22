function inventory(input) {
    let collect = input.shift();
    let taskList = collect.split(', ');
    let commands = input.slice();
    let currentLine = commands.shift();

    while (commands !== 'Craft!') {
        let lineArgs = currentLine.split(' - ');
        let command = lineArgs[0];
        let item = lineArgs[1];

        switch (command) {
            case 'Collect':
                if (!taskList.includes(item)) {
                    taskList.push(item);
                }
                break;

            case 'Drop':
                let index = taskList.indexOf(item);
                if (taskList.includes(item)) {
                    taskList.splice(index, 1);
                }
                break;

            case 'Combine Items':
                let splitItem = item.split(':');
                let oldItem = splitItem[0];
                let newItem = splitItem[1];
                let oldItemIndex = collect.indexOf(oldItem);
                if (taskList.includes(oldItem)) {
                    taskList.splice(oldItemIndex + 1, 0, newItem);
                }
                break;

            case 'Renew':
               let indexOne = taskList.indexOf(item);
                if (taskList.includes(item)) {
                    taskList.splice(indexOne, 1);
                    taskList.push(item);
                    break;
                }
        }
        currentLine = commands.shift();
        if (command === 'Craft!') {
            console.log(taskList.join(', '))
            break;
        }
        
    }

}

inventory
    // (['Iron, Wood, Sword',

    //     'Collect - Gold',

    //     'Drop - Wood',

    //     'Craft!'

    // ])
    // Iron, Sword, Gold;
    ([ 

        'Iron, Sword', 
      
        'Drop - Bronze', 
      
        'Combine Items - Sword:Bow', 
      
        'Renew - Iron', 
      
        'Craft!' 
      
      ])