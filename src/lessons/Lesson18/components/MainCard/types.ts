import { Dispatch, SetStateAction } from "react"

export interface UserData {
  firstName: string,
  lastName: string,
  age: number
}

export interface MainCardInterface {
  data: UserData | undefined,
  changeData: (() => void) | Dispatch<SetStateAction<UserData | undefined>>
}
