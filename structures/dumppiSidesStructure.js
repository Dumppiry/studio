import { FiSettings, FiFileText } from 'react-icons/fi'

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .icon(FiFileText)
        .title('Dumppi-TV')
        .child(S.editor().schemaType('photoSlider').documentId('dumppiTv')),
      S.listItem()
        .icon(FiFileText)
        .title('Satama-Approt')
        .child(S.editor().schemaType('page').documentId('satamaApproPage')),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['page', 'photoSlider'].includes(listItem.getId())
      )
    ])
