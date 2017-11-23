import "./main.scss";
import {Application, View} from 'backbone.marionette';
import  {IndexView} from './views/index';
import 'normalize.css';
import './main.scss';
import rootTemplate from './templates/rootTemplate.hbs';

const RootView = View.extend({
  template: rootTemplate,
  
  regions: {
    header: '#header-hook',
    main: '#body-hook'
  },
  
  onRender() {
  }
});

const App = Application.extend({
  region: '#root',

  onStart() {
    this.showView(new RootView());
  }
});

const app = new App();
app.start();