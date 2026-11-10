/** Downloads Simple list — preserved menu version from the user reference.
 * Keep product order and copy stable; propose future menu variants separately.
 * The global masthead, search results, and destination pages may evolve independently.
 */
export const downloadsSimpleList = {
  id: 'downloads-simple-list',
  name: 'Downloads Simple list',
  heading: 'Downloads',
  category: 'Product downloads',
  browseLabel: 'Browse all Downloads',
  browseRoute: '/downloads?entry=services',
  products: [
  {
    id: 'rhel',
    name: 'Red Hat Enterprise Linux',
    description: 'Installation media, images, and architecture choices',
    aliases: ['rhel', 'red hat enterprise linux', 'enterprise linux'],
  },
  {
    id: 'openshift',
    name: 'Red Hat OpenShift',
    description: 'Clients and tools for your OpenShift environment',
    aliases: ['openshift', 'ocp', 'rosa'],
  },
  {
    id: 'ansible',
    name: 'Red Hat Ansible Automation Platform',
    description: 'Installation bundles and automation software',
    aliases: ['ansible', 'automation platform'],
  },
  {
    id: 'application-services',
    name: 'Application Services',
    description: 'Application runtimes, releases, and updates',
    aliases: ['application services', 'eap', 'jboss'],
  },
  {
    id: 'satellite',
    name: 'Red Hat Satellite',
    description: 'Satellite installation and management software',
    aliases: ['satellite'],
  },
],
};
