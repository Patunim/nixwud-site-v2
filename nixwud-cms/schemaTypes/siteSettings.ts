import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [

    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),

    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
    }),

    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter/X URL',
      type: 'url',
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),

    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),

  ],

})