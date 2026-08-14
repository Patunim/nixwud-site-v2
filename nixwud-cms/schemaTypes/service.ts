import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 3, validation: (Rule) => Rule.required().max(220)}),
    defineField({name: 'positioning', title: 'Positioning statement', type: 'text', rows: 4}),
    defineField({name: 'outcomes', title: 'Typical outcomes', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'body', title: 'Page content', type: 'blockContent'}),
    defineField({name: 'order', title: 'Display order', type: 'number'}),
    defineField({name: 'active', title: 'Active', type: 'boolean', initialValue: true}),
  ],
})
