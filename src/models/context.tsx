import { IuserDetails } from "./login"

export type IValueContext = {
    user?: IuserDetails,
    login?: (userData: IuserDetails) => void,
    logout?: () => void
}