export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Tech':
      return 'bg-blue-50 dark:bg-blue-900 text-blue-500 dark:text-blue-400';
    case 'Life':
      return 'bg-green-50 dark:bg-green-900 text-green-500 dark:text-green-400';
    case 'Travel':
      return 'bg-yellow-50 dark:bg-yellow-900 text-yellow-500 dark:text-yellow-400';
    case 'Design':
      return 'bg-red-50 dark:bg-red-900 text-red-500 dark:text-red-400';
    case 'Health':
      return 'bg-purple-50 dark:bg-purple-900 text-purple-500 dark:text-purple-400';
    default:
      return 'bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400';
  }
};
