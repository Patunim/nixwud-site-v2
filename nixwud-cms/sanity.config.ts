import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'nixwud-cms',

  projectId: 'jd42zs3r',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Nixwud content')
          .items([
            S.documentTypeListItem('post').title('Insights'),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('industry').title('Industries'),
            S.documentTypeListItem('caseStudy').title('Case Studies'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.documentTypeListItem('resource').title('Resources'),
            S.divider(),
            S.documentTypeListItem('author').title('Authors'),
            S.documentTypeListItem('category').title('Categories'),
            S.documentTypeListItem('siteSettings').title('Site Settings'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
