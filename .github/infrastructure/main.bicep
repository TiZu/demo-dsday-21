@minLength(3)
@maxLength(9)
param storagePrefix string

module frontendStorage 'storage-account.bicep' = {
  name: 'deploy-frontend-storage'
  params: {
    storagePrefix: storagePrefix
  }
}

output frontendStorageName string = frontendStorage.outputs.frontendStorageName
output frontendStorageUrl string = frontendStorage.outputs.frontendStorageUrl
