import prisma from '../config/db.js';

export async function findAll(f = {}) {
  return prisma.task.findMany({where: f});

}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
