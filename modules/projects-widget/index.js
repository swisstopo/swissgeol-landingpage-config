// modules/projects-widget/index.js
export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Projects Widget',
  },
  fields: {
    add: {
      _selectedProject: {
        type: 'relationship',
        label: 'Selected Project',
        withType: 'project',
        max: 1,
        required: true,
      },
    }
  },
  handlers(self) {
    return {
      async load(req, widgets) {
        for (const widget of widgets) {
          if (widget._selectedProject?.length) {
            const project = widget._selectedProject[0];

            // Log raw project data before join
            console.log('Before join:', project);

            // Join hero images
            await self.apos.doc.populateRelationships(req, project, {
              _heroImage1: true,
              _heroImage2: true
            });

            // Log after join (should now have _heroImage1 array with image docs)
            console.log('After join:', project);
          }
        }
      }
    };
  }
};
