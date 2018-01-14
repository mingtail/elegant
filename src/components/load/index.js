import LoadComponent from './load'


const Load = {
  install (vue, options = {}) {

    vue.prototype.$load = {
      tNode: '',  // tNode实例
      timerIndex: 0,
      show() {
        let that = this;
        if(this.tNode === '') {
          // 1. 创建构造器, 导入组件模板
          const Load = vue.extend(LoadComponent);
          // 2. 创建实例, 挂载到文档
          this.tNode = new Load().$mount().$el;
          // 3. 把创建的实例添加到body中
          document.body.appendChild(this.tNode);
        }

        this.tNode.style.display = 'block';

        if(this.timerIndex !== 0) {
          clearTimeout(this.timerIndex);
        }
        this.timerIndex = setTimeout(function() {
          that.tNode.style.display = 'none';
        }, 5000);
      },
      hide() {
        if(this.tNode !== '') {
          this.tNode.style.display = 'none';
          clearTimeout(this.timerIndex);
          this.timerIndex = 0;
        }
      }
    };

  },
}

export default Load
