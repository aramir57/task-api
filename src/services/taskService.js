import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  const f = {};
  if(completed != undefined){
    f.completed = completed === 'true';
  }
  return taskRepository.findAll(f);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
