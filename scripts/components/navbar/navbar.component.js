import template from './navbar.template.html';
import controller from './navbar.controller';
import './navbar.styles.scss';

let navbarComponent = {
    template,
    controller,
    replace: true
};

export default navbarComponent;