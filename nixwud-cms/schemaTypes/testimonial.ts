import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'quote', title: 'Approved quote', type: 'text', rows: 5, validation: (Rule) => Rule.required()}),
    defineField({name: 'person', title: 'Person', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'organization', title: 'Organization', type: 'string'}),
    defineField({name: 'permissionConfirmed', title: 'Publication permission confirmed', type: 'boolean', initialValue: false}),
    defineField({name: 'featured', title: 'Feature on website', type: 'boolean', initialValue: false, validation: (Rule) => Rule.custom((value, context) => value && context.document?.permissionConfirmed !== true ? 'Confirm publication permission first.' : true)}),
  ],
  preview: {select: {title: 'person', subtitle: 'organization'}},
})
