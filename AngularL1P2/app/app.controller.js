"use strict";

function TodoFunction() {
  const vm = this;
  vm.todos = [];

  vm.add = function(newTodo) {
    newTodo.isComplete = false;
    vm.todos.push(angular.copy(newTodo));
    vm.newTodo = {};
  }
  vm.delete = function(index) {
    vm.todos.splice(index, 1);
  }
}

angular
  .module("todoApp")
  //Building a controller. 
  .controller("TodoController", TodoFunction);