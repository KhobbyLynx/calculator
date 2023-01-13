(function() {

    let screen = document.querySelector('input');
    let equal = document.querySelector('.btn-equal')
    let buttons = document.querySelectorAll('.btns')
    let clear = document.querySelector('.btn-clear');
    let del = document.querySelector('.btn-del');
    

    buttons.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = '';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e) {
        screen.value = '';
    }) 

    del.addEventListener('click', function() {
        screen.value = screen.value.slice(0, -1);        
    })
})(); 