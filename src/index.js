import './styles/index.css';
let parrafo = document.querySelector('.header__paragraph');
let points_count = 1;

const Loop = () => {
    setTimeout( () => {   
        if(points_count === 4){
            points_count = 0;
        }
        Animation_paragraph(points_count);
        points_count++;
        Loop();
        } ,250);
};
Loop();

function Animation_paragraph(numberPoints = new Number()){
    let points = '';
    switch (numberPoints) {
        case 1:
            points = '.'
            break;
        case 2:
            points = '..'
            break;
        case 3:
            points = '...'
            break;
        default:
            points = ''
            break;
    }
    parrafo.innerHTML = `In Progress ${points}`;      
}