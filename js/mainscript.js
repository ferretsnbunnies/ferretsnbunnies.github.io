$(function() {


    
    /*************************** RATE ICONS */
    let list = document.getElementsByClassName('rate__icon');

    let icon = document.getElementById('iconTemplate');
    let iconHalf = document.getElementById('iconHalfTemplate');

    

    for (let elem of list) {
        elem.innerHTML = '';
        let cloned;
        let rgx = new RegExp(/\w+/gm);
        let classes = elem.getAttribute('class');
        classes = classes.match(rgx);

        for (let cls of classes) {
            console.log(cls);
            switch (cls) {
                case "rate__empty":
                    cloned = icon.cloneNode(true);
                    elem.appendChild(cloned);
                    break;
                case "rate__fill":
                    cloned = icon.cloneNode(true);
                    elem.appendChild(cloned);
                    break;
                case "rate__halfFill":
                    cloned = iconHalf.cloneNode(true);
                    elem.appendChild(cloned);
                    break;
                default:
                    break;
            }
        }
    }
});