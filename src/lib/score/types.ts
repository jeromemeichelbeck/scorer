// This trick allows have the correct score type according to the key
type ScoreTransformerGeneric<T, K> = K extends keyof T
  ? {
      key: K
      /**
       * Score can be a fixed number or a function returning a number
       */
      score: number | ((data: T[K]) => number)
    }
  : never

export type ScoreTransformer<T> = ScoreTransformerGeneric<T, keyof T>

export type CollectionData = Record<string, any>

export interface UserData {
  userName: string
  firstName: string
  lastName: string
  mainSkill: string
  skillIds: string[]
  linkedinId: string
  profilePictureUrl: string
  newsletter: boolean
}
