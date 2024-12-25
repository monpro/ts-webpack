import {Button} from '@components/Button';
import {sum} from '@utils/helper';

const button = new Button('click me');
document.body.innerHTML = button.render();
console.log(sum(1, 2));