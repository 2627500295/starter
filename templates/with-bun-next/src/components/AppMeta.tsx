import { APP_NAME, APP_VERSION, APP_FRAMEWORK, STAGE, NODE_ENV, LAST_MODIFIED } from '../constants/env'

export function AppMeta() {
  return (
    <div>
      <div>App Name: {APP_NAME}</div>
      <div>App Version: {APP_VERSION}</div>
      <div>App Framework: {APP_FRAMEWORK}</div>
      <div>Stage Environment: {STAGE}</div>
      <div>Node Environment: {NODE_ENV}</div>
      <div>Last Modified: {LAST_MODIFIED}</div>
    </div>
  )
}

export default AppMeta;