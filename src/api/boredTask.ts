import { repository } from "./base"

export default {
  async getRandomTask() {
    const { data } = await repository.get('http://www.boredapi.com/api/activity/')
    return data
  }
}