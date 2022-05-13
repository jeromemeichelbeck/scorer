import { scoreReducer } from './scoreReducer'
import { ScoreTransformer, UserData } from './types'

const USER_SCORE_TRANSFORMERS: ScoreTransformer<UserData>[] = [
  { key: 'userName', score: 3 },
  { key: 'firstName', score: 2 },
  { key: 'lastName', score: 2 },
  { key: 'mainSkill', score: 1 },
  { key: 'skillIds', score: (skillIds) => skillIds.length },
  { key: 'linkedinId', score: 1 },
  { key: 'profilePictureUrl', score: 5 },
  { key: 'newsletter', score: (optin) => (optin ? 3 : 0) },
]

export const getProfileCompletionScore = (userData: UserData) =>
  USER_SCORE_TRANSFORMERS.reduce(scoreReducer(userData), 0)
