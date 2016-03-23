import template from './sidebar.template.html';
import controller from './sidebar.controller';
import './sidebar.styles.scss';

let sidebarComponent = {
    template,
    controller,
    replace: true
};

export default sidebarComponent;