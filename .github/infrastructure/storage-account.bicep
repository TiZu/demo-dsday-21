@minLength(3)
@maxLength(9)
param storagePrefix string

param storageSKU string = 'Standard_LRS'
param location string = resourceGroup().location

var uniqueStorageName = '${storagePrefix}st${uniqueString(resourceGroup().id)}'

resource frontendStorage 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: uniqueStorageName
  location: location
  sku: {
    name: storageSKU
  }
  kind: 'StorageV2'
  properties: {
    supportsHttpsTrafficOnly: true
  }
}

output frontendStorageName string = frontendStorage.name
output frontendStorageUrl string = frontendStorage.properties.primaryEndpoints.web
