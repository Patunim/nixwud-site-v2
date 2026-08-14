import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 4}),
    defineField({name: 'challenges', title: 'Common challenges', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'body', title: 'Profile content', type: 'blockContent'}),
    defineField({name: 'order', title: 'Display order', type: 'number'}),
    defineField({name: 'active', title: 'Active', type: 'boolean', initialValue: false}),
  ],
})
