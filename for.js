let i = 0;
for (i = 0; i < 10; i++) {
    console.log(i);
}

let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
for (let i = 0; i < color.length; i++) {
    console.log(color[i])
}

let Name = ['Jonathan', 'Robert', 'Sarah', 'เจน', 'Kevin']
for (let i = 0; i < Name.length; i++) {
    if (Name[i].length > 6){
        console.log(`สวัสดีคุณ ${Name[i]}`)
    }
    else {
        console.log(`Hello ${Name[i]}`)
    }
}