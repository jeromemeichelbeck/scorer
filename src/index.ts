import { UserData } from './lib/score/types'
import { getProfileCompletionScore } from './lib/score/getProfileCompletionScore'

const user1: UserData = {
  userName: 'johndoe',
  firstName: 'John',
  lastName: 'Doe',
  mainSkill: 'skill1',
  skillIds: ['skill1', 'skill2', 'skill3'],
  linkedinId: 'john-doe',
  profilePictureUrl: '12345.jpg',
  newsletter: false,
}

const user2: UserData = {
  userName: 'jane123',
  firstName: 'Jane',
  lastName: 'Doeto',
  mainSkill: 'skill3',
  skillIds: ['skill1', 'skill3'],
  linkedinId: 'jane-doeto',
  profilePictureUrl: '',
  newsletter: true,
}

const user1Score = getProfileCompletionScore(user1)
const user2Score = getProfileCompletionScore(user2)

console.log({ user1Score, user2Score })
