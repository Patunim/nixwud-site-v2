import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Insight',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',

      validation: (Rule) =>
        Rule.required().min(10).max(120),
    }),

    defineField({
      name: 'keyInsight',
      title: 'Key Insight',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'title',
        maxLength: 96,
      },

      validation: (Rule) =>
        Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Used for blog cards and article previews.',
      type: 'text',
      rows: 4,

      validation: (Rule) =>
        Rule.max(200),
    }),

    defineField({
      name: 'summary',
      title: 'Article Summary',
      description: 'Used for the article summary block.',
      type: 'text',
      rows: 5,

      validation: (Rule) =>
        Rule.max(350),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',

      to: [{type: 'author'}],
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',

      options: {
        hotspot: true,
      },

      validation: (Rule) =>
        Rule.custom((image: {asset?: {_ref?: string; _id?: string}} | undefined) =>
          !image || image.asset?._ref || image.asset?._id ? true : 'Upload or select an image, or remove this empty image field.'
        ),

      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',

      initialValue: () =>
        new Date().toISOString(),
    }),

    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),

    defineField({
      name: 'featured',
      title: 'Feature on the website',
      description: 'Show this Insight in featured website sections.',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'reviewedAt',
      title: 'Reviewed At',
      type: 'datetime',
    }),

    defineField({
      name: 'factCheckedAt',
      title: 'Fact Checked At',
      type: 'datetime',
    }),

    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'reference',

      to: [
        {
          type: 'author',
        },
      ],
    }),

    defineField({
  name: 'sources',
  title: 'Sources',
  type: 'array',

  of: [

    {
      type: 'object',

      fields: [

        defineField({
          name: 'title',
          title: 'Source Title',
          type: 'string',

          validation: (Rule) =>
            Rule.required(),
        }),

        defineField({
          name: 'url',
          title: 'Source URL',
          type: 'url',

          validation: (Rule) =>
            Rule.required().uri({scheme: ['http', 'https']}),
        }),

        defineField({
          name: 'publisher',
          title: 'Publisher',
          type: 'string',
        }),

        defineField({
          name: 'publishedAt',
          title: 'Published Date',
          type: 'date',
        }),

      ],
    },

  ],
}),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),

  ],

  preview: {

    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },

    prepare(selection) {

      const {author} = selection

      return {
        ...selection,

        subtitle: author ? `by ${author}` : 'Nixwud Insight',
      }
    },
  },
})
