Vue.createApp({
  data() {
    return {
      valueInput: "",
      needDoList: [],
      completedList: [],
    };
  },
  methods: {
    addTask() {
      if (this.valueInput === "") {
        return;
      }
      this.needDoList.push({ title: this.valueInput, id: Math.random() });
      this.valueInput = "";
    },
    handlyInput(e) {
      this.valueInput = e.target.value;
    },
    doCheck(index, type) {
      if (type === "need") {
        const completeMask = this.needDoList.splice(index, 1);
        this.completedList.push(...completeMask);
      } else {
        const noCompleteMask = this.completedList.splice(index, 1);
        this.needDoList.push(...noCompleteMask);
      }
    },
    deleteItem(index, type) {
      const todoList = type === "need" ? this.needDoList : this.completedList;
      todoList.splice(index, 1);
    },
  },
}).mount("#app");

