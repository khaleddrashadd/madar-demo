const ROLES = {
  src: ['view:src-page', 'view:invoices-approval'],
  redf: ['view:redf-page', 'view:invoices-approval'],
  'super-admin': [
    'view:src-page',
    'view:redf-page',
    'view:invoices-approval',
    'change:context',
  ],
};

export const authorize = (role, action, resource) => {
  if (!role) return false;
  if (ROLES[role?.toLowerCase()]?.includes(`${action}:${resource}`)) {
    return true;
  }
  return false;
};
