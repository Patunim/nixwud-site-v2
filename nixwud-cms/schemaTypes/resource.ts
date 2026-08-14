import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({name: 'type', title: 'Resource type', type: 'string', options: {list: [{title: 'PDF', value: 'PDF'}, {title: 'Template', value: 'Template'}, {title: 'Checklist', value: 'Checklist'}, {title: 'Tool', value: 'Tool'}, {title: 'Spreadsheet', value: 'Spreadsheet'}]}, validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4, validation: (Rule) => Rule.required().max(240)}),
    defineField({name: 'file', title: 'Downloadable file', type: 'file'}),
    defineField({name: 'externalUrl', title: 'External tool URL', type: 'url'}),
    defineField({name: 'featured', title: 'Featured', type: 'boolean', initialValue: false}),
    defineField({name: 'publishedAt', title: 'Published at', type: 'datetime'}),
    defineField({name: 'published', title: 'Publish on website', type: 'boolean', initialValue: false}),
  ],
})
