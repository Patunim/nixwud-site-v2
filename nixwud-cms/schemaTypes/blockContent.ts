import {defineType, defineArrayMember} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) => Rule.required().uri({scheme: ['http', 'https', 'mailto']}),
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
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
      validation: (Rule) =>
        Rule.custom((image: {asset?: {_ref?: string; _id?: string}} | undefined) =>
          !image || image.asset?._ref || image.asset?._id
            ? true
            : 'Upload or select an image, or remove this empty image block.',
        ),
    }),
  ],
})
