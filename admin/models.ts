export interface ModelField {
  type?: 'menuUrl' | 'updateType' | 'url' | 'number' | 'boolean' | 'address' | 'openingHours' | 'regExp',
  path: string,
  title: string,
  default?: any
}

export interface FieldGroup {
  type: 'translated' | 'location',
  title: string,
  fields: Array<ModelField>
}

export type Field = ModelField | FieldGroup

export interface Model {
  name: string,
  key: string,
  tableFields: Array<{key: string, name: string}>,
  fields: Array<Field>,
  defaultSort?: string
}

const models: Array<Model> = [
  {
    name: 'Areas',
    key: 'areas',
    defaultSort: 'name_i18n.fi',
    tableFields: [
      {key: 'id', name: 'ID'},
      {key: 'name_i18n.fi', name: 'Name'}
    ],
    fields: [
      {
        type: 'translated',
        title: 'Name',
        fields: [
          {path: 'name_i18n.fi', title: 'Finnish'},
          {path: 'name_i18n.en', title: 'English'}
        ]
      },
      {
        type: 'number',
        title: 'Location Radius',
        path: 'locationRadius',
        default: 2
      },
      {
        type: 'location',
        title: 'Location',
        fields: [
          {path: 'latitude', title: 'Latitude', type: 'number'},
          {path: 'longitude', title: 'Longitude', type: 'number'}
        ]
      },
      {
        type: 'boolean',
        path: 'hidden',
        title: 'Hidden',
        default: false
      }
    ]
  },
  {
    name: 'Restaurants',
    key: 'restaurants',
    defaultSort: 'name_i18n.fi',
    tableFields: [
      {key: 'id', name: 'ID'},
      {key: 'AreaId', name: 'Area ID'},
      {key: 'name_i18n.fi', name: 'Name'},
      {key: 'address', name: 'Address'},
      {key: 'url', name: 'URL'}
    ],
    fields: [
      {
        type: 'translated',
        title: 'Name',
        fields: [
          {path: 'name_i18n.fi', title: 'Finnish'},
          {path: 'name_i18n.en', title: 'English'}
        ]
      },
      {path: 'url', title: 'URL', type: 'url'},
      {path: 'menuUrl', title: 'Menu URL', type: 'menuUrl'},
      {
        type: 'location',
        title: 'Location',
        fields: [
          {path: 'latitude', title: 'Latitude', type: 'number'},
          {path: 'longitude', title: 'Longitude', type: 'number'}
        ]
      },
      {path: 'address', title: 'Address', type: 'address'},
      {path: 'openingHours', title: 'Opening Hours', type: 'openingHours', default: [null, null, null, null, null, null, null]},
      {path: 'AreaId', title: 'Area ID', type: 'number'},      
      {path: 'hidden', title: 'Hidden', type: 'boolean'}
    ]
  },
  {
    name: 'Favorites',
    key: 'favorites',
    defaultSort: 'name_i18n.fi',
    tableFields: [
      {key: 'id', name: 'ID'},
      {key: 'name_i18n.fi', name: 'Name'},
      {key: 'regexp', name: 'Regular Expression'}
    ],
    fields: [
      {
        type: 'translated',
        title: 'Name',
        fields: [
          {path: 'name_i18n.fi', title: 'Finnish'},
          {path: 'name_i18n.en', title: 'English'}
        ]
      },
      {type: 'regExp', path: 'regexp', title: 'Regular Expression'}
    ]
  },
  {
    name: 'Updates',
    key: 'updates',
    defaultSort: 'createdAt',
    tableFields: [
      {key: 'id', name: 'ID'},
      {key: 'type', name: 'Type'},
      {key: 'description', name: 'Description'}
    ],
    fields: [
      {path: 'type', title: 'Type', type: 'updateType'},
      {path: 'description', title: 'Description'}
    ]
  }
]

export default models