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

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'name',
        maxLength: 96,
      },

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',

      options: {
        hotspot: true,
      },

      validation: (Rule) =>
        Rule.custom((image: {asset?: {_ref?: string; _id?: string}} | undefined) =>
          !image || image.asset?._ref || image.asset?._id
            ? true
            : 'Upload or select an image, or remove this empty image field.',
        ),
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      description: 'Explain the author’s relevant experience and expertise in plain language.',
      type: 'array',

      of: [
        {
          title: 'Block',
          type: 'block',

          styles: [
            {
              title: 'Normal',
              value: 'normal',
            },
          ],

          lists: [],
        },
      ],

      validation: (Rule) =>
        Rule.required().warning('Add a bio to establish authorship and expertise.'),
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

      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter/X URL',
      type: 'url',

      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
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
