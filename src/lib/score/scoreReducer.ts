import { CollectionData, ScoreTransformer } from './types'

export const scoreReducer =
  <T extends CollectionData>(data: T) =>
  (totalScore: number, { key, score }: ScoreTransformer<T>) => {
    switch (typeof score) {
      case 'number':
        if (!data[key] || data[key].length === 0) {
          return totalScore
        }
        return totalScore + score
      case 'function':
        return totalScore + score(data[key])
      default:
        return totalScore
    }
  }
