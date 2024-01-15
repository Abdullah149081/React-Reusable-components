const getVariant = (variant: string | undefined): string => {
  switch (variant) {
    case 'primary':
      return 'btn-primary';
    case 'secondary':
      return 'btn-secondary';
    default:
      return 'btn-purple';
  }
};

export default getVariant;
