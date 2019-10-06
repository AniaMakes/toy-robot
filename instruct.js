function instruct(e) {
    const input = document.getElementById("instructions");
    const instructions = input.value;
    const list = instructions.split(/\n/);
    console.log(list);
    list.forEach( i => console.log(i.length))
    // e.preventDefault();
}