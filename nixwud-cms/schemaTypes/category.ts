import {defineField, defineType} from 'sanity'

export default defineType({

  name: 'category',
  title: 'Category',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'intro',
      title: 'Topic Introduction',
      type: 'array',

      of: [
        {
          type: 'block'
        }
      ],
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'featured',
      title: 'Featured Topic',
      type: 'boolean',

      initialValue: false,
    }),

    defineField({
      name: 'relatedTopics',
      title: 'Related Topics',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),

    defineField({
      name: 'prerequisiteTopics',
      title: 'Prerequisite Topics',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),

    defineField({
      name: 'advancedTopics',
      title: 'Advanced Topics',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),

  ],

})