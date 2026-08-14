import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({name: 'client', title: 'Client name or approved descriptor', type: 'string'}),
    defineField({name: 'permissionConfirmed', title: 'Publication permission confirmed', type: 'boolean', initialValue: false}),
    defineField({name: 'challenge', title: 'Challenge', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
    defineField({name: 'approach', title: 'Approach', type: 'blockContent'}),
    defineField({name: 'outcome', title: 'Supported outcome', type: 'text', rows: 4}),
    defineField({name: 'evidence', title: 'Evidence and measurement notes', type: 'text', rows: 4}),
    defineField({name: 'services', title: 'Related services', type: 'array', of: [{type: 'reference', to: [{type: 'service'}]}]}),
    defineField({name: 'publishedAt', title: 'Published at', type: 'datetime'}),
    defineField({name: 'published', title: 'Publish on website', type: 'boolean', initialValue: false, validation: (Rule) => Rule.custom((value, context) => value && context.document?.permissionConfirmed !== true ? 'Confirm publication permission first.' : true)}),
  ],
})
