
function myfunction() {
    let input = document.getElementById('myinput');
    let filter = input.value.toUpperCase();
    var li = document.getElementsByTagName('li')
console.log(li)
    for (let i = 0; i < li.length; i++) {
        a = li[i]
        let findt;
        findt = a.innerText
        if (findt.toUpperCase().indexOf(filter) > - 1) {
            li[i].style.display = 'block'
        }
        else {
            li[i].style.display = 'none'

        }
       
    }
}
