import "./main.scss";
import {Application, View} from 'backbone.marionette';
import  SectionView from './views/section';
import 'normalize.css';
import './main.scss';
import rootTemplate from './templates/rootTemplate.hbs';

const RootView = View.extend({
  template: rootTemplate,
  
  regions: {
    main: '#section-hook'
  },
  
  onRender() {
    this.showChildView('main', new SectionView())
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