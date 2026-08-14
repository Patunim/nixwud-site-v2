import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'jd42zs3r',
    dataset: 'production'
  },
  deployment: {
    // Keep the deployed Studio on the version tested in package-lock.json.
    autoUpdates: false,
  }
})
