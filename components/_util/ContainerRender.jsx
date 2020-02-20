import PropTypes from './vue-types';

export default {
  props: {
    autoMount: PropTypes.bool.def(true),
    autoDestroy: PropTypes.bool.def(true),
    visible: PropTypes.bool,
    forceRender: PropTypes.bool.def(false),
    parent: PropTypes.any,
    getComponent: PropTypes.func.isRequired,
    getContainer: PropTypes.func.isRequired,
    containerClass:PropTypes.any,
    children: PropTypes.func.isRequired,
  },

  mounted() {
    if (this.autoMount) {
      this.renderComponent();
    }
  },

  updated() {
    if (this.autoMount) {
      this.renderComponent();
    }
  },

  beforeDestroy() {
    if (this.autoDestroy) {
      this.removeContainer();
    }
  },
  methods: {
    removeContainer() {
      if (this.container) {
        this._component && this._component.$destroy();
        this.container.parentNode.removeChild(this.container);
        this.container = null;
        this._component = null;
      }
    },

    renderComponent(props = {}, ready) {
      const { visible, forceRender, getContainer,containerClass, parent } = this;
      const self = this;
      if (visible || parent.$refs._component || forceRender) {
        let el = this.componentEl;
        if (!this.container) {
          this.container = getContainer();
          el = document.createElement('div');
          this.componentEl = el;
          this.container.appendChild(el);
        }
        
        if(this.container.setAttribute && this.container.removeAttribute){
	        let classNames=[];
		      if(typeof containerClass == "string"){
		      	classNames.push(containerClass);
		      }else if(containerClass && typeof containerClass == "object"){
		      	for(let className in containerClass){
		      		containerClass[className] && classNames.push(className);
		      	}
		      }
		      
		      if(!classNames.length){
		      	this.container.removeAttribute("class");
		      }else{
		      	this.container.setAttribute("class",classNames.join(' '));
		      }
        }
        
        if (!this._component) {
          this._component = new this.$root.constructor({
            el: el,
            parent: self,
            data: {
              comProps: props,
            },
            mounted() {
              this.$nextTick(() => {
                if (ready) {
                  ready.call(self);
                }
              });
            },
            updated() {
              this.$nextTick(() => {
                if (ready) {
                  ready.call(self);
                }
              });
            },
            render() {
              return self.getComponent(this.comProps);
            },
          });
        } else {
          this._component.comProps = props;
        }
      }
    },
  },

  render() {
    return this.children({
      renderComponent: this.renderComponent,
      removeContainer: this.removeContainer,
    });
  },
};
