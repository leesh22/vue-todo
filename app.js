
new Vue ({
  el: '#tasks',

  data: {
    task: { title: '', description: '', dateAdded: '' },
    tasks: []
  },

  ready: function() {
    this.getTasks();
  },

  methods: {

    getTasks: function(){
      var tasks = [
        {
          id: 1,
          title: 'learn vue.js',
          description: 'create something using vue.js',
          dateAdded: '2016-04-06'
        },
        {
          id: 2,
          title: 'learn more vue.js',
          description: 'create something else using vue.js',
          dateAdded: '2016-04-06'
        },
        {
          id: 3,
          title: 'add to github',
          description: 'publish the finished application on github',
          dateAdded: '2016-04-06'
        }
      ];
      this.$set('tasks', tasks);
    },

    addTask: function(){
      if(this.task.title){
        this.tasks.push(this.task);
        this.task = { title: '', description: '', dateAdded: '' };
      }
    },

    completeTask: function(){
      var tick = document.getElementById('complete').parentNode;
      tick.className += " completed";
    }

  }
});
