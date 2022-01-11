import LeftDelete from './leftDelete/index.js';
import LongDelete from './longDelete/index.js';

const components = [
    LeftDelete,
    LongDelete
]

const install = function(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  };
  
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  
export default {
    version: '1.0.3',
    install,
    LeftDelete,
    LongDelete
}