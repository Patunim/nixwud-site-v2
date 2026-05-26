import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',

  fields: [

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',

      of: [
        {
          title: 'Block',
          type: 'block',

          styles: [
            {
              title: 'Normal',
              value: 'normal'
            }
          ],

          lists: [],
        },
      ],
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
    }),

    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',

      of: [
        {
          type: 'string',
        },
      ],
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

  ],

  preview: {

    select: {
      title: 'name',
      media: 'image',
      subtitle: 'role',
    },

  },

})