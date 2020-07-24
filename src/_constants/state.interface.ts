import { AlertState } from "./alert.interface";
import { SettingsState } from "./settings.interface";
import { UserState } from "./users.interface";

export interface initialState {
  usersReducer: UserState,
  alertReducer: AlertState,
  settingsReducer: SettingsState,
}