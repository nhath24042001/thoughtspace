export const getCategoryColor = (category: string): string => {
  switch (category) {
    case "Tech":
      return "text-blue-700";
    case "Life":
      return "text-green-700";
    case "Design":
      return "text-pink-700";
    default:
      return "text-gray-700";
  }
};
