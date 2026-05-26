import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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

      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
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
      name: 'editorialStatus',
      title: 'Editorial Status',
      type: 'string',

      options: {
        list: [

          {
            title: 'Draft',
            value: 'draft',
          },

          {
            title: 'Reviewed',
            value: 'reviewed',
          },

          {
            title: 'Fact Checked',
            value: 'factChecked',
          },

          {
            title: 'Published',
            value: 'published',
          },

          {
            title: 'Archived',
            value: 'archived',
          },

        ],
      },

      initialValue: 'draft',
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
        }),

        defineField({
          name: 'url',
          title: 'Source URL',
          type: 'url',
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
      status: 'editorialStatus',
    },

    prepare(selection) {

      const {author, status} = selection

      return {
        ...selection,

        subtitle: author
          ? `by ${author} • ${status || 'draft'}`
          : status || 'draft',
      }
    },
  },
})