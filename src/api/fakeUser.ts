import { repository } from "./base"

export default {
  async getRandomUser() {
    const { data } = await repository.get('https://randomuser.me/api/')
    return data
  }
}