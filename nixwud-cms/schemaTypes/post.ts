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

      validation: (Rule) => Rule.required().min(10).max(120),
    }),

    defineField({
      name: 'keyInsight',
      title: 'Key Insight',
      description:
        'Give the clearest one- or two-sentence answer first. This supports readers, search and answer engines.',
      type: 'text',
      rows: 3,

      validation: (Rule) =>
        Rule.required()
          .max(280)
          .warning(
            'Add a concise direct answer to improve clarity for readers and answer engines.',
          ),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'title',
        maxLength: 96,
      },

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Used for blog cards and article previews.',
      type: 'text',
      rows: 4,

      validation: (Rule) => Rule.required().max(200),
    }),

    defineField({
      name: 'summary',
      title: 'Article Summary',
      description: 'A plain-language overview shown near the top of the article.',
      type: 'text',
      rows: 5,

      validation: (Rule) => Rule.max(350),
    }),

    defineField({
      name: 'seoTitle',
      title: 'Search Title (optional)',
      description:
        'Override the page title shown in search and social previews. Leave blank to use the Insight title.',
      type: 'string',

      validation: (Rule) =>
        Rule.max(60).warning('Long titles may be shortened in search and social previews.'),
    }),

    defineField({
      name: 'seoDescription',
      title: 'Search Description (optional)',
      description:
        'A concise, useful description for search and social previews. Leave blank to use the excerpt.',
      type: 'text',
      rows: 3,

      validation: (Rule) =>
        Rule.max(160).warning('Long descriptions may be shortened in search and social previews.'),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',

      to: [{type: 'author'}],

      validation: (Rule) => Rule.required(),
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
          !image || image.asset?._ref || image.asset?._id
            ? true
            : 'Upload or select an image, or remove this empty image field.',
        ),

      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          description: 'Describe the image for people using screen readers and for search engines.',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          title: 'Caption',
          description: 'Optional context displayed below the image.',
          type: 'string',
          validation: (Rule) => Rule.max(180),
        },
        {
          name: 'credit',
          title: 'Image Credit',
          description: 'Optional photographer, creator, company or source name.',
          type: 'string',
          validation: (Rule) => Rule.max(120),
        },
        {
          name: 'creditUrl',
          title: 'Credit Link',
          description: 'Optional link to the original creator or source.',
          type: 'url',
          validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
        },
        {
          name: 'displaySize',
          title: 'Image Size',
          type: 'string',
          initialValue: 'medium',
          options: {
            layout: 'radio',
            list: [
              {title: 'Small', value: 'small'},
              {title: 'Medium', value: 'medium'},
              {title: 'Large', value: 'large'},
              {title: 'Full width', value: 'full'},
            ],
          },
        },
        {
          name: 'alignment',
          title: 'Alignment',
          description: 'Most noticeable on small and medium images.',
          type: 'string',
          initialValue: 'center',
          options: {
            layout: 'radio',
            list: [
              {title: 'Left', value: 'left'},
              {title: 'Centre', value: 'center'},
              {title: 'Right', value: 'right'},
            ],
          },
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

      validation: (Rule) => Rule.min(1).warning('Add at least one category to clarify the topic.'),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',

      initialValue: () => new Date().toISOString(),

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      description:
        'Set this only after a substantive content update, not for small formatting changes.',
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

              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'url',
              title: 'Source URL',
              type: 'url',

              validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
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

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      description:
        'Optional direct questions and concise answers. Only add questions that the article genuinely answers.',
      type: 'array',
      validation: (Rule) => Rule.max(8),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required().max(160),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              description: 'Answer directly in plain language before adding qualifications.',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required().max(600),
            }),
          ],
          preview: {
            select: {title: 'question', subtitle: 'answer'},
          },
        },
      ],
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
